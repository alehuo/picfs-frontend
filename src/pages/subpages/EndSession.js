import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import { endWatch } from "../../reducers/sessionReducer";
import EndWatchForm from "../../forms/EndSessionForm";

export class EndSession extends Component {
  handleSubmit = values => {
    this.props.endWatch(this.props.token, values.endMessage);
  };
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>End session</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EndWatchForm
            handleClose={this.props.onHide}
            onSubmit={this.handleSubmit}
            isEnding={this.props.isEnding}
          />
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  token: state.user.token,
  isEnding: state.watch.isEnding
});

const mapDispatchToProps = {
  endWatch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EndSession);