import React, { Component } from "react";
import { fetchStreams } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin({ userId, id }) {
    if (userId === this.props.userId) {
      return (
        <div className="right floated content">
          <Link to={`streams/edit/${id}`} className="ui button primary">
            Edit
          </Link>
          <Link to={`streams/delete/${id}`} className="ui button negative">
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera"></i>

          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }
  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui float right button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchStreams
};
const mapStateToProps = (
  { streams, auth: { userId, isSignedIn } },
  ownProps
) => ({
  streams: Object.values(streams),
  userId,
  isSignedIn
});

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);
