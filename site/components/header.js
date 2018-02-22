import React, { Component } from "react";
import Link from "next/link";

import { Row, Col } from "emotion-layout";
import styled, { css } from "react-emotion";

const Wrap = styled(Row)({
  backgroundColor: "#FFF",
});

const Title = styled.h1({
  display: "inline-block",
  color: "#171718",
  margin: 0,
  fontWeight: 700,
  fontSize: "1rem",
  ":hover": {
    color: "#2b32b2",
  },
});

const linkClass = css({ color: "inherit", textDecoration: "none" });

class Header extends Component {
  render() {
    return (
      <Wrap justify="center" p={3}>
        <Col width={1}>
          <Title>
            <Link href="/">
              <a css={linkClass}>React Native Screens</a>
            </Link>
          </Title>
        </Col>
      </Wrap>
    );
  }
}

export default Header;
