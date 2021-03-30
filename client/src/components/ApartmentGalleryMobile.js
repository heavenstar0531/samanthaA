import React from 'react'
import i18n from './translator'
import ImageSlider from './ImageSlider'
import IconWithValue from './IconWithValue'
import './styles/apartment-gallery-mobile.css'

class ApartmentGalleryMobile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            apartments: props.apartments,
            index: 0
        }
    }

    rightArrow = () => {
        if (this.state.index + 1 < this.state.apartments.length) {
            this.setState({ index: this.state.index + 1 });
        }
    }

    leftArrow = () => {
        if (this.state.index - 1 >= 0) {
            this.setState({ index: this.state.index - 1 });
        }
    }

    createPriceTag(price) {
        return (price.toLocaleString() + ' ₪')
    }

    render() {
        var apartment = this.state.apartments[this.state.index]
        return (
            <div className="gallery">
                <div className="left arrow" onClick={this.leftArrow}>
                    <i className="fas fa-angle-left"></i>
                </div>
                <div className="apartment-card">
                    <ImageSlider apartment={apartment} />
                    <div className="info-container">
                        <IconWithValue icon="fas fa-door-open" title={i18n.t('number-of-rooms')} value={apartment.rooms} />
                        <IconWithValue icon="fas fa-bed" title={i18n.t('number-of-bedrooms')} value={apartment.bedrooms} />
                        <IconWithValue icon="fas fa-bath" title={i18n.t('number-of-bathrooms')} value={apartment.bathrooms} />
                        <IconWithValue icon="fas fa-ruler-combined" title={i18n.t('square-feet')} value={apartment.size} />
                    </div>
                    <div className="free-text" style={{
                        direction: i18n.dir()
                    }}>
                        <i>{apartment["free_text_" + i18n.language.split('-')[0]]}</i>
                    </div>
                    <i className="price-tag">{this.createPriceTag(apartment.price)}</i>
                </div>
                <div className="right arrow" onClick={this.rightArrow}>
                    <i className="fas fa-angle-right"></i>
                </div>
            </div>
        )
    }
}

export default ApartmentGalleryMobile