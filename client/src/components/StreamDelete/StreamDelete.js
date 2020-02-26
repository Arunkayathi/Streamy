import React, { Component } from "react";
import Modal from "../../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          className="ui primary button"
          onClick={() => this.props.deleteStream(id)}
        >
          Delete
        </button>
        <button className="ui button" onClick={() => history.push("/")}>
          Cancel
        </button>
      </React.Fragment>
    );
  }
  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream ?";
    }
    return `Are you sure you want to delete the stream with title: ${this.props.stream.title} ?`;
  }
  render() {
    return (
      <div>
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        ></Modal>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

const mapDispatchToProps = {
  fetchStream,
  deleteStream
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamDelete);
