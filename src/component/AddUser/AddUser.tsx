import React,{useState} from 'react'
import './AddUser.css'
import axios from 'axios';

const AddUser: React.FC<{ getAllUserAxios:()=> void; }> = ({getAllUserAxios}) => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const adduserBTN = ()=>{
    const newUser ={
        email,
        password,
        id: Math.random(),
        date : new Date,
    }
    console.table(
        newUser
        )
        axios({
            method: 'post',
            url: 'http://localhost:3001/add',
            data: newUser
          }).then(response=>{
              console.log('Add response',response)
              getAllUserAxios();

          }).catch(error => {
               console.log('Show error',error)
             
          });

        setEmail('');
        setPassword('');
}

  return (
     <div className="form-group">

         <h3> ADD NEW USER </h3>

         <div className="form-control">
            <label htmlFor="email">Email</label>
             <input type = 'text' id = "email" value = {email} onChange = {e=>setEmail(e.target.value)} />
         </div>

         <div className="form-control">   
             <label htmlFor="password">Password</label>
             <input type = 'password' id= "password" value = {password} onChange = {e=>setPassword(e.target.value)} />
         </div>
         <br></br>
         <button onClick={adduserBTN}> Add User </button>
     </div>
  )
}

export default AddUser;
