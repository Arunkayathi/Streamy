import React, { Component } from "react";
import { fetchStreams } from "../../actions";
import { connect } from "react-redux";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera"></i>
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.streams);
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchStreams
};
const mapStateToProps = ({ streams }, ownProps) => ({
  streams: Object.values(streams)
});

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);
