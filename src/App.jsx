import "./App.css";
import FormControlled_C1 from "./components/FormControlled_C1";
import FormControlled_C2 from "./components/FormControlled_C2";
import Lifecycle_Comp from "./components/Lifecycle_Comp";
import { Component } from "react";
import FormUncontrolled from "./../../../React/react_hooks/src/components/form/FormUncontrolled";

class App extends Component {
  // Khởi tạo constructor
  constructor(props) {
    super(props);
    // Khai báo state
    this.state = {
      show: false,
      company: "Rikkei Academy",
      showForm: false, // state để quyết định trạng thái bật tắt của form
    };
  }

  handleShow = (e) => {
    console.log("event", e); // event là một sự kiện mặc định được JS tạo ra khi có sự kiện từ người dùng
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <>
        {/* Khu vực button */}
        <button onClick={this.handleShow}>Show</button>
        <button
          onClick={() =>
            this.setState({
              company: "Rikkeisoft",
            })
          }
        >
          Change Props
        </button>

        <button
          onClick={() =>
            this.setState({
              showForm: !this.state.showForm,
            })
          }
        >
          Show Form
        </button>

        {/* Khu vực hiển thị các component */}
        {this.state.show === true ? (
          <Lifecycle_Comp company={this.state.company} />
        ) : (
          <></>
        )}
        {/* Hiển thị form */}
        {this.state.showForm ? <FormUncontrolled /> : <></>}
      </>
    );
  }
}

export default App;
