import React, { Component } from "react";
import { loginUser } from "../redux/action/user";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.registerUser(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="email"
          value="email"
          placeholder="Enter Email"
          onChange={this.handleChange}
        />
        <input
          type="text"
          id="password"
          value="password"
          placeholder="Enter Password"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      loginUser,
    },
    dispatch
  );
};

export default connect(mapDispatchToProps)(Login);
