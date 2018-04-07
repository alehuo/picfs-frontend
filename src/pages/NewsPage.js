import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Jumbotron, Button } from "react-bootstrap";
import FontAwesome from "react-fontawesome";

export class NewsPage extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <React.Fragment>
        <Jumbotron>
          <h1>News</h1>
          <p>See what's going on at the clubhouse.</p>
          <p>
            <Button bsStyle="success">
              <FontAwesome name="plus" /> Add an article
            </Button>
          </p>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
