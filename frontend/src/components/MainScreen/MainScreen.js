import React from "react";
import { MainScreenStyle } from "./style";
import { Container, Row } from "react-bootstrap";

export const MainScreen = ({ title, children }) => {
  return (
    <MainScreenStyle>
      <div className="mst-mainscreen">
        <Container>
          <Row>
            <div className="page">
              {title && (
                <>
                  <h1 className="heading">{title} </h1>
                  <hr />
                </>
              )}
              {children}
            </div>
          </Row>
        </Container>
      </div>
    </MainScreenStyle>
  );
};
