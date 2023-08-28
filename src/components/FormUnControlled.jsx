import React, { Component } from "react";

export default class FormUncontrolled extends Component {
  constructor(props) {
    super(props);
    // Khai báo tham chiếu cho biến userName
    this.userName = React.createRef();
    // Khai báo tham chiếu cho biến dateOfBirth
    this.dateOfBirth = React.createRef();
    // Khai báo tham chiếu cho biến email
    this.email = React.createRef();
    // Khai báo tham chiếu cho biến password
    this.password = React.createRef();
  }

  // Hàm xử lý gửi dữ liệu
  handleSubmit = (e) => {
    // Ngăn chặn sự kiện submit của form
    e.preventDefault();
    // Đối tượng newUser
    // const newUser = {
    //   userName: this.userName,
    //   dateOfBirth: this.dateOfBirth,
    //   email: this.email,
    //   password: this.password,
    // };

    // console.log("New User", newUser);
    console.log("UserName==>", this.userName.current.value);
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
              ref={this.userName}
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
              ref={this.dateOfBirth}
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
              ref={this.email}
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
              ref={this.password}
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
