import React from "react";
import { FooterStyle } from "./style";
import { Col, Container, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <FooterStyle>
      <div className="mst-foot">
        <Container>
          <Row>
            <Col className="text-center py-3">
              <h6>Copyright &copy; MernSt01_Arkaprava De</h6>
            </Col>
          </Row>
        </Container>
      </div>
    </FooterStyle>
  );
};
