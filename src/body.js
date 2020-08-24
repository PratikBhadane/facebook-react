import React,{useState} from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './body.css'
function Body()
{
    const[name,setName]=useState('');
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');

    function registerUser(event)
    {

      event.preventDefault();

      let users=JSON.parse(localStorage.getItem('users') || "[]");
      let newUser={
        name:name,
        username:username,
        password:password,
      }
      users.push(newUser);

      //local storage not accept object and array directly
      // so we need to conver into string
      localStorage.setItem('users',JSON.stringify(users));

      alert('Registration is successfull');
      
    }

    return <div>
      <div className='row justify-content-center'>
       <div className='col-md-6 imgdiv'>
         <img src='data:image/jpeg;base64,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' width='650px' height='270px' alt='sorry'/>
       </div>
     
       <div className='col-md-4'>
        <h1>Register</h1>
        <form onSubmit={registerUser}  >
          <input type="text" placeholder='name'   className='form-control' value={name}  onChange=
          {
            (e)=>{
                 setName(e.target.value);
          }}  />
          <input type="text" placeholder='username' className='form-control' value={username}  onChange=
          {
            (e)=>{
                 setUsername(e.target.value);
          }}  />  
          <input type="text" placeholder='password' className='form-control' value={password}  onChange=
          {
            (e)=>{
                 setPassword(e.target.value);
          }}  /> 
          <input type="submit" className='btn btn-primary' value='SignUp' />


        </form>
       </div>

      </div>
    </div>
}

export default Body;