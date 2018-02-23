import React, { Component } from "react";
import Helmet from "react-helmet";
import Theme from "../components/themer";
import Header from "../components/header";
import Newsletter from "../components/newsletter";

import { getScreen } from "../api";

class ScreenPage extends Component {
  static async getInitialProps({ req, query }) {
    if (req) {
      Helmet.renderStatic();
    }
    let screen;
    try {
      screen = await getScreen(query.id);
    } catch (e) {}
    return { title: "Screen", screen };
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
          <Newsletter />
        </div>
      </Theme>
    );
  }
}

export default ScreenPage;
