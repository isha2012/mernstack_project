import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {
    const history = useHistory();
    //promises
    useEffect(()=> {
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: "application/json"
            },
            credentials: "include"
        }).then((res)=>{
              history.push('/Home', {
                  replace: true
              });
              if(res.status!=200) {
                  const error = new Error(res.error);
                  throw error;
              }
        }).catch((err) => {
            console.log(err);
        });
    });

    return ( 
        <></>
    )
}
export default Logout;
