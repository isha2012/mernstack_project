import React, { useState } from 'react';
import { Form, Input,  Row, Container } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const Signup_admin = () => {

    const history= useHistory();
    const [complaint, setComplaint] = useState({
        pname: '',
        pstation: '',
        name: '',
        gender: '',
        state: '',
        city: '',
        area: '',
        description: '',




    });

    let name, value;
  
    const handleInputs = (e) => {
      console.log(e);
  
      name = e.target.name;
      value= e.target.value;
  
      setComplaint({ ...complaint, [name]:value });
  
    }

    const PostData = async (e) => {
  
      e.preventDefault();
      const { age, gender, state, city, area,
      message, name, email, contact } = complaint;
      
      console.log(name);

      const res = await fetch('/', {
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        
        body:JSON.stringify({
            age, gender, state, city, area,
            message, name, email, contact, age, state, city, area
        })
      });
  
      const data = await res.json();
  
      if(data.status === 422 || !data) {
        window.alert(" Complain is not registered :-( ");
        console.log(" Complain is not registered :-( ");
      }
      else {
        window.alert("Complaint Post");
  
        history.push('/Home');
      }
    }

    return(
      <>
        <Container className="center">
           <Row className="content">
               
               <div className="col-md-6 mb-3 mx-auto">
                  <h2 className="signup-text mb-3">Add Complain</h2>
                  <Form method="POST" className="register-form mx-auto" id="register-form">

                                   <div className="form-group row"> 

                           <label htmlFor="name">Police Officer Name</label>
                           <Input 
                                type="text" name="pname" 
                                value={complaint.name}
                                onChange={handleInputs}
                                placeholder="Your Name" className="form-control"
                           ></Input>
                       
                    </div>

                    <div className="form-group row"> 
                    
                            <label htmlFor="pstation">Police Station</label>
                            <Input 
                                type="text" name="pstation" 
                                value={complaint.pstation}
                                onChange={handleInputs}
                                placeholder="Police Station" className="form-control"
                            ></Input>
                
                    </div>

                    <div className="col-12">
                           <h6><strong>Complaint Details</strong></h6>
                    </div>
   
                    <div className="form-group row"> 
                           <label htmlFor="name">Name</label>
                           <Input 
                                type="text" name="name" 
                                value={complaint.name}
                                onChange={handleInputs}
                                className="form-control"
                                placeholder="Age"
                           ></Input>
                       </div>

                       <div className="form-group row"> 
                            <label htmlFor="gender">Gender</label>
                            <Input  type="select" name="gender" id="gender" value={complaint.gender}
                                    onChange={handleInputs}>
                                      <option value="MALE">MALE</option>
                                      <option value="FEMALE">FEMALE</option>
                            </Input>
                       </div>

                       <div className="form-group row"> 
                            <label htmlFor="ade">Age</label>
                            <Input  type="text" name="age" id="Age" value={complaint.age}
                                    onChange={handleInputs}
                                    placeholder="Age"
                                    >
                                    
                            </Input>
                       </div>

                       <div className="form-group row"> 
                            <label htmlFor="state">State</label>
                            <Input  type="select" name="state" id="state" value={complaint.state} onChange={handleInputs}>
                                      <option value="GUJARAT">GUJARAT</option>
                            </Input>
                       </div>



                       <div className="form-group row">
                       <label htmlFor="city">Select Your City/Town/Village</label>
                                  <Input type="select" name="city" id="city" value={complaint.city} onChange={handleInputs}>
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
                    </div>

                    <div className="form-group row"> 
                           <label htmlFor="area">Your Area</label>
                           <Input 
                                type="text" name="area" 
                                value={complaint.area}
                                onChange={handleInputs}
                                className="form-control"
                                placeholder="Area"
                           ></Input>
                       
                       </div>

                    <div className="form-group row">
                        <label htmlFor="description">Description</label>
                            <Input type="textarea" id="policestation" name="description"
                        
                                   value={complaint.description}
                                   onChange={handleInputs} 
                                   className="form-control" placeholder="Police Station"
                            />          
                    </div>
                   

                   <div className="btn-class">
                        <Input type="submit" name="signup"  className="btn-class-form btn btn-primary" value="Register" onClick={PostData}></Input>
                   </div>
   
                  </Form>
               </div>
           </Row>
        </Container>
      </>
    )
}

export default Signup_admin;
