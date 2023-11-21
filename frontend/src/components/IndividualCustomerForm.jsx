import React from 'react'
import {Row,Col,Form } from 'react-bootstrap'

export default function IndividualCustomerForm({onUpdate}) {
  const handleInputChange = (id, value) => {
    onUpdate(id, value);
  };
  return (
    <>
          <Row>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>الاول</Form.Label>
                <Form.Control type="text" onChange={(e)=>handleInputChange("firstName",e.target.value)} />
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>الثاني</Form.Label>
                <Form.Control type="text" onChange={(e)=>handleInputChange("secondName",e.target.value)} />
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>الثالث</Form.Label>
                <Form.Control type="text" onChange={(e)=>handleInputChange("thirdName",e.target.value)} />
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>الرابع</Form.Label>
                <Form.Control type="text" onChange={(e)=>handleInputChange("fourthName",e.target.value)} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>الجوال</Form.Label>
                <Form.Control type="text" onChange={(e)=>handleInputChange("mobile",e.target.value)} />
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>جوال اخر</Form.Label>
                <Form.Control type="text" onChange={(e)=>handleInputChange("alternativeMobile",e.target.value)} />
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>واتس اب</Form.Label>
                <Form.Control type="text" onChange={(e)=>handleInputChange("whatsapp",e.target.value)} />
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>رقم الهوية</Form.Label>
                <Form.Control type="text" onChange={(e)=>handleInputChange("idNumber",e.target.value)} />
              </Form.Group>
            </Col>
          </Row>
    </>
  )
}
