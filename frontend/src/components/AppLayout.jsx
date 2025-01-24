import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from './NavigationBar'
import Sidebar from './Sidebar'
import { Container, Row, Col } from 'react-bootstrap'

const AppLayout = () => {
  return (
    <main>
        <Container className="d-flex">
            <Row>
                <NavigationBar/>
            </Row>
            <Row >
                <Col md='4'><Sidebar/></Col>
                <Col style={{width:'100vw', marginTop:'100px', marginLeft:'-100px'}} className="d-flex justify-content-center"><Outlet/></Col>
            </Row>
        </Container>

        {/* <Sidebar/>
        <NavigationBar/>
        <Outlet/> */}
    </main>
  )
}

export default AppLayout