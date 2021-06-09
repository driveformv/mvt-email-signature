import { useState } from 'react';
import "./App.css";
import { Container, Row, Col, Form, Button} from "react-bootstrap"
import Signature from "./components/Signature/Signature";


function App() {
    const [fullName, setFullName] = useState("John Doe");
    const [jobTitle, setJobTitle] = useState('Web Designer');
    const [department, setDepartment] = useState("Marketing");
    const [officeNumber, setOfficeNumber] = useState("123.456.7890");
    const [officeExt, setOfficeExt] = useState('123')
    const [email, setEmail] = useState("john.doe@m-v-t.com")

    const fullNameHandler = (e) => {
        if (!e.target.value) {
            console.log(!e.target.value)
            return setFullName("John Doe")
        }

        setFullName(e.target.value)
    }

    const jobTitleHandler = (e) => {
        if (!e.target.value) {
            return setJobTitle("Web Designer")
        }

        setJobTitle(e.target.value)
    }

    const departmentHandler = (e) => {
        if (!e.target.value) {
           return  setDepartment("Marketing")
        }

        setDepartment(e.target.value)
    }

    const officeNumberHandler = (e) => {
        if (!e.target.value) {
            return setOfficeNumber("123.456.7890")
        }

        setOfficeNumber(e.target.value)
    }
    
    const officeExtHandler = (e) => {
        if (!e.target.value) {
            return setOfficeExt("1234")
        }

        setOfficeExt(e.target.value)
    }
    
    const emailHandler = (e) => {
        e.preventDefault()

        if (!e.target.value) {
            return setEmail("john.doe@m-v-t.com")
        }

        setEmail(e.target.value)
    }


    console.log(fullName)

	return (
        <Container fluid>
            <Row className="vh-100">
                <Col md={4} className="left-panel">
                    <h4 className="left-panel__heading">Basic signature details</h4>
                    <Form>
                        <Form.Group>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="John Doe" onChange={fullNameHandler}  />
                        </Form.Group>
                         <Form.Group>
                             <Row>
                                <Col>
                                    <Form.Label>Job Title</Form.Label>
                                    <Form.Control type="text" placeholder="Web Developer" onChange={jobTitleHandler} />
                                </Col>
                                <Col>
                                    <Form.Label>Department</Form.Label>
                                    <Form.Control placeholder="Department" onChange={departmentHandler} />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                             <Row>
                                <Col>
                                    <Form.Label>Office</Form.Label>
                                    <Form.Control placeholder="123.456.7890" onChange={officeNumberHandler} />
                                </Col>
                                <Col>
                                    <Form.Label>Ext</Form.Label>
                                    <Form.Control placeholder="1234" onChange={officeExtHandler} />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="john.doe@company.com" onChange={emailHandler} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Generate Signature
                        </Button>
                    </Form>
                </Col>
                <Col md={8} className="right-panel">
                    <Signature 
                        fullName={fullName}
                        jobTitle={jobTitle}
                        department={department}
                        officeNumber={officeNumber}
                        officeExt={officeExt}
                        email={email}
                    />
                </Col>
            </Row>
        </Container>   
    );
}

export default App;
