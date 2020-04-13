import React from 'react'

// Material UI Table Row Styling
import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
root: {
    '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.background.default,
    },
},
}))(TableRow);

const CountryData = ({country}) => {
    return (
        <StyledTableRow className='country-data container'>
            <StyledTableCell component='th' scope='row' className='country-name'>{country.country}</StyledTableCell>
            <StyledTableCell align='right'>{country.cases}</StyledTableCell>
            <StyledTableCell align='right'>{country.todayCases}</StyledTableCell>
            <StyledTableCell align='right'>{country.active}</StyledTableCell>
            <StyledTableCell align='right'>{country.recovered}</StyledTableCell>
            <StyledTableCell align='right'>{country.critical}</StyledTableCell>
            <StyledTableCell align='right'>{country.deaths}</StyledTableCell>
            <StyledTableCell align='right'>{country.todayDeaths}</StyledTableCell>          
        </StyledTableRow>
    )
}

export default CountryData;