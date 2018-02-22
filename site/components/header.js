import React, { Component } from "react";
import Link from "next/link";

import { Row, Col } from "emotion-layout";
import styled, { css } from "react-emotion";

const Wrap = styled(Row)({
  backgroundColor: "#2b32b2",
  minHeight: "80px",
});

const Title = styled.h1({
  display: "inline-block",
  color: "#FFF",
  margin: 0,
  fontWeight: 700,
  borderBottom: "1px solid transparent",
  fontSize: "1rem",
  ":hover": {
    borderBottom: "1px solid #FFF",
  },
});

const linkClass = css({ color: "inherit", textDecoration: "none" });
const buttonClass = css({
  border: "1px solid #FFF",
  padding: "8px 16px",
  textDecoration: "none",
  color: "#FFF",
  ":hover": {
    backgroundColor: "rgba(255,255,255,.05)"
  },
});

class Header extends Component {
  render() {
    return (
      <Wrap justify="center" align="center" p={3}>
        <Col width={1}>
          <Title>
            <Link href="/">
              <a css={linkClass}>React Native Screens</a>
            </Link>
          </Title>
        </Col>
        <Col width={1} justify="flex-end" align="center">
          <Link href="/submit">
            <a css={buttonClass}>Submit Screen + </a>
          </Link>
        </Col>
      </Wrap>
    );
  }
}

export default Header;
