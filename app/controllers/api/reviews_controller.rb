class Api::ReviewsController < ApplicationController
    before_action :require_logged_in

    def create
        @review = Review.new(review_params)

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = current_user.reviews.find_by(id: params[id])

        if !@review
            render json: ["Cannot edit this review"], status: :unprocessable_entity
        elsif @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end

    end

    def destroy
        @review = current_user.reviews.find_by(id: params[id])

        @review.destroy if @review

        render json: ["Cannot delete this review"], status: 404
    end

    def show
        @review = Review.find(params[:id])
    end

    def index
        reviews = Review.all

        if params[:reviewId]
            reviews = reviews.where(id: params[:reviewId])
        end

        if params[:listingId]
          reviews = reviews.where(listing_id: params[:listingId])
        end

        if params[:reviewerId]
            reviews = reviews.where(reviewer_id: params[:reviewerId])
        end
        
        # @reviews = reviews.includes(:listing, review)
        render :index
    end

    private
  
    def review_params
        params.require(:review).permit(:listing_id, :reviewer_id, :comment, :cleanliness, :accuracy, :communication, :location, :check_in, :value)
    end
end
