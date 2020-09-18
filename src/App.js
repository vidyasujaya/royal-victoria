import React from "react";
import { Row, Col, ResponsiveEmbed } from "react-bootstrap";
import "./App.css";
import { RouterComponent } from "./RouterComponent";
import { Layout } from "./components/Layout";
import { NavBar } from "./components/NavBar2";
import BlueLogo from "./assets/BlueLogo.svg";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Layout>
        <Row>
          <Col xs={2}>
            <div>
              <div>
                <ResponsiveEmbed aspectRatio="1by1">
                  <embed type="image/svg+xml" src={BlueLogo} />
                </ResponsiveEmbed>
              </div>
            </div>
          </Col>
          <Col xs={10}>
            <RouterComponent />
          </Col>
        </Row>
      </Layout>
    </React.Fragment>
  );
}

export default App;
