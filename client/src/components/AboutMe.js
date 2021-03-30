import React from 'react'
import i18n from './translator'
import VizSensor from 'react-visibility-sensor'
import './styles/about-me.css'

class AboutMe extends React.Component {
    state = {
        isDesktop: true,
        contentVisible: false
    }

    componentDidMount() {
        if (window.innerWidth <= 800) {
            this.setState({ isDesktop: false })
        } else {
            this.setState({ isDesktop: true })
        }
    }

    render() {
        return (
            <div className="about-me" id="about-me">
                <VizSensor onChange={(isVisible) => {
                    this.setState({ contentVisible: isVisible })
                }}>
                    <div className="visabillity">
                        <div className="card" style={{
                            position: this.state.contentVisible ? '' : 'absolute',
                            width: this.state.contentVisible ? (this.state.isDesktop ? '1250px' : '90vw') : (this.state.isDesktop ? '350px' : (i18n.dir() === 'rtl' ? '29vh' : '23vh')),
                            height: this.state.contentVisible ? (this.state.isDesktop ? '350px' : i18n.dir() === 'rtl' ? '70vh' : '80vh') : (this.state.isDesktop ? '350px' : (i18n.dir() === 'rtl' ? '29vh' : '23vh')),
                            borderRadius: this.state.isDesktop ? '' : (this.state.contentVisible ? '30px' : '150px'),
                            transition: this.state.isDesktop ? 'all 1s linear' : 'all 0.6s linear',
                            flexDirection: this.state.isDesktop ? (i18n.dir() === 'rtl' ? 'row-reverse' : 'row') : 'column'
                        }}>
                            <div className="image">
                                <img style={{
                                    transform: i18n.dir() === 'rtl' ? 'scaleX(-1)' : '',
                                    height: this.state.isDesktop ? '330px' : (i18n.dir() === 'rtl' ? '27vh' : '22vh'),
                                    }} src="./images/profile.jpg" alt='Samantha Azoulay, Owner.' />
                            </div>
                            <div className="text" style={{
                                display: this.state.contentVisible ? '' : (this.state.isDesktop ? '' : 'none'),
                                opacity: this.state.isDesktop ? (this.state.contentVisible ? 1 : 0) : '',
                                transition: this.state.isDesktop ? 'opacity 0.5s linear' : '',
                                transitionDelay: this.state.isDesktop ? (this.state.contentVisible ? '1s' : '') : '',
                                direction: i18n.dir(),
                                fontSize: this.state.isDesktop ? '18px' : (i18n.dir() === 'rtl' ? '2vh' : '1.9vh')
                            }}>
                                <h2>{i18n.t('about-title')}</h2>
                                <p>
                                    {i18n.t('about-content')}
                                </p>
                            </div>
                        </div>
                    </div>
                </VizSensor>
            </div>
        )
    }
}

export default AboutMe