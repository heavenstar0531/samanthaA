import React from 'react'
import RentSellSwitch from './RentSellSwitch'
import './styles/apartment-filter.css'

class ApartmentFilter extends React.Component {
    constructor(){
        super()
        this.state = {
            isOpen: true,
            arrow: 'arrow-up'
        }
    }

    show_hide = () => {
        if (this.state.isOpen) {
            this.setState({isOpen: false, arrow: 'arrow-down'})
        } else {
            this.setState({isOpen: true, arrow: 'arrow-up'})
        }
    }

    filter_form = (
        <div className="filter-form">
            <div className="switch">
                <RentSellSwitch/>
            </div>
        </div>
    )

    render(){
        return(
            <div className="apartment-filter">
                {
                    this.state.isOpen ? this.filter_form : null
                }
                <div className="show-hide" onClick={this.show_hide}>
                    <i class={"fas fa-" + this.state.arrow}/>
                </div>
            </div>
        )
    }
}

export default ApartmentFilter