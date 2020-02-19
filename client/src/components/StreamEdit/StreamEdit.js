import React, { Component } from "react";
import { fetchStream, editStream } from "../../actions";
import { connect } from "react-redux";
import StreamForm from "../StreamForm/StreamForm";

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editStream(formValues, this.props.match.params.id);
  };

  renderStream() {
    console.log(this.props.stream);
    if (!this.props.stream) {
      return <h2>Loading...</h2>;
    }
    return (
      <StreamForm
        onSubmit={this.onSubmit}
        initialValues={{
          title: this.props.stream.title,
          description: this.props.stream.description
        }}
      ></StreamForm>
    );
  }
  render() {
    return (
      <div>
        <h2>Edit Stream</h2>
        {this.renderStream()}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

const mapDispatchToProps = {
  fetchStream,
  editStream
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit);
