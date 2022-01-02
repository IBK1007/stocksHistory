import * as React from 'react';
import { Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table } from '@mui/material';


const DataTable = ({ tickerData }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {
                            Object.keys(tickerData[0]).map(key =>
                                <TableCell>{key}</TableCell>
                            )
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tickerData.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell >{row.Date}</TableCell>
                            <TableCell >{row.Open}</TableCell>
                            <TableCell >{row.High}</TableCell>
                            <TableCell >{row.Low}</TableCell>
                            <TableCell >{row.Close}</TableCell>
                            <TableCell >{row.AjdClose}</TableCell>
                            <TableCell >{row.Volume}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default DataTable