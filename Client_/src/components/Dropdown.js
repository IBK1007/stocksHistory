import * as React from 'react';

import { Select, FormControl, MenuItem, InputLabel, Box } from '@mui/material';

const Dropdown = ({ ticker, setTicker, allTickers }) => {

    const handleChange = (event) => {
        setTicker(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Ticker</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={ticker}
                    label="Age"
                    onChange={handleChange}
                >
                    {allTickers.length > 0 ? allTickers.map(ticker => <MenuItem key={ticker} value={ticker}>{ticker}</MenuItem>) : null}
                </Select>
            </FormControl>
        </Box>
    );
}

export default Dropdown