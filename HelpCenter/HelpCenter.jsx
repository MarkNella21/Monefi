import React, { Fragment } from "react";
import { Col, Row, Container, Image, Form } from "react-bootstrap";
import HelpCard from "./HelpCard";
import ThreeDGirlSeeting from "../../assets/images/svg/3d-girl-seeting.svg";
import debug from "sabio-debug";
import helpCenterData from "./helpCenterData";

const HelpCenter = () => {
  const _logger = debug.extend("HelpCenter");
  _logger(helpCenterData);

  const mapSingleCard = (guide, index) => {
    return (
      <Col md={4} xs={12} key={index}>
        <HelpCard item={guide} />
      </Col>
    );
  };
  const helpCards = helpCenterData.map(mapSingleCard);

  return (
    <Fragment>
      <div className="py-lg-15 py-10">
        <Container>
          <Row className="align-items-center justify-content-center">
            {/* <img src={?.logo} className="col-5 mx-auto p-2 img-thumbnail img-fluid rounded-circle" alt="404 not found" /> */}
            <Col md={6} xs={12}>
              <h1 className="fw-bold mb-1 display-3">How can we help you?</h1>
              <p className="mb-5 text-dark ">
                Have questions? Search through our Help Center
              </p>
              <div className="pe-md-6">
                <Form className="d-flex align-items-center">
                  <span className="position-absolute ps-3">
                    <i className="fe fe-search text-muted"></i>
                  </span>
                  <Form.Control
                    type="search"
                    placeholder="Enter a question, topic or keyword"
                    className="ps-6 border-0 smooth-shadow-md"
                  />
                </Form>
              </div>
              <span className=" mt-2 d-block">
                ... or choose a category to quickly find the help you need
              </span>
            </Col>
            <Col md={6} xs={12}>
              <div className="d-flex align-items-center justify-content-end">
                <Image
                  src={ThreeDGirlSeeting}
                  alt="404 nothing here"
                  className="text-center img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Col>
          <Row lg={{ offset: 2, span: 8 }} xs={8}>
            {helpCards}
          </Row>
        </Col>
      </Container>
    </Fragment>
  );
};
export default HelpCenter;
