import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import { fetchKeys } from "./../reducers/keyReducer";

export class KeyList extends Component {
  componentDidMount() {
    this.props.fetchKeys();
  }
  render() {
    return (
      <Table striped bordered condensed hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Student union</th>
            <th>Date assigned</th>
            <th>Key type</th>
          </tr>
        </thead>
        <tbody>
          {this.props.keys ? (
            this.props.keys.map(key => (
              <tr>
                <td>{key.id}</td>
                <td>{key.name}</td>
                <td>{key.studentUnion}</td>
                <td>{key.date.toLocaleString()}</td>
                <td>{key.keyDesc}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>No keys.</td>
            </tr>
          )}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  fetchKeys
};

export default connect(mapStateToProps, mapDispatchToProps)(KeyList);
