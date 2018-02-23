import React, { Component } from "react";
import Helmet from "react-helmet";
import Theme from "../components/themer";
import Header from "../components/header";
import Newsletter from "../components/newsletter";

import { getCollections } from "../api";

class CollectionsPage extends Component {
  static async getInitialProps({ req, query }) {
    if (req) {
      Helmet.renderStatic();
    }
    let collections;
    try {
      collections = await getCollections(query.page);
    } catch (e) {}
    
    return { title: "Collections", collections };
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

export default CollectionsPage;
