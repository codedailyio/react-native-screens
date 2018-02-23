import React, { Component, Fragment } from "react";
import { Row } from "emotion-layout";
import styled from "react-emotion";

import { registerEmail } from "../api";

const RowWrap = styled(Row)({
  backgroundImage: "url(/static/jupiter.svg), linear-gradient(to top,#242a97,#2b32b2)",
  color: "#FFF",
  minHeight: "150px",
});

const Title = styled.h3({
  fontWeight: 700,
  fontSize: "1.5rem",
  lineHeight: 1.5,
  margin: 0,
  padding: 0,
  textAlign: "center",
});

const Note = styled.div({
  fontWeight: 300,
  fontSize: ".95rem",
  textAlign: "center",
  lineHeight: 1.25,
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
  "::placeholder": {
    color: "#FFF",
  },
});

const Button = styled.button({
  borderRadius: "80px",
  background: "#FFF",
  color: "#F6506D",
  marginBottom: "16px",
  fontWeight: "600",
  padding: "10px 80px",
  fontSize: "18px",
  lineHeight: "1.33333",
  cursor: "pointer",
  transition: "all .3s ease",
  ":hover": {
    color: "#000",
  },
});

class NewsLetter extends Component {
  state = {
    email: "",
    saved: false,
    hide: typeof window !== "undefined" ? localStorage.getItem("newsletter") : false,
  };
  handleSubmit = async e => {
    e.preventDefault();
    await registerEmail({
      name: "",
      email: this.state.email,
      page: "reactnativescreens.com",
      category: "React Native",
    });

    this.setState({
      saved: true,
    });

    localStorage.setItem("newsletter", true);

    setTimeout(() => {
      this.setState({
        hide: true,
      });
    }, 3000);
  };
  render() {
    const { saved, hide } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {!hide && (
          <RowWrap
            width={1}
            py={4}
            px={2}
            flexDirection="column"
            align="center"
            justify={saved ? "center" : "space-between"}
            css={{ height: "100%" }}
          >
            {!saved && (
              <Fragment>
                <Title>Join our newsletter and get notified when new screens get built!</Title>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
                <Button type="submit">Join</Button>
                <Note> No spam ever, unsubscribe whenever.😢</Note>
              </Fragment>
            )}
            {saved && <Title>Thanks for signing up!</Title>}
          </RowWrap>
        )}
      </form>
    );
  }
}

export default NewsLetter;
