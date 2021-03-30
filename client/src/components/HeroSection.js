import React from 'react';
import i18n from './translator'
import VizSensor from 'react-visibility-sensor'
import './styles/hero-section.css';

class HeroSection extends React.Component {
    state = {
        visible: false
    }
    
    render() {
        return (
            <div className="hero-section" id="hero-section" style={{direction: i18n.dir()}}>
                <VizSensor onChange={(isVisible) => {
                    this.setState({ visible: isVisible })
                }}>
                    <div className="hero-content">
                        <div className="top-heading" style={{
                            marginLeft: i18n.dir() === 'rtl' ? '10vw' : '',
                            marginRight: i18n.dir() === 'rtl' ? '' : '10vw'
                        }}>
                            <h1>{i18n.t('first-line-hero-section')}</h1>
                        </div>
                        <div className="bottom-heading" style={{
                            marginTop: '10px',
                            marginLeft: i18n.dir() === 'rtl' ? '' : '10vw',
                            marginRight: i18n.dir() === 'rtl' ? '10vw' : ''
                        }}>
                        <h1>{i18n.t('second-line-hero-section')}</h1>
                        </div>
                    </div>
                </VizSensor>
            </div>
        )
    }
}

export default HeroSection;