import React from 'react'
import {ToggleButton, ToggleButtonGroup} from '@material-ui/lab'

export default function RentSellSwitch() {
    const [alignment, setAlignment] = React.useState('rent');

    const handleAlignment = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

    return(
        <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} aria-label="Apartments for Rent or Sell">
            <ToggleButton value="rent">
                Sell
            </ToggleButton>
            <ToggleButton value="sell">
                Rent
            </ToggleButton>
        </ToggleButtonGroup>
    )
}