import { useState } from "react";

import { Row, Col, Container, Form, Button } from "react-bootstrap";
import GovernmentSectorCustomerForm from "./components/GovernmentSectorCustomerForm";
import PrivateSectorCustomerForm from "./components/PrivateSectorCustomerForm";
import IndividualCustomerForm from "./components/IndividualCustomerForm";
import axios from "axios"

function App() {
  const [customerType, setCustomerType] = useState("individual");
  const [customerData, setCustomerData] = useState({
    companyName: '',
    representative: '',
    commercialRegistrationNumber: '',
    taxNumber: '',
    idNumber: '',
    alternateMobile: '',
    whatsapp: '',
    mobile: '',
    firstName: '',
    secondName: '',
    thirdName: '',
    fourthName: '',
    agencyName: '',
  });

  const [projectData, setProjectData] = useState({
    projectName: "",
    region: "west",
    city: "makka",
    district: "",
    maintenanceType: "internal",
    elevatorType: "food",
    stops: "two",
    elevatorDistance: "",
    cost: "",
    startDate: "",
    visitCount: "",
    endDate: "",
    buildingType: "",
    doorOpeningSize: "80",
    doorOpeningDirection: "right",
    entrances: "one",
    elevatorRoom: "above",
    machineType: "botosani",
    machineSpeed: "one",
    machineLoad: "150",
    notes: "",
  });

  const handleCustomerFormUpdate = (id, value) => {
    setCustomerData((prevInfo) => ({ ...prevInfo, [id]: value }));
  };

  const submitData = ()=>{
    axios.post('http://localhost:8000/api/projects/create',{
      projectData,
      customerData:{...customerData,customerType}

    })
  }

  return (
    <Container fluid className="p-4">
      <Row className="justify-content-between mb-4 bg-dark p-2">
        <Col xs={3}>العملاء</Col>
        <Col xs={3}>
          <Form.Select defaultValue="individual" onChange={(e)=>setCustomerType(e.target.value)}>
            <option value="private">قطاع خاص</option>
            <option value="government">قطاع حكومي</option>
            <option value="individual">فرد</option>
          </Form.Select>
        </Col>
      </Row>
      {/* clients info */}
      <Container fluid>
        {customerType == "individual" ? <IndividualCustomerForm onUpdate={handleCustomerFormUpdate} /> : ""}
        {customerType == "government" ? <GovernmentSectorCustomerForm onUpdate={handleCustomerFormUpdate} /> : ""}
        {customerType == "private" ? <PrivateSectorCustomerForm onUpdate={handleCustomerFormUpdate} /> : ""}
      </Container>

      {/* Elevator */}
      <Container className="mt-4" fluid>
        <Form>
          <Row>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>اسم المشروع</Form.Label>
                <Form.Control type="text" onChange={(e)=>setProjectData({...projectData,"projectName":e.target.value})} />
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>المنطقة</Form.Label>
                <Form.Select onChange={(e)=>setProjectData({...projectData,"region":e.target.value})}>
                  <option value="west"> المنطقة الغربية</option>
                  <option value="south"> المنطقة الجنوبية</option>
                  <option value="north"> المنطقة الشمالية</option>
                  <option value="east"> المنطقة الشرقية</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>المدينة</Form.Label>
                <Form.Select defaultValue="makka" onChange={(e)=>setProjectData({...projectData,"city":e.target.value})} >
                    {projectData.region == "west" ? <>
                    <option value="makka"> مكة </option>
                  <option value="altaif">الطائف</option>
                  <option value="jidda">جدة </option>
                  <option value="albaha">  الباحة</option>
                  <option value="turba">  تربة</option>
                    </> :""}

                    {projectData.region == "south" ? <>
                    <option value="aser"> عسير </option>
                  <option value="najran">نجران</option>
                  <option value="jazan">جازان </option>
                  <option value="albah">  الباح</option>
                    </> :""}

                    {projectData.region == "north" ? <>
                    <option value="arar"> عرعر </option>
                  <option value="hafr albatin">حفر الباطن</option>
                  <option value="rafaha">رفحاء </option>
                    </> :""}

                    {projectData.region == "east" ? <>
                    <option value="aldmam"> الدمام </option>
                  <option value="aljbel">الجبيل </option>
                    </> :""}
                  </Form.Select>
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>الحي</Form.Label>
                <Form.Control type="text" onChange={(e)=>setProjectData({...projectData,"district":e.target.value})} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>نوع الصيانة</Form.Label>
                <Form.Select defaultValue="internal" onChange={(e)=>setProjectData({...projectData,"maintenanceType":e.target.value})}>
                  <option value="internal"> داخلية</option>
                  <option value="external"> خارجية</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>نوع المصعد</Form.Label>
                <Form.Select defaultValue="food" onChange={(e)=>setProjectData({...projectData,"elevatorType":e.target.value})}>
                  <option value="food"> طعام</option>
                  <option value="merchandise"> بضاعة</option>
                  <option value="normal"> عادي</option>
                  <option value="automatic"> اوتوماتيك</option>
                </Form.Select>

              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>عدد الوقفات</Form.Label>
                <Form.Select defaultValue="two" onChange={(e)=>setProjectData({...projectData,"stops":e.target.value})}>
                  <option value="two"> وقفتين</option>
                  <option value="three"> ثلاث وقفات</option>
                  <option value="four"> اربع وقفات</option>
                  <option value="five"> خمس وقفات</option>
                  <option value="six"> ست وقفات</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>مشوار المصعد</Form.Label>
                <Form.Control type="text" onChange={(e)=>setProjectData({...projectData,"elevatorDistance":e.target.value})} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>التكلفة </Form.Label>
                <Form.Control type="text" onChange={(e)=>setProjectData({...projectData,"cost":e.target.value})}  />
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>تاريخ البداية</Form.Label>
                <Form.Control type="date" onChange={(e)=>setProjectData({...projectData,"startDate":e.target.value})}  />
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label> عدد الزيارات </Form.Label>
                <Form.Control type="text" onChange={(e)=>setProjectData({...projectData,"visitCount":e.target.value})}  />
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label> تاريخ النهاية</Form.Label>
                <Form.Control type="date" onChange={(e)=>setProjectData({...projectData,"endDate":e.target.value})}  />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>نوع المبنى </Form.Label>
                <Form.Control type="text" onChange={(e)=>setProjectData({...projectData,"buildingType":e.target.value})} />
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>مقاس فتحة الباب </Form.Label>
                <Form.Select defaultValue="80" onChange={(e)=>setProjectData({...projectData,"doorOpeningSize":e.target.value})}>
                  <option value="80"> 80</option>
                  <option value="90"> 90</option>
                  <option value="100"> 100</option>
                  <option value="10"> 110</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label> اتجاه فتح الباب</Form.Label>
                <Form.Select defaultValue="right" onChange={(e)=>setProjectData({...projectData,"doorOpeningDirection":e.target.value})}>
                  <option value="right"> يمين</option>
                  <option value="left"> يسار</option>
                  <option value="center"> سنتر</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>عدد المداخل </Form.Label>
                <Form.Select defaultValue="one" onChange={(e)=>setProjectData({...projectData,"entrances":e.target.value})}>
                  <option value="one"> مدخل</option>
                  <option value="two"> مدخلين</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>غرفة المصعد</Form.Label>
                <Form.Select defaultValue="above" onChange={(e)=>setProjectData({...projectData,"elevatorRoom":e.target.value})}>
                  <option value="above"> اعلى البئر</option>
                  <option value="without"> بدون غرفة</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>نوع المكينة</Form.Label>
                <Form.Select defaultValue="botosani" onChange={(e)=>setProjectData({...projectData,"machineType":e.target.value})}>
                  <option value="botosani"> بوتوساسي</option>
                  <option value="sicor"> سيكور</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>سرعة المكينة </Form.Label>
                <Form.Select defaultValue="one" onChange={(e)=>setProjectData({...projectData,"machineSpeed":e.target.value})}>
                  <option value="one"> سرعة</option>
                  <option value="two"> سرعتين</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" >
                <Form.Label>حمولة المكينة</Form.Label>
                <Form.Select defaultValue="150" onChange={(e)=>setProjectData({...projectData,"machineLoad":e.target.value})}>
                  <option value="150"> 150</option>
                  <option value="200"> 200</option>
                  <option value="300"> 300</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3" >
                <Form.Label> ملاحظات</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={(e)=>setProjectData({...projectData,"notes":e.target.value})}/> 
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={6} >
            <div className="d-grid gap-2">
            <Button onClick={()=>submitData()} size="lg" >حفظ</Button>
            </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </Container>
  );
}

export default App;
