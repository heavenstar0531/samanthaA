import React from 'react';
import i18n from './translator'
import './styles/under-maintenance.css';

function UnderMaintenance() {
    return(
        <div className='under-maintenance' style={{direction: i18n.dir()}}>
            <div className='message-board'>
                <i className="fas fa-tools"></i>
                <h2>{i18n.t('under-maintenance')}</h2>
            </div>
        </div>
    )
};

export default UnderMaintenance;