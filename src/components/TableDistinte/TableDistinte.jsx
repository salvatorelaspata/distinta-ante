import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Checkbox } from '@material-ui/core';
import { useTable } from '../hook/useTable';
import ToolbarDistinte from './ToolbarDistinte';

const StyledTableCell = withStyles(
    (theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
    { index: 1 }
)(TableCell);

const StyledTableRow = withStyles(
    (theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
    { index: 1 }
)(TableRow);

export default function TableDistinte({ rows, multipleRemove }) {
    const {
        handleSelectAllClick,
        selected,
        isSelected,
        handleClick,
        dense,
        setSelected,
    } = useTable(rows);

    const handleRemoveItem = function () {
        const all = multipleRemove(selected);
        Promise.all(all).then((values) => {
            setSelected([]);
        });
    };
    const numSelected = selected && selected.length;
    const rowCount = rows.length;
    return (
        <>
            <ToolbarDistinte
                title='Distinte'
                numSelected={selected && selected.length}
                onDeleteDistinta={handleRemoveItem}
            />
            <TableContainer style={{ maxHeight: '100%' }}>
                <Table stickyHeader aria-label='sticky table'>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell />

                            <StyledTableCell width={60}>Pos.</StyledTableCell>
                            <StyledTableCell width={60}>Pz.</StyledTableCell>
                            <StyledTableCell width={60}>Telaio</StyledTableCell>
                            <StyledTableCell width={80}>n Ante</StyledTableCell>
                            <StyledTableCell width={60}>Tipo</StyledTableCell>
                            <StyledTableCell
                                width={120}
                                colSpan={2}
                                align='center'
                            >
                                Misure esterno telaio (mm)
                            </StyledTableCell>
                            <StyledTableCell colSpan={2} align='center'>
                                Ante (mm)
                            </StyledTableCell>
                            <StyledTableCell colSpan={2} align='center'>
                                Fascione (mm)
                            </StyledTableCell>
                            <StyledTableCell colSpan={2} align='center'>
                                Mezza Lamella (mm)
                            </StyledTableCell>
                            <StyledTableCell colSpan={2} align='center'>
                                Lamella (mm)
                            </StyledTableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell padding='checkbox'>
                                <Checkbox
                                    indeterminate={
                                        numSelected > 0 &&
                                        numSelected < rowCount
                                    }
                                    checked={
                                        rowCount > 0 && numSelected === rowCount
                                    }
                                    onChange={handleSelectAllClick}
                                    inputProps={{
                                        'aria-label': 'select all desserts',
                                    }}
                                />
                            </TableCell>
                            <TableCell
                                colSpan={5}
                                style={{ top: dense ? 81 : 61 }}
                            />
                            <TableCell
                                align='left'
                                style={{ top: dense ? 81 : 61 }}
                            >
                                Base
                            </TableCell>
                            <TableCell
                                align='right'
                                style={{ top: dense ? 81 : 61 }}
                            >
                                Altezza
                            </TableCell>
                            <TableCell
                                align='left'
                                style={{ top: dense ? 81 : 61 }}
                            >
                                Maniglia
                            </TableCell>
                            <TableCell
                                align='right'
                                style={{ top: dense ? 81 : 61 }}
                            >
                                Laterale
                            </TableCell>
                            <TableCell
                                align='left'
                                style={{ top: dense ? 81 : 61 }}
                            >
                                Maniglia
                            </TableCell>
                            <TableCell
                                align='right'
                                style={{ top: dense ? 81 : 61 }}
                            >
                                Laterale
                            </TableCell>
                            <TableCell
                                align='left'
                                style={{ top: dense ? 81 : 61 }}
                            >
                                Maniglia
                            </TableCell>
                            <TableCell
                                align='right'
                                style={{ top: dense ? 81 : 61 }}
                            >
                                Laterale
                            </TableCell>
                            <TableCell
                                align='left'
                                style={{ top: dense ? 81 : 61 }}
                            >
                                Maniglia
                            </TableCell>
                            <TableCell
                                align='right'
                                style={{ top: dense ? 81 : 61 }}
                            >
                                Laterale
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(
                            (
                                {
                                    pz,
                                    telaio,
                                    nAnte,
                                    tipo,
                                    misureEsternotelaio,
                                    ante,
                                    fascione,
                                    mezzaLamella,
                                    lamella,
                                },
                                index
                            ) => {
                                const isItemSelected = isSelected(rows[index]);
                                return (
                                    <StyledTableRow
                                        role='checkbox'
                                        key={index}
                                        style={{ top: 81 * 2 }}
                                        onClick={(event) =>
                                            handleClick(event, rows[index])
                                        }
                                        selected={isItemSelected}
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                    >
                                        <TableCell padding='checkbox'>
                                            <Checkbox
                                                checked={isItemSelected}
                                                inputProps={{
                                                    'aria-labelledby':
                                                        index + 1,
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{pz}</TableCell>
                                        <TableCell>{telaio}</TableCell>
                                        <TableCell>{nAnte}</TableCell>
                                        <TableCell>{tipo}</TableCell>
                                        <TableCell align='left'>
                                            {misureEsternotelaio.base}
                                        </TableCell>
                                        <TableCell align='right'>
                                            {misureEsternotelaio.altezza}
                                        </TableCell>
                                        <TableCell align='left'>
                                            {ante.maniglia}
                                        </TableCell>
                                        <TableCell align='right'>
                                            {ante.laterale}
                                        </TableCell>
                                        <TableCell align='left'>
                                            {fascione.maniglia}
                                        </TableCell>
                                        <TableCell align='right'>
                                            {fascione.laterale}
                                        </TableCell>
                                        <TableCell align='left'>
                                            {mezzaLamella.maniglia}
                                        </TableCell>
                                        <TableCell align='right'>
                                            {mezzaLamella.laterale}
                                        </TableCell>
                                        <TableCell align='left'>
                                            {lamella.maniglia}
                                        </TableCell>
                                        <TableCell align='right'>
                                            {lamella.laterale}
                                        </TableCell>
                                    </StyledTableRow>
                                );
                            }
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
