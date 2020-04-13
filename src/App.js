import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

// Components
import GlobalSummary from './components/GlobalSummary';
import CountriesSummary from './components/CountriesSummary';

// material-ui styling
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

function ElevationScroll(props) {
  const { children} = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

// global constants for strings
const world = 'World';
const continents = ['North America', 'Europe', 'Asia', 'South America', 'Oceania', 'Africa', ''];

//App function
function App(props) {
  const [global, setGlobal] = useState({});
  // const [continentsData, setContinentsData] = useState([]);
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    // fetching data from API
    axios.get('https://coronavirus-19-api.herokuapp.com/countries')
      .then(res => {
        console.log('data received', res.data);

        // set global data
        const globalData = res.data.filter(c => c.country === world);
        setGlobal(globalData[0]);

        //set continents data
        // setContinentsData(res.data.filter(c => continents.includes(c.country)));

        //set countries data
        setCountriesData(res.data.filter(c => c.country !== world && !continents.includes(c.country)));
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className="App">
      <ElevationScroll {...props}>
        <AppBar maxWidth='xl'  bgcolor='inherit' className='navbar'>
          <Grid px={4} display='flex' flexDirection='row' justifyContent='flex-end'>
            <Box mx={4} xs={12} md={6} color='inherit' flexGrow={1} textAlign='left'>
              <h2>COVID Tracker</h2>
            </Box>
            <Box mx={4}xs={12} md={3}>
              <h2>
                <Link color='inherit' href='#global-data'>Global</Link>
              </h2>
            </Box>
            <Box mx={4}xs={12} md={3}>
              <h2>
                <Link color='inherit' href='#countries-data'>By Country</Link>
              </h2>
            </Box>
          </Grid>
        </AppBar>
      </ElevationScroll>
      <Box my={20}>
        <GlobalSummary global={global} />
        <CountriesSummary countries={countriesData} />
      </Box>
    </div>
  );
}

export default App;
