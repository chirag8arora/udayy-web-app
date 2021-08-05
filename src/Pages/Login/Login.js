import './../../Stylesheets/login.css'
import logo from './../../Assets/UdayyLogo.png'
import logoToolbar from './../../Assets/UdayyToolbar.png'
import { LoginSlides } from './LoginSlides'
import { Button } from 'antd'
import { useState } from 'react'


export const Login = () => {
    const [userName, setUserName] = useState('');
    const [password ,setPassword] = useState('');

    const handleSubmit = (e) => {
        if(password === 'udayy') {
            window.location.href = `/home/${userName}`;
        }
        else {
            alert('Invalid credentials!!')
        }
    }
     return (
         <div className = "main-login-container">
             <div className = "login-container">
                 <div style = {{display : 'flex'}}>
                    <img src={logo} style={{width: '150px'}} alt =""/>
                    <img src={logoToolbar} style={{width: '171px',height : '48px', margin : 'auto'}} alt =""/>
                 </div>
                 <div className = 'main-form'>
                     <br/>
                     <form>
                        <p><strong>Enter your User Name *</strong></p>
                         <input type = 'text' name = 'username' placeholder = "Username" value = {userName} onChange = {(e) => {
                             e.preventDefault();
                             setUserName(e.target.value);
                         }} />
                         <br/>
                         <p><strong>Enter your Password *</strong></p>
                         <input type = 'password' id = "password" placeholder = "Password" name = 'password' value = {password} onChange = {(e) => {
                            e.preventDefault();
                            setPassword(e.target.value)
                         }} onKeyUp = {(e) => {
                            if (e.keyCode === 13) {
                                e.preventDefault();
                                handleSubmit(e); }
                         }}/>
                         <p></p>
                         <Button type = 'submit' onClick = {() => handleSubmit()} >Submit</Button>
                     </form>
                 </div>
             </div>
            <LoginSlides />
         </div>
     )
}