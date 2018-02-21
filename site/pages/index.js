import React, { Component } from "react";
import Helmet from "react-helmet";
import Header from "../components/header";
import Theme from "../components/themer";

class IndexPage extends Component {
  static async getInitialProps({ req }) {
    if (req) {
      Helmet.renderStatic();
    }
    return { title: "React Native Screens" };
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
        </div>
      </Theme>
    );
  }
}

export default IndexPage;
