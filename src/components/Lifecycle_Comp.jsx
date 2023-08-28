import { Component } from "react";

export default class Lifecycle_Comp extends Component {
  // Khởi tạo constructor
  constructor(props) {
    super(props);
    console.log("Component được khởi tạo");
    this.state = {
      className: "JV-230630",
    };
  }

  componentWillMount() {
    console.log("Component Will Mount");
  }

  componentDidMount() {
    console.log("Component did Mount");
  }

  componentWillReceiveProps(newProps) {
    console.log(
      "Componnet Will Receive Props được chạy, lúc này props mới là: ",
      newProps
    );
  }

  shouldComponentUpdate() {
    return true; // Mặc định hàm này sẽ return true
  }

  componentWillUpdate() {
    console.log("Component will Update được chạy");
  }

  componentDidUpdate() {
    console.log("Component did Update được gọi");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount"); // Thường được sử dụng để clean sự kiện
  }

  render() {
    console.log("Component được render");
    return (
      <>
        <h4>Tên công ty ở component con: {this.props.company}</h4>
        <h3>Tên lớp: {this.state.className}</h3>
        <button
          onClick={() =>
            this.setState({
              className: "HN/RA-JV-230630",
            })
          }
        >
          Change State
        </button>
      </>
    );
  }
}
