import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Product from '../products/Product'
import CategoryList from "../categories/CategoryList"


class Dashboard extends Component {
    render() {
        return (
            <div>
            <Container fluid={true} >
            <Row>
              <Col xs="2"><CategoryList/></Col>
              <Col xs="10"><Product /></Col>
            </Row>
          </Container>
            </div>
        )
    }
}
export default Dashboard;