import React, { Component } from "react";
import Link from "next/link";

import { Row, Col } from "emotion-layout";
import styled, { css } from "react-emotion";

import Twitter from "./twitter";
import Facebook from "./facebook";
import Github from "./github";

const Wrap = styled(Row)({
  backgroundColor: "#171718",
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
    backgroundColor: "rgba(255,255,255,.05)",
  },
});

const SocialLink = styled.a({
  margin: "0 8px",
});

class Header extends Component {
  render() {
    return (
      <Wrap justify="center" align="center" p={3} flexWrap={["wrap", "wrap", "nowrap"]}>
        <Col width={1} justify={["center", "center", "flex-start"]} mb={[2, 2, 0]}>
          <Title>
            <Link href="/">
              <a href="/" css={linkClass}>React Native Screens</a>
            </Link>
          </Title>
        </Col>
        <Col width={[1, 1, 1 / 2]} justify="space-between" align="center">
          <Col width={1} align="center" justify="flex-end">
            <SocialLink href="https://twitter.com/codedailyio">
              <Twitter width={32} height={32} />
            </SocialLink>
            <SocialLink href="https://github.com/codedailyio">
              <Github width={32} height={32} />
            </SocialLink>
            <SocialLink href="https://www.facebook.com/Code-Daily-145985415926063/">
              <Facebook width={32} height={32} />
            </SocialLink>
          </Col>
          <Col width={1} align="center" justify="flex-end">
            <Link href="/submit">
              <a css={buttonClass}>Submit Screen + </a>
            </Link>
          </Col>
        </Col>
      </Wrap>
    );
  }
}

export default Header;
