import React, { Component } from "react";
import { registerUser } from "../redux/action/user";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    photo: "",
    Country: "",
    hobbies: "",
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleChackBox = (event) => {
    this.setState({
      [event.target.name]: event.target.checked,
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
          id="firstName"
          value="firstName"
          placeholder="Enter FirstName"
          onChange={this.handleChange}
        />
        <input
          type="text"
          id="lastName"
          value="lastName"
          placeholder="Enter LastName"
          onChange={this.handleChange}
        />
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

        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          onChange={this.handleChange}
        />
        <label for="male">Male</label>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          onChange={this.handleChange}
        />
        <label for="female">Female</label>

        <input
          type="checkbox"
          id="Hindi"
          name="Hindi"
          value="Hindi"
          onChange={this.handleChackBox}
        />
        <label for="Hindi"> Hindi</label>
        <br />
        <input
          type="checkbox"
          id="English"
          name="English"
          value="Car"
          onChange={this.handleChackBox}
        />
        <label for="English"> English</label>
        <br />
        <input
          type="checkbox"
          id="Punjabi"
          name="Punjabi"
          value="Punjabi"
          onChange={this.handleChackBox}
        />
        <label for="Punjabi"> Punjabi</label>
        <label for="cars">Choose Country:</label>
        <select name="cars" id="cars" onChange={this.handleChange}>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="China">China</option>
          <option value="Brazil">Brazil</option>
        </select>
        <br />
        <label for="cars">Choose Hobbies :</label>
        <select name="cars" id="cars" onChange={this.handleChange}>
          <option value="Gyming">Gyming</option>
          <option value="Cycling">Cycling</option>
          <option value="Reading">Reading</option>
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      registerUser,
    },
    dispatch
  );
};

export default connect(mapDispatchToProps)(Register);
