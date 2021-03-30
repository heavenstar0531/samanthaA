import React from 'react';
import i18n from './translator'
import './styles/copyright-section.css';

class CopyrightSection extends React.Component {
    render() {
        return(
            <div className='copyright-section'>
                <div className='developer-copyright'>
                        {i18n.t('copyright')}
                </div>
            </div>
        )
    }
}

export default CopyrightSection;