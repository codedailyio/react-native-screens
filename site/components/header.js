import React, { Component } from "react";
import Link from "next/link";

import { Row, Col } from "emotion-layout";
import styled from "react-emotion";

const Wrap = styled(Row)([], props => {
  return {
    backgroundColor: props.theme.dark,
  };
});

const Title = styled.h1({
  display: "inline-block",
  justifyContent: "center",
  alignItems: "center",
});

class Header extends Component {
  render() {
    return (
      <Wrap align="center" p={3} flexDirection="row">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Title>React Native Screens</Title>
        <Link href="/collections">
          <a>Collections</a>
        </Link>
      </Wrap>
    );
  }
}

export default Header;
