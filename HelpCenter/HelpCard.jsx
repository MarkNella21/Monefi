import PropTypes from "prop-types";
import React from "react";
import debug from "sabio-debug";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
const _logger = debug.extend("HelpCard");
const HelpCard = (props) => {
  _logger(props);
  const guide = props.item;

  return (
    <React.Fragment>
      <Col className="w-75 mh-100 pt-5 pb-10" lg={6} md={4} s={8} xs={12}>
        <Card>
          <Card.Body>
            <Card.Text className="mb-6">{guide?.icon}</Card.Text>
            <Card.Title>{guide?.title}</Card.Title>
            <Col>{guide?.description}</Col>
            <Link to={guide?.link}>{guide?.linkname}</Link>
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment>
  );
};

HelpCard.propTypes = {
  item: PropTypes.shape({
    link: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    linkname: PropTypes.string.isRequired,
    icon: PropTypes.shape({}),
  }).isRequired,
};

export default HelpCard;
