
import React from 'react';
import EmployeeService from './EmployeeService';

// class CreateEmployeeComponent extends React.Component{
//     constructor(props){
//         super(props);
//         this.state= {
//             firstname:'',
//             lastname:'',
//             email:''
//         };
//     }

//     componentDidMount(){

//     }

// render(){
//     return(
//         <div>
//             <h2> Insert new Employee</h2>
            
//         </div>
//     )
// }

// }

// export default CreateEmployeeComponent;

import {useState, useEffect} from 'react';

function CreateEmployeeComponent(){
    const[firstname, setFirstname]= useState('');
    const[lastname , setLastname]= useState('');
    const[email, setEmail]= useState('');

    useEffect(()=>{

    }, []);

    return (

      <div>
        <h2>Insert New Employee</h2>
      </div>  
    )
}