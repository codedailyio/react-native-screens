import React, { Component } from "react";
import Helmet from "react-helmet";
import Theme from "../components/themer";
import Header from "../components/header";
import { Row, Col } from "emotion-layout";
import styled from "react-emotion";

import { registerEmail } from "../api";

const RowWrap = styled(Col)({
  color: "#171718",
  minHeight: "150px",
});

const FormWrap = styled.form({
  display: "flex",
  flexDirection: "column",
  flex: "1 1 auto",
});

const Title = styled.h3({
  fontWeight: 700,
  fontSize: "1.5rem",
  margin: 0,
  padding: 0,
  marginBottom: "16px",
});
const Note = styled.p({
  fontWeight: 500,
  fontSize: "1rem",
  margin: 0,
  padding: 0,
  maxWidth: "33%",
  textAlign: "center",
  lineHeight: 1.5,
});

const Input = styled.input({
  maxWidth: "400px",
  width: "100%",
  background: "none",
  boxShadow: "none",
  outline: 0,
  textAlign: "center",
  border: "none",
  borderBottom: "3px solid #171718",
  margin: "16px 0",
  borderRadius: "0",
  color: "#171718",
  padding: "10px",
  "::placeholder": {
    color: "#171718",
  },
});

const Button = styled.button({
  borderRadius: "80px",
  background: "#2b32b2",
  color: "#FFF",
  marginBottom: "16px",
  fontWeight: "600",
  padding: "10px 80px",
  fontSize: "18px",
  lineHeight: "1.33333",
  cursor: "pointer",
  transition: "all .3s ease",
  ":hover": {
    background: "#242a97",
  },
});

class SubmitScreen extends Component {
  static async getInitialProps({ req }) {
    if (req) {
      Helmet.renderStatic();
    }
    return { title: "Screen Submission" };
  }
  handleSubmit = async e => {
    e.preventDefault();
    await registerEmail({
      name: "",
      email: this.state.email,
      page: "reactnativescreens.com",
      category: "React Native",
    });
  };
  render() {
    return (
      <Theme>
        <div>
          <Helmet
            title={this.props.title}
            meta={[{ property: "og:title", content: this.props.title }]}
          />
          <Header />
          <FormWrap onSubmit={this.handleSubmit}>
            <RowWrap width={1} py={4} px={2} flexDirection="column" align="center">
              <Title>Screen Submission</Title>
              <Note>
                Want to see how a screen is built? Drop a link here along with your email and you'll
                get notified when it gets built.
              </Note>
              <Input type="email" name="email" placeholder="Your email address" />
              <Input
                type="text"
                name="link"
                placeholder="Link to Screen Image"
                css={{ marginTop: 0, marginBottom: "32px" }}
              />
              <Button type="submit">Send</Button>
            </RowWrap>
          </FormWrap>
        </div>
      </Theme>
    );
  }
}

export default SubmitScreen;
