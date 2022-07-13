import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
          fname: "",
          lname: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    };

    componentDidMount() {
        this.props.clearSessionErrors();
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    };

    update(field) {
        return (e) => this.setState({[field]: e.target.value});
    };

    demoLogin(e) {
        e.preventDefault();
        this.props.login({
            email: "demo.user@mybnb.com",
            password: "123123",
        })
    };

    renderErrors() {
        // console.log("this is props in errors")
        // console.log(this.props.errors)
        // if (this.props.errors.length===0) {
        //     return <></>
        // }

        return (
            <div>
                <ul>
                    {this.props.errors.map((err, i) => 
                        <li key={`${i}`}>{err}</li>
                    )}
                </ul>
                <br/>
            </div>
        );
    };

    render() {
        const { formType, navLink } = this.props;
        return (
            <div className="sign-in-form">
                <div onClick={this.props.closeModal} className="close-x">X</div>
                <h1>{formType}</h1>
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email-input">Email: </label>
                    <input id="email-input" type="text" onChange={this.update("email")} value={this.state.email}/>
                    <br/><br/>
                    <label htmlFor="password-input">Password: </label>
                    <input id="password-input" type="password" onChange={this.update("password")} value={this.state.password}/>
                    {formType === "Sign up" ? (
                        <div>
                            <br/>
                            <label htmlFor="fname-input">First Name: </label>
                            <input id="fname-input" type="text" onChange={this.update("fname")} value={this.state.fname}/>
                            <br/><br/>
                            <label htmlFor="lname-input">Last Name: </label>
                            <input id="lname-input" type="text" onChange={this.update("lname")} value={this.state.lname}/>
                        </div>    
                        ) : null
                    }
                    <br/><br/>
                    <button className="sign-in-button" value={formType}>{formType}</button>
                    <br /> 
                    <button className="demo-login-button" onClick={this.demoLogin}>Demo User</button>
                </form>
                <br/><br/>
                {/* {navLink} */}
                {this.props.otherForm}
            </div>
        )
    }
};

export default SessionForm;