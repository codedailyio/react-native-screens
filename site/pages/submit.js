import React, { Component } from "react";
import Helmet from "react-helmet";
import Theme from "../components/themer";
import Header from "../components/header";
import { Row } from "emotion-layout";
import styled from "react-emotion";

const RowWrap = styled(Row)({
  backgroundColor: "#2b32b2",
  color: "#FFF",
  minHeight: "150px",
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
  borderBottom: "3px solid #FFF",
  margin: "16px 0",
  borderRadius: "0",
  color: "#FFF",
  padding: "10px",
});

const Button = styled.button({
  borderRadius: "80px",
  background: "#FFF",
  color: "#F6506D",
  marginBottom: "16px",
  fontWeight: "600",
  padding: "10px 48px",
  fontSize: "18px",
  lineHeight: "1.33333",
  cursor: "pointer",
  transition: "all .3s ease",
  ":hover": {
    color: "#000",
  },
});

class SubmitScreen extends Component {
  static async getInitialProps({ req }) {
    if (req) {
      Helmet.renderStatic();
    }
    return { title: "Screen Submission" };
  }
  render() {
    return (
      <Theme>
        <div>
          <Helmet
            title={this.props.title}
            meta={[{ property: "og:title", content: this.props.title }]}
          />
          <Header />
          <form onSubmit={this.handleSubmit}>
            <RowWrap
              width={1}
              py={4}
              px={2}
              flexDirection="column"
              align="center"
              justify="space-between"
            >
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
          </form>
        </div>
      </Theme>
    );
  }
}

export default SubmitScreen;
