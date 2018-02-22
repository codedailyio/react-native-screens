import React, { Component } from "react";
import Helmet from "react-helmet";
import Theme from "../components/themer";
import Header from "../components/header";
import Newsletter from "../components/newsletter";

import Card from "../components/card";
import { Row } from "emotion-layout";

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
          <Newsletter />
          <Row flexWrap="wrap" p={4} justify="center" css={{backgroundColor: "#F9FAFD"}}>
            <Card
              image="https://camo.githubusercontent.com/089e6a4279ffeb4f7e0be55ee2968a484e0817e6/68747470733a2f2f692e696d6775722e636f6d2f6365423074325a2e706e67"
              title="Invision Login"
              description="Invision login screen with background cover image, and keyboard avoiding view."
            />
            <Card
              image="https://camo.githubusercontent.com/089e6a4279ffeb4f7e0be55ee2968a484e0817e6/68747470733a2f2f692e696d6775722e636f6d2f6365423074325a2e706e67"
              title="Invision Login"
              description="Invision login screen with background cover image, and keyboard avoiding view."
            />
            <Card
              image="https://camo.githubusercontent.com/089e6a4279ffeb4f7e0be55ee2968a484e0817e6/68747470733a2f2f692e696d6775722e636f6d2f6365423074325a2e706e67"
              title="Invision Login"
              description="Invision login screen with background cover image, and keyboard avoiding view."
            />
            <Card
              image="https://camo.githubusercontent.com/089e6a4279ffeb4f7e0be55ee2968a484e0817e6/68747470733a2f2f692e696d6775722e636f6d2f6365423074325a2e706e67"
              title="Invision Login"
              description="Invision login screen with background cover image, and keyboard avoiding view."
            />
            <Card
              image="https://camo.githubusercontent.com/089e6a4279ffeb4f7e0be55ee2968a484e0817e6/68747470733a2f2f692e696d6775722e636f6d2f6365423074325a2e706e67"
              title="Invision Login"
              description="Invision login screen with background cover image, and keyboard avoiding view."
            />
            <Card
              image="https://camo.githubusercontent.com/089e6a4279ffeb4f7e0be55ee2968a484e0817e6/68747470733a2f2f692e696d6775722e636f6d2f6365423074325a2e706e67"
              title="Invision Login"
              description="Invision login screen with background cover image, and keyboard avoiding view."
            />
            <Card
              image="https://camo.githubusercontent.com/089e6a4279ffeb4f7e0be55ee2968a484e0817e6/68747470733a2f2f692e696d6775722e636f6d2f6365423074325a2e706e67"
              title="Invision Login"
              description="Invision login screen with background cover image, and keyboard avoiding view."
            />
            <Card
              image="https://camo.githubusercontent.com/089e6a4279ffeb4f7e0be55ee2968a484e0817e6/68747470733a2f2f692e696d6775722e636f6d2f6365423074325a2e706e67"
              title="Invision Login"
              description="Invision login screen with background cover image, and keyboard avoiding view."
            />
            <Card
              image="https://camo.githubusercontent.com/089e6a4279ffeb4f7e0be55ee2968a484e0817e6/68747470733a2f2f692e696d6775722e636f6d2f6365423074325a2e706e67"
              title="Invision Login"
              description="Invision login screen with background cover image, and keyboard avoiding view."
            />
            <Card
              image="https://camo.githubusercontent.com/089e6a4279ffeb4f7e0be55ee2968a484e0817e6/68747470733a2f2f692e696d6775722e636f6d2f6365423074325a2e706e67"
              title="Invision Login"
              description="Invision login screen with background cover image, and keyboard avoiding view."
            />
            
          </Row>
        </div>
      </Theme>
    );
  }
}

export default IndexPage;
