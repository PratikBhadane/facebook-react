import React, { useState } from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './navbar.css';
import{useHistory} from 'react-router-dom';



//total 12 column in page
function Navbar()
{
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const history=useHistory();
    
    function logout()
    {
      localStorage.removeItem('logedIn');
      // go to home page
      history.push('/');
      //refresh page
      window.location.reload(true);
    }

    function login()
    {
      let users=JSON.parse(localStorage.getItem('users'));
      let exist=false;
      users.forEach(user => {
        
        if(user.username===username && user.password===password)
        {
            exist=true;
        }
      });

      if(exist===true)
      {
        alert('Login Successful');
        localStorage.setItem('logedIn','logedIn');
        history.push('/dashboard');
        // refresh page
        window.location.reload(true);
      }
      else
      {
        alert('Invalid Credentials');
      }

    } 

    return <div>
      <div className='row nav'>
         <div className='col-md-6'>
           <h1>Facebook</h1>
         </div>
         <div className='col-md-6'>
           {
            (()=>{
                if(localStorage.getItem('logedIn'))
                {
                  return <div>
                  <button onClick={logout}>Logout</button>
                  </div>
                }
                else
                {
                  return <div>
                  <input type="text" placeholder='username' value={username}  onChange=
            {
              (e)=>{
                setUsername(e.target.value);
              }
            }  />
            <input type="text" placeholder='password'  value={password}  onChange=
            {
              (e)=>{
                setPassword(e.target.value);
              }
            }  />
            <button className='btn-secondary' onClick={login} >Login</button>
    
                  </div>

                }
            })()
           
           }

        </div>
      </div>


   
    </div>
}
export default Navbar; 