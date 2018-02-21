import React, { Component } from "react";
import Helmet from "react-helmet";
import Theme from "../components/themer";
import Header from "../components/header";

class CollectionPage extends Component {
  static async getInitialProps({ req }) {
    if (req) {
      Helmet.renderStatic();
    }
    return { title: "Collection" };
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

export default CollectionPage;