import React, {Component } from 'react';
import Jumbotron from "../../components/Jumbotron"; 
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";

class Home extends Component {
render() {
return (
<Container fluid>
<Row>
<Col size="md-12 sm-12">
<Jumbotron>
  <img src="../../../../start2finishLOGO.png"> </img>
</Jumbotron>
</Col>
</Row>
</Container>
);
}
}


export default Home;