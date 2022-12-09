import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CalenderBox from './calenderBox'
import ContactBox from './contactBox'
import MessageTextarea from './messageTextarea'
import './Styles/_base.css'

const Cartable = () => {
    return (
        <Row className='mt-5'>
            <Col md={6}>
                <MessageTextarea />
            </Col>
            <Col md={6}>
                <Row className='pe-3'>
                    <Col md={12}>
                        <ContactBox />
                    </Col>
                    <Col md={12}>
                        <CalenderBox />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Cartable