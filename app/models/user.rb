class User < ApplicationRecord
    # can also use URI::MailTo::EMAIL_REGEXP or Devise.email_regrexp (gem devise) for email validation format
    # Format used:
    # /regrex expression written between forward slashes/
    # \A beginning of the string is [] at lease one character that ^ does not include @  or \s whitespace character (space, tab, newline, carriage return, vertical tab)
    # + one or more @ and [] one character ^ that is not @ or \s whitespace + one or more \. literal .
    # + one or more [] one character that is not @ or \s whitespace
    # + one or more \z end of string
    validates :email, 
        presence: true, 
        uniqueness: true,
        format: {with: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/}

    validates :session_token,
    presence: true, 
    uniqueness: true
    
    validates :fname, :lname, 
    presence: true
    
    validates :password, 
    length: {minimum: 6}, 
    allow_nil: true
    
    #AWS S3
    # has_many_attached :photos
    
    has_many :listings,
        foreign_key: :host_id,
        class_name: :Listing

    has_many :reservations

    has_many :reviews,
        foreign_key: :reviewer_id,
        class_name: :Review

    has_many :reservations

    has_many :hosted_reservations,
        through: :listings,
        source: :reservations

    #AASPIRE
    attr_reader :password
    

    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        if user && user.is_password?(password)
            return user
        end

        return nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = get_unique_session_token
        self.save
        return self.session_token
    end

    def ensure_session_token
        self.session_token ||= get_unique_session_token
    end

    def get_unique_session_token
        session_token = SecureRandom.urlsafe_base64

        while User.find_by(session_token: session_token)
            session_token = SecureRandom.urlsafe_base64
        end

        return session_token
    end

end
