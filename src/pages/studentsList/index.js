import React from 'react'
import { Col, Row } from 'react-bootstrap'
import FilterItems from './filterItems'
import StudentsTabel from './studentsTabel'

const StudentsList = () => {
    return (
        <Row>
            <Col md={3}><FilterItems /></Col>
            <Col md={9}><StudentsTabel /></Col>
        </Row>
    )
}

export default StudentsList