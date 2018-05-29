import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Button } from "react-bootstrap";
import FontAwesome from "react-fontawesome";
import {
  fetchStudentUnions,
  deleteStudentUnion
} from "./../reducers/studentUnionReducer";
import PermissionUtils from "./../utils/PermissionUtils";

export class StudentUnionsList extends Component {
  componentDidMount() {
    this.props.fetchStudentUnions(this.props.token);
  }
  render() {
    return (
      <Table striped bordered condensed hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            {PermissionUtils.hasPermission(
              this.props.perms,
              Math.pow(2, 11) ||
                PermissionUtils.hasPermission(this.props.perms, Math.pow(2, 12))
            ) && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {this.props.stdus ? (
            this.props.stdus.map(union => (
              <tr key={union.unionId}>
                <td>{union.unionId}</td>
                <td>{union.name}</td>
                <td>{union.description}</td>
                {PermissionUtils.hasPermission(
                  this.props.perms,
                  Math.pow(2, 11)
                ) && (
                  <td>
                    <Button
                      bsStyle="danger"
                      onClick={() =>
                        this.props.deleteStudentUnion(
                          union.unionId,
                          this.props.token
                        )
                      }
                    >
                      <FontAwesome name="delete" /> Delete
                    </Button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No student unions.</td>
            </tr>
          )}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = state => ({
  token: state.user.token,
  perms: state.permission.userPerms
});

const mapDispatchToProps = {
  fetchStudentUnions,
  deleteStudentUnion
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentUnionsList);
