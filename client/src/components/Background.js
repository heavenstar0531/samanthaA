import React from 'react';
import './styles/background.css'

class Background extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            background_image: 'image.jpg',
            background_mp4: './background/background.mp4',
            background_webm: './background/background.webm'
        }
    }

    render(){
        return(
            <video playsInline className="videoBG" poster={this.state.background_image} autoPlay muted loop>
                <source src={this.state.background_mp4} type="video/mp4"/>
                <source src={this.state.background_webm} type="video/webm"/>
            </video>
        )
    }
}

export default Background;