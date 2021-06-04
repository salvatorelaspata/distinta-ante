import {
    FormControlLabel,
    IconButton,
    Switch,
    Toolbar,
    Tooltip,
    Typography,
    useTheme,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import clsx from 'clsx';
import useToolbarStyles from '../hook/useToolbarStyles';

const ToolbarDistinte = ({
    title,
    numSelected,
    onDeleteDistinta,
    dense,
    handleChangeDense,
}) => {
    const theme = useTheme();
    const classes = useToolbarStyles(theme);

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            {numSelected > 0 ? (
                <Typography
                    className={classes.title}
                    color='inherit'
                    variant='subtitle1'
                    component='div'
                >
                    {numSelected} elementi selezionati
                </Typography>
            ) : (
                <Typography
                    className={classes.title}
                    variant='h6'
                    id='tableTitle'
                    component='div'
                >
                    {title}
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title='Delete'>
                    <IconButton aria-label='delete' onClick={onDeleteDistinta}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                // <Tooltip title='Filter list'>
                //     <IconButton aria-label='filter list'>
                //         <FilterListIcon />
                //     </IconButton>
                // </Tooltip>
                dense && (
                    <FormControlLabel
                        control={
                            <Switch
                                checked={dense}
                                onChange={handleChangeDense}
                            />
                        }
                        label='Dense padding'
                    />
                )
            )}
        </Toolbar>
    );
};

export default ToolbarDistinte;
