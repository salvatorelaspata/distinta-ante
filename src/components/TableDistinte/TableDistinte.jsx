import React from 'react';
import { useTheme, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Checkbox } from '@material-ui/core';
import { useTable } from '../hook/useTable';
import ToolbarDistinte from './ToolbarDistinte';
import clsx from 'clsx';
import { useStyles } from '../hook/useStyles';

const StyledTableCell = withStyles(
    (theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
            borderLeft: '1px solid',
            borderLeftColor: theme.palette.primary,
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

    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <div>
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

                            <StyledTableCell
                                className={clsx(classes.borderTable)}
                                width={60}
                            >
                                Pos.
                            </StyledTableCell>
                            <StyledTableCell
                                className={clsx(classes.borderTable)}
                                width={60}
                            >
                                Pz.
                            </StyledTableCell>
                            <StyledTableCell
                                className={clsx(classes.borderTable)}
                                width={60}
                            >
                                Telaio
                            </StyledTableCell>
                            <StyledTableCell
                                className={clsx(classes.borderTable)}
                                width={80}
                            >
                                n Ante
                            </StyledTableCell>
                            <StyledTableCell
                                className={clsx(classes.borderTable)}
                                width={60}
                            >
                                Tipo
                            </StyledTableCell>
                            <StyledTableCell
                                className={clsx(classes.borderTable)}
                                width={120}
                                colSpan={2}
                                align='center'
                            >
                                Misure esterno telaio (mm)
                            </StyledTableCell>
                            <StyledTableCell
                                className={clsx(classes.borderTable)}
                                align='center'
                            >
                                Altezza (mm)
                            </StyledTableCell>
                            <StyledTableCell
                                className={clsx(classes.borderTable)}
                                colSpan={2}
                                align='center'
                            >
                                Ante (mm)
                            </StyledTableCell>
                            <StyledTableCell
                                className={clsx(classes.borderTable)}
                                align='center'
                            >
                                T a SCATTO (mm)
                            </StyledTableCell>
                            <StyledTableCell
                                className={clsx(classes.borderTable)}
                                colSpan={2}
                                align='center'
                            >
                                Fascione (mm)
                            </StyledTableCell>
                            <StyledTableCell
                                className={clsx(classes.borderTable)}
                                colSpan={2}
                                align='center'
                            >
                                Mezza Lamella (mm)
                            </StyledTableCell>
                            <StyledTableCell
                                className={clsx(classes.borderTable)}
                                colSpan={2}
                                align='center'
                            >
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
                            <TableCell className={clsx(classes.borderTable)} />
                            <TableCell className={clsx(classes.borderTable)} />
                            <TableCell className={clsx(classes.borderTable)} />
                            <TableCell className={clsx(classes.borderTable)} />
                            <TableCell className={clsx(classes.borderTable)} />
                            <TableCell
                                className={clsx(classes.borderTable)}
                                align='left'
                            >
                                Base
                            </TableCell>
                            <TableCell
                                className={clsx(classes.borderTable)}
                                align='right'
                            >
                                Altezza
                            </TableCell>
                            <TableCell className={clsx(classes.borderTable)} />
                            <TableCell
                                className={clsx(classes.borderTable)}
                                align='left'
                            >
                                Maniglia
                            </TableCell>
                            <TableCell
                                className={clsx(classes.borderTable)}
                                align='right'
                            >
                                Laterale
                            </TableCell>
                            <TableCell className={clsx(classes.borderTable)} />
                            <TableCell
                                className={clsx(classes.borderTable)}
                                align='left'
                            >
                                Maniglia
                            </TableCell>
                            <TableCell
                                className={clsx(classes.borderTable)}
                                align='right'
                            >
                                Laterale
                            </TableCell>
                            <TableCell
                                className={clsx(classes.borderTable)}
                                align='left'
                            >
                                Maniglia
                            </TableCell>
                            <TableCell
                                className={clsx(classes.borderTable)}
                                align='right'
                            >
                                Laterale
                            </TableCell>
                            <TableCell
                                className={clsx(classes.borderTable)}
                                align='left'
                            >
                                Maniglia
                            </TableCell>
                            <TableCell
                                className={clsx(classes.borderTable)}
                                align='right'
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
                                    altezza,
                                    ante,
                                    tAScatto,
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
                                        <TableCell
                                            className={clsx(
                                                classes.borderTable
                                            )}
                                        >
                                            {index + 1}
                                        </TableCell>
                                        <TableCell
                                            className={clsx(
                                                classes.borderTable
                                            )}
                                        >
                                            {pz}
                                        </TableCell>
                                        <TableCell
                                            className={clsx(
                                                classes.borderTable
                                            )}
                                        >
                                            {telaio}
                                        </TableCell>
                                        <TableCell
                                            className={clsx(
                                                classes.borderTable
                                            )}
                                        >
                                            {nAnte}
                                        </TableCell>
                                        <TableCell
                                            className={clsx(
                                                classes.borderTable
                                            )}
                                        >
                                            {tipo}
                                        </TableCell>
                                        <TableCell
                                            className={clsx(
                                                classes.borderTable
                                            )}
                                            align='left'
                                        >
                                            {misureEsternotelaio.base}
                                        </TableCell>
                                        <TableCell
                                            className={clsx(
                                                classes.borderTable
                                            )}
                                            align='right'
                                        >
                                            {misureEsternotelaio.altezza}
                                        </TableCell>
                                        <TableCell
                                            className={clsx(
                                                classes.borderTable
                                            )}
                                            align='right'
                                        >
                                            {altezza}
                                        </TableCell>
                                        <TableCell
                                            className={clsx(
                                                classes.borderTable
                                            )}
                                            align='left'
                                        >
                                            {ante.maniglia}
                                        </TableCell>
                                        <TableCell
                                            className={clsx(
                                                classes.borderTable
                                            )}
                                            align='right'
                                        >
                                            {ante.laterale}
                                        </TableCell>
                                        <TableCell
                                            className={clsx(
                                                classes.borderTable
                                            )}
                                            align='right'
                                        >
                                            {tAScatto}
                                        </TableCell>

                                        <TableCell
                                            className={clsx(
                                                classes.borderTable
                                            )}
                                            align='left'
                                        >
                                            {fascione.maniglia}
                                        </TableCell>
                                        <TableCell
                                            className={clsx(
                                                classes.borderTable
                                            )}
                                            align='right'
                                        >
                                            {fascione.laterale}
                                        </TableCell>
                                        <TableCell
                                            className={clsx(
                                                classes.borderTable
                                            )}
                                            align='left'
                                        >
                                            {mezzaLamella.maniglia}
                                        </TableCell>
                                        <TableCell
                                            className={clsx(
                                                classes.borderTable
                                            )}
                                            align='right'
                                        >
                                            {mezzaLamella.laterale}
                                        </TableCell>
                                        <TableCell
                                            className={clsx(
                                                classes.borderTable
                                            )}
                                            align='left'
                                        >
                                            {lamella.maniglia}
                                        </TableCell>
                                        <TableCell
                                            className={clsx(
                                                classes.borderTable
                                            )}
                                            align='right'
                                        >
                                            {lamella.laterale}
                                        </TableCell>
                                    </StyledTableRow>
                                );
                            }
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
