import {useState } from 'react'

import background from './../../Assets/background.jpg'
import kids1 from './../../Assets/kids.png'
import kids2 from './../../Assets/kids2.jpg'
import kids3 from './../../Assets/kids3.jpg'
import kids4 from './../../Assets/aboutUsKid.png'

export const LoginSlides = () => {
    const [currImage, setCurrImage] = useState(0);
    const img_arr = [kids4,kids2,kids3,kids1];

    return (
        <div className = "image-container">
        <div className = 'corousel-container'>
            <h1>India's Largest Learning Community of Kids</h1>
            <p><em>Udayy is a pioneering, mathematical thinking and confident speaking platform for children. We use interactive games in a small classroom to create a rich and engaging learning environment for children.</em></p>
            <div style ={{display : 'flex', justifyContent : 'center'}}>
                {(currImage === 0) ? <i className="arrow-left"></i>: <i className="arrow-left" onClick = {() => setCurrImage(currImage - 1)}></i> }
                <div  style = {{maxHeight : '300px', maxWidth: '450px'}}  >
                    <img src={img_arr[currImage]} style = {{width : '-webkit-fill-available'}} alt =""/>
                </div>
                {(currImage === 3) ? <i className="arrow-right"></i>: <i className="arrow-right"  onClick = {() => setCurrImage(currImage + 1)}></i> }
            </div>
        </div> 
        <img src={background} alt ="" className="background-effect"/>
    </div>
    );
}