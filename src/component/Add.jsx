import React, { Component } from "react";

class Add extends Component {
  state = { first: "", last: "" };

  onChangeHandle = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandle = (e) => {
    e.preventDefault();
    this.props.func(this.state.first, this.state.last);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandle}>
          <label>
            First Name
            <input
              type="text"
              name="first"
              onChange={this.onChangeHandle}
              required
              minLength={2}
            />
          </label>

          <label>
            Last Name
            <input
              type="text"
              name="last"
              onChange={this.onChangeHandle}
              required
              minLength={2}
            />
          </label>
          <button ref={this.btnRef} type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default Add;
