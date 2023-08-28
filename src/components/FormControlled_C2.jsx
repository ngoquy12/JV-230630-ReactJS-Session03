import React, { Component } from "react";

export default class FormControlled_C2 extends Component {
  constructor(props) {
    super(props);
    // Khai báo state
    this.state = {
      userName: "",
      dateOfBirth: "",
      email: "",
      password: "",
    };
  }

  // Hàm lắng nghe sự thay đổi trong các ô input
  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value, // [userName] : ngovanquy
      // userName: "ngovanquy"
      // // [email]: 'quy@gmail.com'
      // email: 'quy@...'
    });

    // Cập nhật lại state
    // if (name === "userName") {
    //   this.setState({
    //     userName: value,
    //   });
    // } else if (name === "dateOfBirth") {
    //   this.setState({
    //     dateOfBirth: value,
    //   });
    // } else if (name === "email") {
    //   this.setState({
    //     email: value,
    //   });
    // } else {
    //   this.setState({
    //     password: value,
    //   });
    // }
  };

  // Hàm xử lý gửi dữ liệu
  handleSubmit = (e) => {
    // Ngăn chặn sự kiện submit của form
    e.preventDefault();
    // Đối tượng newUser
    const newUser = {
      userName: this.state.userName,
      dateOfBirth: this.state.dateOfBirth,
      email: this.state.email,
      password: this.state.password,
    };

    console.log("New User", newUser);
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              UserName
            </label>
            <input
              onChange={this.handleChange}
              className="form-control"
              id="username"
              name="userName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dateOfBirth" className="form-label">
              DateOfBirth
            </label>
            <input
              onChange={this.handleChange}
              type="date"
              className="form-control"
              id="dateOfBirth"
              name="dateOfBirth"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="email"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              onChange={this.handleChange}
              type="password"
              className="form-control"
              id="password"
              name="password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
