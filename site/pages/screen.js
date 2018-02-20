import React, { Component } from "react";
import Helmet from "react-helmet";

class ScreenPage extends Component {
  static async getInitialProps({ req }) {
    if (req) {
      Helmet.renderStatic();
    }
    return { title: "Screen" };
  }
  render() {
    return (
      <div>
        <Helmet
          title={this.props.title}
          meta={[{ property: "og:title", content: this.props.title }]}
        />
      </div>
    );
  }
}

export default ScreenPage;