import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "../StreamForm/StreamForm";
import stream from "../../api/stream";
class StreamCreate extends Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };
  render() {
    return (
      <div>
        <h3>Create Stream</h3>
        <StreamForm onSubmit={this.onSubmit}></StreamForm>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createStream
};

export default connect(null, mapDispatchToProps)(StreamCreate);
