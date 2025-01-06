
import axios from 'axios';
import {useState } from "react";



function EmployeeRegistration() 
{

    const [id, setId]=useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [mobile, setMobile] = useState("");

    async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8085/api/v1/employee/save",
        {
    
        employeename: name,
        address : address,
        mobile : mobile
        
        });
          alert("Employee Registration Successfully");
          setId("");
          setName("");
          setAddress("");
          setMobile("");
        
        
        }
    catch(err)
        {
          alert("User Registration Failed");
        }
        
   }
   
    return (
     
        <div class="container mt-4" >
        

          <h2  className = 'text-center' > REGISTRATION FORM </h2>
        <form>
       
        <div class="form-group">
           <label>Name</label>
            <input type="text" class="form-control" margin-left= "200px" placeholder="Enter Your Name" 
             value={name}
            onChange={(event) =>
              {
                setName(event.target.value);      
              }}
            />
        </div>

        <div class="form-group">
            <label>Address</label>
            <input type="text" class="form-control" placeholder="Enter Your Address"
             value={address}
             onChange={(event) =>
               {
                setAddress(event.target.value);      
               }}
            />
        </div>

        <div class="form-group" >
        
        <label>Mobile</label>
            <input type="text" class="form-control" placeholder="Enter Your MobileNumber"  
            onChange={(event) =>
              {
                setMobile(event.target.value);      
              }}
           /> 
        </div>
       
        
       <button class="btn btn-primary mt-4"  onClick={save}>Register</button>
        </form>

      </div>
    );
  }
  

  export default EmployeeRegistration;