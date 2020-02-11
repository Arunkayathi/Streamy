import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  renderInput() {}
  render() {
    return (
      <form>
        <Field
          name="title"
          component={this.renderInput}
          type="text"
          placeholder="stream title"
        />
        <Field
          name="description"
          component={this.renderInput}
          type="text"
          placeholder="Stream description"
        />
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
