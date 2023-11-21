import React from 'react'
import {Row,Col,Form } from 'react-bootstrap'

export default function PrivateSectorCustomerForm({onUpdate}) {
    const handleInputChange = (id, value) => {
        onUpdate(id, value);
      };
  return (
    <>
          <Row>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>اسم المؤسسة</Form.Label>
                <Form.Control type="text" onChange={(e)=>handleInputChange("companyName",e.target.value)} />
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>يمثلها</Form.Label>
                <Form.Control type="text" onChange={(e)=>handleInputChange("representative",e.target.value)} />
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>رقم السجل التجاري</Form.Label>
                <Form.Control type="text" onChange={(e)=>handleInputChange("commercialRegistrationNumber",e.target.value)} />
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>الرقم الضريبي</Form.Label>
                <Form.Control type="text" onChange={(e)=>handleInputChange("taxNumber",e.target.value)} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>رقم الهوية</Form.Label>
                <Form.Control type="text" onChange={(e)=>handleInputChange("idNumber",e.target.value)} />
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
                <Form.Label>الجوال </Form.Label>
                <Form.Control type="text" onChange={(e)=>handleInputChange("mobile",e.target.value)} />
              </Form.Group>
            </Col>
          </Row>
    </>
  )
}
