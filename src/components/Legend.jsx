import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import { Fab, Paper, useTheme } from '@material-ui/core';
import D from './Dialog/D';
import { constants } from './hook/formulario';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { useStyles } from './hook/useStyles';

function camelToUnderscore(key) {
    var result = key.replace(/([A-Z0-9])/g, ' $1');
    return result.split(' ').join(' ').trim();
}

function Legend() {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [open, setOpen] = React.useState(false);
    return (
        <div>
            <D title='Legenda' open={open} setOpen={setOpen}>
                <TableContainer component={Paper}>
                    <Table
                        className={classes.table}
                        size='small'
                        aria-label='a dense table'
                    >
                        <TableBody>
                            {Object.entries(constants).map((c) => {
                                return (
                                    <TableRow key={c[0]}>
                                        <TableCell>
                                            {camelToUnderscore(c[0])}
                                        </TableCell>
                                        <TableCell align='right'>
                                            {c[1]}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </D>
            <Fab size='medium' color='secondary' aria-label='Add Project'>
                <SettingsIcon onClick={() => setOpen(true)} />
            </Fab>
        </div>
    );
}

export default Legend;
