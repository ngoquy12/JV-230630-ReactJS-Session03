import React, { Component } from "react";

export default class FormControlled_C1 extends Component {
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
              value={this.state.userName}
              onChange={(e) => this.setState({ userName: e.target.value })}
              className="form-control"
              id="username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dateOfBirth" className="form-label">
              DateOfBirth
            </label>
            <input
              value={this.state.dateOfBirth}
              onChange={(e) => this.setState({ dateOfBirth: e.target.value })}
              type="date"
              className="form-control"
              id="dateOfBirth"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              type="text"
              className="form-control"
              id="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
              type="password"
              className="form-control"
              id="password"
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
