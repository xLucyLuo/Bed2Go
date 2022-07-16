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

    componentWillUnmount() {
        this.props.clearSessionErrors();
    };


    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    };

    update(field) {
        return (e) => this.setState({[field]: e.target.value});
    };

    demoLogin(e) {
        e.preventDefault();
        this.props.login({
            email: "demo.user@mybnb.com",
            password: "123123",
        }).then(this.props.closeModal)
    };

    renderErrors() {
        return (
            <div className="error-message">
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
        const { formType } = this.props;
        return (
            <div className="session-form-container" > 
                <header className="session-form-header">
                    <button onClick={this.props.closeModal} className="close-x">X</button>
                    <h1>{formType}</h1>
                </header>
                <form className="session-form" onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    {/* <label htmlFor="email-input">Email: </label> */}
                    <input id="email-input" placeholder="Email" type="text" onChange={this.update("email")} value={this.state.email}/>
                    {/* <label htmlFor="password-input">Password: </label> */}
                    <input id="password-input" placeholder="Password" type="password" onChange={this.update("password")} value={this.state.password}/>
                    <br/>
                    {/* <label htmlFor="fname-input">First Name: </label> */}
                    <input id="fname-input" hidden={formType !== "Sign up"} placeholder="First Name" type="text" onChange={this.update("fname")} value={this.state.fname}/>
                    {/* <label htmlFor="lname-input">Last Name: </label> */}
                    <input id="lname-input" hidden={formType !== "Sign up"} placeholder="Last Name" type="text" onChange={this.update("lname")} value={this.state.lname}/>
                    <br/>
                    <button className="sign-in-button" value={formType}>{formType}</button>
                    <br /> 
                    <button className="demo-login-button" onClick={this.demoLogin}>Demo User</button>
                </form>
                <footer className="session-form-footer">
                    {/* {navLink} */}
                    {this.props.otherForm}
                </footer>
            </div>
        )
    }
};

export default SessionForm;