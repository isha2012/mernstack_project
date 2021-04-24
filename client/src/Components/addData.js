import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { Form, Input,  Row, Container } from 'reactstrap';
import "react-datepicker/dist/react-datepicker.css";

const CreateData = () => {
    return (
      <>
      <Container className="center">
         <Row className="content">
             
             <div className="col-md-6 mb-3 mx-auto">
                <h2 className="happy-text mb-3">Add Happy Stories</h2>
                <Form method="POST" encType="multipart/form-data" className="register-form mx-auto" id="register-form">
 
                     <div className="form-group row"> 
                         <label htmlFor="name">Username: </label>
                         <input 
                                 type="text" name="name"  autoComplete="off" 
                               
                                 placeholder="Your Name" className="form-control"
                         ></input>
                     </div>
 
                     <div className="form-group row"> 
                     <label htmlFor="image">Picture</label>
                     <input 
                             type="file" name="photo" 
                             accept=".png, .jpg, .jpeg"

                     ></input>
                     </div>
 
                     <div className="form-group row"> 
                     <label htmlFor="age">Age</label>
                     <input  
                             type="text" name="age"  autoComplete="off"
                           
                             placeholder="Age" className="form-control"
                     ></input>
                     </div>

                     <div className="form-group row"> 
                     <label htmlFor="location">Location</label>
                     <input 
                             type="text" name="location"  autoComplete="off"
                           
                             placeholder="Location" className="form-control"
                     ></input>
                     </div>

                     

                 <div className="btn-class">
                      <input type="submit" name="signup"  autoComplete="off"  className="btn-class-form btn btn-primary" value="Register"  ></input>
                 </div>
 
                </Form>
             </div>
         </Row>
     </Container>
         </>
    )
}

export default CreateData;
