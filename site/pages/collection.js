import React, { Component } from "react";
import Helmet from "react-helmet";
import Theme from "../components/themer";
import Header from "../components/header";

import { getCollection } from "../api";

class CollectionPage extends Component {
  static async getInitialProps({ req }) {
    if (req) {
      Helmet.renderStatic();
    }
    let collection;
    try {
      collection = await getCollection(query.page);
    } catch (e) {}

    return { title: "Collection", collection };
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
