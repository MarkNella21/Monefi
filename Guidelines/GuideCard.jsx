import PropTypes from "prop-types";
import React from "react";
import debug from "sabio-debug";
import { Button, Card, Col } from "react-bootstrap";
const _logger = debug.extend("guideCard");

const GuideCard = (props) => {
  const guide = props.guide;
  _logger("prop", props);
  _logger("guide data", guide);

  const moreInfoClick = () => {
    _logger("info clicked");
  };

  return (
    <React.Fragment>
      <Col
        className="w-80 mh-100 pb-5 pt-5 "
        lg={8}
        md={{ offset: 2, span: 8 }}
        xs={12}
      >
        <Card>
          <Card.Body>
            <Card.Title>{guide?.title}</Card.Title>
            <Col>{guide?.description}</Col>
            <Button onClick={moreInfoClick}>Info</Button>
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment>
  );
};

GuideCard.propTypes = {
  guide: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    articles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
};

export default GuideCard;
