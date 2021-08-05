import { useState } from "react";

export const BrowserComponent = () => {
    const [url, setURL] = useState({
        url_link : '',
        displayIframe : false
    });
    return (
        <div className = 'main-browser-container'>
            <div>
                <input type = 'text' placeholder = 'Copy Embedded URL' 
                value = {url.url_link}
                 onChange = {(e) => {
                     e.preventDefault();
                     setURL({...url,url_link : e.target.value})
                    }}

                 onKeyUp = {(e) => {
                        if (e.keyCode === 13) {
                            e.preventDefault();
                            setURL({...url, displayIframe : true })
                            console.log(url);
                            }
                    }}/>
            </div>
            {(url.displayIframe) ? <IFrameComponent url = {url.url_link}/> : <IFrameComponent />}
        </div>
    )
};


const IFrameComponent = ({url}) => {
    return (
        <div>
            <div>
                <iframe src = {url} title = "title" scrolling="auto" style = {{width :"100%" ,height:"80vh" ,style:"border:1px solid black"}} ></iframe>
            </div>
        </div>
    );

}
