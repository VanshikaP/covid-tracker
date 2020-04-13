import React from 'react';

// Components
import CountryData from './CountryData';

// Material UI Table Styling
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

const CountriesSummary = ({countries}) => {
    const classes = useStyles();

    return (
        <Box m={8}>
            <TableContainer component={Paper} className='countries-data container' id='countries-data'>
                <Table className={classes.table} aria-label='countries-data-table'>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Country</StyledTableCell>
                            <StyledTableCell align='right'>Total Cases</StyledTableCell>
                            <StyledTableCell align='right'>New Cases</StyledTableCell>
                            <StyledTableCell align='right'>Active</StyledTableCell>
                            <StyledTableCell align='right'>Recovered</StyledTableCell>
                            <StyledTableCell align='right'>Critical</StyledTableCell>
                            <StyledTableCell align='right'>Total Deaths</StyledTableCell>
                            <StyledTableCell align='right'>New Deaths</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {countries.map(country => {
                            return <CountryData country={country} key={countries.indexOf(country)} />
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default CountriesSummary;