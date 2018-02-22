import React, { Component } from "react";
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
});

const Note = styled.div({
  fontWeight: 300,
  fontSize: "12px",
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

class NewsLetter extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <RowWrap
          width={1}
          py={4}
          px={2}
          flexDirection="column"
          align="center"
          justify="space-between"
        >
          <Title>Join our newsletter and get notified when new screens get built!</Title>
          <Input type="email" name="email" placeholder="Your email address" />
          <Button type="submit">Join</Button>
          <Note> We never send spam and you can unsubscribe instantly with one click</Note>
        </RowWrap>
      </form>
    );
  }
}

export default NewsLetter;
