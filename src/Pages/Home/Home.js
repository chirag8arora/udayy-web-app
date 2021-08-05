import './../../Stylesheets/home.css'
import logo from './../../Assets/UdayyLogo.png'
import logoToolbar from './../../Assets/UdayyToolbar.png'
import logout from './../../Assets/logout.png'
import background from './../../Assets/background.jpg'
import { useParams } from 'react-router'
import React  from 'react'
import { BrowserComponent } from './BrowserComponent'


export const Home = React.memo(() => {
    const {userName} = useParams();
   
    return(
        <div className = 'main-container' style ={{backgroundImage : {background}}}>
            <div style = {{float : 'left', marginBottom : '-40px'}}>
                <img src={logo} style={{width: '50px', float:'left'}} alt =""/>
                <img src={logoToolbar} style={{width: '75px',height : '20px', margin : 'auto', float:'left', marginTop : '20px'}} alt =""/>
                <img src = {logout} style = {{float : 'right',width: '32px', marginTop : '20px', marginLeft : '10px'}} alt ="" onClick = {() => {window.location.href = '/'}}/>
                <p style ={{float : 'right',fontSize : '21px'}}><u>{userName}</u></p>
            </div>
            <hr/>
            <div className = 'home-container'>
                <BrowserComponent />
                <BrowserComponent />
            </div>
            
        </div>
        
    );
});
