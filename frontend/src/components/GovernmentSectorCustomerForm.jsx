import React from 'react'
import {Row,Col,Form} from 'react-bootstrap'

// eslint-disable-next-line react/prop-types
export default function GovernmentSectorCustomerForm({onUpdate}) {
  const handleInputChange = (id, value) => {
    onUpdate(id, value);
  };
  return (
    <>
     <Row>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>اسم الجهة</Form.Label>
                <Form.Control type="text" onChange={(e)=>handleInputChange("agencyName",e.target.value)} />
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>رقم الهوية</Form.Label>
                <Form.Control type="text" onChange={(e)=>handleInputChange("idNumber",e.target.value)} />
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>جوال</Form.Label>
                <Form.Control type="text" onChange={(e)=>handleInputChange("mobile",e.target.value)} />
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>واتس اب</Form.Label>
                <Form.Control type="text" onChange={(e)=>handleInputChange("whatsapp",e.target.value)} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>جوال اخر</Form.Label>
                <Form.Control type="text" onChange={(e)=>handleInputChange("alternativeMobile",e.target.value)} />
              </Form.Group>
            </Col>
            
          </Row>

    </>
  )
}
