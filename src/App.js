import React from "react";

export default class RegistrationForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: " ",
            phoneNumber: " ",
            email: " ",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


        handleChange(e){
            this.setState({
                [e.target.name]: e.target.value
            });
        };

        handleSubmit(e){
            console.log(this.state)
            e.preventDefault();
        };


    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <h2>Регистрация пользователя</h2>
                <div className="form-group">
                    <label>ФИО:</label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}

                    />
                </div>
                <div className="form-group">
                    <label>Номер телефона:</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={this.state.phoneNumber}
                        onChange={this.handleChange}

                    />
                </div>
                <div className="form-group">
                    <label>Email адрес:</label>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </div>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}










