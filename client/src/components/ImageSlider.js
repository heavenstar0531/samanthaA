import React from 'react';
import './styles/image-slider.css';

class ImageSlider extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }

    pharse_to_slides(apartment) {
        var slides = []
        var slides_length = apartment.images.length
        if (apartment.video){
            slides_length++
            slides.push(
                <div className="slides">
                    <div className="numbertext">{slides.length + 1} / {slides_length}</div>
                    <video className="video" controls>
                        <source src={apartment.video} type="video/MP4"/>
                    </video>
                </div>
            )
        }

        for (var [, image] of apartment.images.entries()){
            slides.push(
                <div className="slides fade">
                    <div className="numbertext">{slides.length + 1} / {slides_length}</div>
                    <div className="image">
                        <img src={image.path} alt=""/>
                    </div>
                </div>
            )
        }
        
        return slides
    }

    componentDidUpdate(prevProps){
        if (this.props.apartment !== prevProps.apartment){
            this.setState({index: 0})
        }
    }

    render(){
        this.slides = this.pharse_to_slides(this.props.apartment)
        return(
            <div className="image-slider">
                {this.slides[this.state.index]}
                <div className="prev" onClick={this.prev}>
                    <i>&#10094;</i>
                </div>
                <div className="next" onClick={this.next}>
                    <i>&#10095;</i>
                </div>
            </div>
        );
    }

    prev = () => {
        if (this.state.index - 1 >= 0){
            this.setState({index: this.state.index - 1})
        } else {
            this.setState({index: this.slides.length - 1})
        }
    }

    next = () => {
        if (this.state.index + 1 <= this.slides.length - 1){
            this.setState({index: this.state.index + 1})
        } else {
            this.setState({index: 0})
        }
    }
}

export default ImageSlider;