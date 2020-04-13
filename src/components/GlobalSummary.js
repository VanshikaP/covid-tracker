import React from 'react';

// Material UI Styling
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'


const GlobalSummary = ({global}) => {
    return (
        <Box  id='global-data' border={1} mx={8} p={4} bgcolor='#f5f5f5' className='global-data container'>
            <Grid container spacing={3} className='total container'>
                <Grid item xs={12} md={4} className='data-container'>
                    <Box p={4} bgcolor='text.secondary' color='background.paper' height='70%'>
                        <h2 className='main-data'>
                            {global.cases}
                        </h2>
                        <h3 className='data-subtitle'>
                            Confirmed cases
                        </h3>
                        <h4 className='new-data'>
                            {global.todayCases} New
                        </h4>
                    </Box>
                </Grid>
                
                <Grid item xs={12} md={4} className='data-container'>
                    <Box p={4} bgcolor='success.main' color='background.paper' height='70%'>
                        <h2 className='main-data'>
                            {global.recovered}
                        </h2>
                        <h3 className='data-subtitle'>
                            Recovered
                        </h3>
                    </Box>
                </Grid>

                <Grid item xs={12} md={4} className='data-container'>
                    <Box p={4} bgcolor='secondary.main' color='background.paper' height='70%'>
                        <h2 className='main-data'>
                            {global.deaths}
                        </h2>
                        <h3 className='data-subtitle'>
                            Deaths
                        </h3>
                        <h4 className='new-data'>
                            {global.todayDeaths} New
                        </h4>
                    </Box>
                </Grid>

            </Grid>      
        </Box>
    )
}

export default GlobalSummary;