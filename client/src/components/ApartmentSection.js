import React from 'react'
import Axios from 'axios'
import i18n from './translator'
import ApartmentGalleryMobile from './ApartmentGalleryMobile'
import ApartmentGalleryDesktop from './ApartmentGalleryDesktop'
import UnderMaintenance from './UnderMaintenance'
import './styles/apartment-section.css';

class ApartmentSection extends React.Component{
    constructor() {
        super();

        this.state = {
            apartments: []
        }
    }

    componentDidMount() {
        Axios.get('https://realestate-in-israel.com/properties')
        .then(res => {
            if (Array.isArray(res.data)){
                this.setState({apartments: res.data});
            } else {
                throw Error
            }
        }).catch(err => {
            console.log(err)
            this.setState({apartments: []});
        });
    };

    render() {
        if (this.state.apartments.length > 0){
            return(
                <div className="apartment-search-section" id="apartment-search-section">
                    <div className="title">
                        <h1>{i18n.t('apartments')}</h1>
                    </div>
                    {window.innerWidth <=800 ? <ApartmentGalleryMobile apartments={this.state.apartments}/> : <ApartmentGalleryDesktop apartments={this.state.apartments}/>}
                </div>
            )
         }else {
            return(
                <div className="apartment-search-section" id="apartment-search-section"><UnderMaintenance/></div>
            )
        }
    }
}

export default ApartmentSection;