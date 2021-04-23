import React, { useEffect, useState, Component  } from 'react'
import './cards/card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Card} from "react-bootstrap";
import Moment from 'react-moment';

import { Link } from 'react-router-dom';
import 'moment-timezone';

const mystyle = {
  color: "black",
  backgroundColor: "white",
  padding: "10px",
  fontFamily: "Arial",
  textAlign:"center",
  fontSize:"2em"
};

const Home2 = () => {
  
  const [user, setUsers] = useState([])

   const getUser = async ()=>{
       const response= await fetch('http://localhost:5000/data');
      
      setUsers( await response.json());
      
   }
   useEffect(() => {
      getUser();
  }, []);

  
   
   return (
      <>
        <h1 style={mystyle}>List of Missing People</h1>
        <div className="container-fluid " >
        <div className="row text-center">
        <div className="cards-container">
          {
            user.map((CurElem) => {
              return(
                <div>
                    
                  <div className="col-10 col-md-4 mt-5" key={CurElem._id}>
                  <Card style={{ width: '18rem', backgroundColor:"white"}} className="d-flex align-items-center">
                  <Card.Body>

                    <img src={CurElem.photo}/>

                    <Card.Text style={{textAlign:"center",fontFamily:"sans-serif"}}> {CurElem.username}</Card.Text>
                    
                      <Card.Title>{CurElem.age}</Card.Title>
                      <Card.Text>
                        {CurElem.location}

                    </Card.Text>

                    <Card.Text>
                      <Moment format="YYYY/MM/DD"> 
                        {CurElem.date}
                      </Moment>
                    </Card.Text>
                  
                </Card.Body>

                  <Card.Text>
                  <Link to={"/edit/"+CurElem._id}>edit</Link> | <a href="#" onClick={() => { CurElem.deleteData(CurElem._id) }}>delete</a>
                  </Card.Text>
                  
                </Card>
                </div>
              <br/>
              </div>
            
            
           )
         })

     }   
       </div>
      </div>
      </div>   
      </>
   )
}

class Home extends Component {
      render() {
          return(
             <div className="container">
             
               <div className="row row-header">
                   <p>Through This application, police station can seek help of other prople to finf missing people, children founf on road side can be instantly contacted and sent to the nearbby police station and moreover police can upload the missing people recored so that other people can help if they have seen the person</p>
                  <p><strong>The main advantage og this will we:</strong>It is easier as well as quick process to find missing person than it is today, records of the missing people will be maintained and the children lost and left on the road streets will be immediately reached in safe hands.</p>
               </div>

               <Home2 />
             </div>
           );
      }
}


export default Home;
