import React from 'react';
import i18n from './translator'
import './styles/navigation-bar.css'

class NavigationBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showMenu: false
        }
    }

    nav_link = (props) => {
        return (
            <div className="nav-link" onClick={() => { this.setState({ showMenu: !this.state.showMenu }) }}>
                <a href={props.link}>{props.text}</a>
            </div>
        )
    }

    links_wrapper = (
        <div className="links-wrapper" style={{ direction: i18n.dir() }}>
            <div className="languages">
                <button onClick={() => {i18n.changeLanguage('en')}}>English</button>
                <button onClick={() => {i18n.changeLanguage('he')}}>עברית</button>
            </div>
            <div className="links">
                {this.nav_link({ link: "#hero-section", text: i18n.t('home') })}
                {this.nav_link({ link: "#about-me", text: i18n.t('about-me') })}
                {this.nav_link({ link: "#apartment-search-section", text: i18n.t('apartments') })}
            </div>
        </div>
    )

    menuClicked = () => {
        this.setState({ showMenu: !this.state.showMenu })
    }

    menuButton = (
        <label className="menu-btn" onClick={this.menuClicked}>
            <i className="fas fa-bars"></i>
        </label>
    )

    componentDidMount() {
        this.setState({ 'scrollPos': 0 })
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = e => {
        let lastPos = this.state.scrollPos
        let Pos = window.scrollY
        if (Pos < lastPos || Pos < 10) {
            document.getElementsByClassName("navigation-wrapper")[0].style.top = "0";
        } else {
            document.getElementsByClassName("navigation-wrapper")[0].style.top = "-250px";
        }
        this.setState({ 'scrollPos': window.scrollY })
    }

    render() {
        return (
            <div className="navigation-wrapper">
                <div className="navigation-bar">
                    <div className="left-column">
                        <div className="icon">
                            <a href="https://wa.me/+972-(050)2364585">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                        <div className="contact-hours-wrapper">
                            <div className="phone">
                                <a href="tel:+972502364585">
                                    +972-502-364-585
                            </a>
                            </div>
                            <div className="hours">
                                8:00 - 22:00
                        </div>
                        </div>
                    </div>
                    <div className="center-column">
                        <div className="icon">
                            <img src="images/icon.png" alt="Icon" />
                        </div>
                        <div className="logo">{i18n.t('name')}<br />{i18n.t('real-estate')}</div>
                    </div>
                    <div className="right-column">
                        {window.innerWidth > 800 ? this.links_wrapper : this.menuButton}
                    </div>
                </div>
                {window.innerWidth <= 800 && this.state.showMenu ? this.links_wrapper : null}
            </div>
        )
    }
}

export default NavigationBar