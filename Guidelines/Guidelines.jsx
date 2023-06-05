import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { guidesResourcesData } from "./guidelinesData";
import GuideCard from "./GuideCard";

const GuideLines = () => {
  const guideSingleMap = (guideCardData) => {
    return (
      <Col lg={4} md={6} xs={12} key={"GuidesA-" + guideCardData.id}>
        <GuideCard guide={guideCardData} />
      </Col>
    );
  };
  const guide = guidesResourcesData.map(guideSingleMap);

  return (
    <Fragment>
      <div className="py-8 HelpCenter_MonefiThemeBackGround">
        <Container>
          <Row>
            <Col md={{ offset: 4, span: 8 }} xs={12}>
              <h1 className="fw-bold mb-0 display-4">Guide & Resources</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <Row>
        <Col>
          <Row>{guide}</Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default GuideLines;
