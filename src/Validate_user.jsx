import React, { useEffect } from 'react';

export default function Validate_user(){
    useEffect(()=>{
      fetch(`/validate_user/${token}`)
      .then(response =>response.json)
      .then(data =>{
        console.log(data)})
      .catch(error => console.error("error fetching",error))
    })
}