import React, { Component } from 'react';
import { Form, FormGroup, Input, Col, Row, Label, FormFeedback, Button} from 'reactstrap';

class UploadComplaints extends Component {
    constructor(props) {
        super(props);

        this.state = {
           age: '',
           gender: 'MALE',
           state: 'GUJARAT',
           city: 'AHMEDABAD',
           area: '',
           message: '',
           name: '',
           email: '',
           contact: '',
           touched: {
               age: '',
               state: '',
               city: '',
               area: '',
           }
        };


    }
   
     handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return(
           <div className="container">
                 <div className="row row-content">
                     <div className="col-12">
                         <h3>Complaint Form</h3>
                     </div>
                     <div className="col-12 col-md-9">
                           { /*Age*/ }
                        <FormGroup row>
                             <Label htmlFor="age" md={5}>Age</Label>
                                <Col md={7}>
                                    <Input type="age" id="age" name="age"
                                        placeholder="Age"
                                        value={this.state.age}
                                        />
                                    { /*errors for email
                                    <FormFeedback>
                                           {errors.age}
                                    </FormFeedback>      */}         
                                </Col>
                        </FormGroup>

                            { /*FEMALE/MALE*/ }
                        <FormGroup row>
                            <Label htmlFor="gender" md={5}>Select gender</Label>
                               <Col md={7}>
                                  <Input  type="select" name="gender" id="gender">
                                      <option value="MALE">MALE</option>
                                      <option value="FEMALE">FEMALE</option>
                                  </Input>
                               </Col>
                        </FormGroup>
                            
                             { /*State*/ }
                        <FormGroup row>
                            <Label htmlFor="state" md={5}>Select State</Label>
                              <Col md={7}>
                                  <Input  type="select" name="state" id="state">
                                      <option value="GUJARAT">GUJARAT</option>
                                  </Input>
                              </Col>
                        </FormGroup>

                               { /*City/Town/Village*/ }
                        <FormGroup row>
                                  <Label htmlFor="city" md={5}>Select Your City/Town/Village</Label>
                                  <Col md={7}>
                                  <Input type="select" name="city" id="city">
                                      <option value="AHMEDABAD">AHMEDABAD</option>
                                      <option value="SURAT">SURAT</option>
                                      <option value="RAJKOT">RAJKOT</option>
                                      <option value="VADODARA">VADODARA</option>
                                      <option value="GANDHINAGR">GANDHINAGR</option>
                                      <option value="BHAVNAGAR">BHAVNAGAR</option>
                                      <option value="JAMNAGAR">JAMNAGAR</option>
                                      <option value="JUNAGADH">JUNAGADH</option>
                                      <option value="ANAND">ANAND</option>
                                      <option value="BHARUCH">BHARUCH</option>
                                      <option value="PROBANDAR">PORBANDAR</option>
                                      <option value="ANKLESHWAR">ANKLESHWAR</option>
                                      <option value="VAPI">VAPI</option>
                                      <option value="DHOLERA">DHOLERA</option>
                                      <option value="PATAN">PATAN</option>
                                      <option value="NAVSARI">NAVSARI</option>
                                      <option value="MEHSANA">MEHSANA</option>
                                      <option value="GANDHIDHAM">GANDHIDHAM</option>
                                      <option value="NADIAD">NADIAD</option>
                                      <option value="VERAVAL">VERAVAL</option>
                                      <option value="DAHOD">DAHOD</option>
                                      <option value="MORBI">MORBI</option>
                                      <option value="PALANPUR">PALANPUR</option>
                                      <option value="GODHRA">GODHRA</option>
                                      <option value="VALSAD">VALSAD</option>
                                      <option value="VADODARA">VADODARA</option>
                                      <option value="BOTAD">BOTAD</option>
                                      <option value="GONDAL">GONDAL</option>
                                      <option value="PALITANA">PALITANA</option>
                                      <option value="KHAMBHAI">KHAMBHAT</option>
                                      <option value="KALOL">KALOL</option>
                                      <option value="KHEDA">KHEDA</option>
                                      <option value="DEESA">DEESA</option>
                                      <option value="ADALAJ">ADALAJ</option>
                                      <option value="DWARKA">DWARKA</option> 
                                      <option value="SIDDHPUR">SIDDHPUR</option>
                                      <option value="WANKANER">WANKANER</option>
                                      <option value="SANAND">SANAND</option>
                                      <option value="KANDALA">KANDLA</option>
                                      <option value="VISNAGAR">VISNAGAR</option>
                                      <option value="MODASA">MODASA</option>
                                      <option value="JETPUR">JETPUR</option>
                                      <option value="KESHOD">KESHOD</option>
                                      <option value="SIHOR">SIHOR</option>
                                      <option value="HALOL">HALOL</option>
                                      <option value="MANDAVI">MANDAVI</option>
                                      <option value="CHAMPANER">CHAMPANER</option>
                                      <option value="BARDOLI">BARDOLI</option>
                                      <option value="AMERELI">AMERELI</option>
                                      <option value="IDAR">IDAR</option>
                                  </Input>
                                  </Col>
                         </FormGroup>
                       
                            { /*Area*/ }
                        <FormGroup row>
                             <Label htmlFor="area" md={5}>Area</Label>
                                <Col md={7}>
                                    <Input type="area" id="area" name="area"
                                        placeholder="Area"
                                        value={this.state.area}
                                     />
                                    { /*errors for area*
                                    <FormFeedback>
                                           {errors.area}
                                    </FormFeedback>   */ }           
                                </Col>
                        </FormGroup>

                        <FormGroup row>
                                <Label htmlFor="message" md={5}>Description</Label>
                                <Col md={7}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="12"
                                       /* value={this.state.message}
                                        onChange={this.handleInputChange}*/></Input>
                                </Col>
                       </FormGroup>

                        <div className="col-12">
                           <h6><strong>Complaint By:</strong></h6>
                        </div>
                        
                       <FormGroup row>
                             <Label htmlFor="name" md={5}>Full Name</Label>
                                <Col md={7}>
                                    <Input type="text" id="name" name="name"
                                        placeholder="Full Name"
                                        value={this.state.name}
                                        />         
                                </Col>
                        </FormGroup>
                         <FormGroup row>
                             <Label htmlFor="email" md={5}>Email Address</Label>
                                <Col md={7}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email Address"
                                        value={this.state.email}
                                        />         
                                </Col>
                        </FormGroup>

                         <FormGroup row>
                             <Label htmlFor="telnum" md={5}>Contact</Label>
                                <Col md={7}>
                                    <Input type="tel" id="telnum" name="telnum"
                                        placeholder="Tel. number"
                                        value={this.state.telnum}
                                        />         
                                </Col>
                        </FormGroup>

                        <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Submit Complaint
                                    </Button>
                                </Col>
                       </FormGroup>

                  
                     </div>
                 </div>
            </div>
        );
    }
}

export default UploadComplaints;
