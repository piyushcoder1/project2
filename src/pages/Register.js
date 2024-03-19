import React, {useState} from 'react'
import axios from 'axios';

const Register = () => {
    const [formData, setFormData]= useState({
        username: '', password: '',
        role: '',
    })
    const {username, password, role}=formData;
    const handleChange=e=> setFormData({...formData, [e.target.name]: e.target.value})
    const handleSubmit=async e =>{
        e.preventDefault();
        try{
            const res=await axios.post('/api/auth/register', formData);
            console.log(res.data);

        }
        catch(err){
            console.log(err.response.data);
        }
    }
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={username} onChange={handleChange}/>
        <input type="password" name="password" value={password} onChange={handleChange}/>
        <select name="role" value={role} onChange={handleChange}>
            <option value="">Select Role</option>
            <option value="Uploader">Uploader</option>
            <option value="Approver">Approver</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
