import Document, { Head, Main, NextScript } from "next/document";
import { extractCritical } from "emotion-server";
import Helmet from "react-helmet";

export default class MyDocument extends Document {
  static async getInitialProps(...args) {
    const documentProps = await super.getInitialProps(...args)
    const renderPage = args[0].renderPage;
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...documentProps, ...page, ...styles, helmet: Helmet.renderStatic() };
  }

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  componentWillMount() {
    if (typeof window !== "undefined") {
      hydrate(window.__NEXT_DATA__.ids);
    }
  }

  helmetHtmlAttrComponents = () => {
    return this.props.helmet.htmlAttributes.toComponent();
  };

  helmetBodyAttrComponents = () => {
    return this.props.helmet.bodyAttributes.toComponent();
  };
  helmetHeadComponents = () => {
    return Object.keys(this.props.helmet)
      .filter(el => el !== "htmlAttributes" && el !== "bodyAttributes")
      .map(el => this.props.helmet[el].toComponent());
  };

  helmetJsx = () => {
    return (
      <Helmet
        htmlAttributes={{ lang: "en" }}
        title="Hello next.js!"
        meta={[
          { name: "viewport", content: "width=device-width, initial-scale=1" },
          { property: "og:title", content: "Hello next.js!" },
        ]}
      />
    );
  };

  render() {
    return (
      <html {...this.helmetHtmlAttrComponents()}>
        <Head>
          <title>React Native Screens</title>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          {this.helmetJsx()}
          {this.helmetHeadComponents()}
        </Head>
        <body {...this.helmetBodyAttrComponents()}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
