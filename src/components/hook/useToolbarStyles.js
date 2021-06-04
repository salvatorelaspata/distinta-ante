import { lighten, makeStyles } from '@material-ui/core';

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                  color: theme.palette.text.primary,
                  backgroundColor: lighten('#7DB3FF', 0.85),
              }
            : {
                  color: theme.palette.text.primary,
                  backgroundColor: '#7DB3FF',
              },
    title: {
        flex: '1 1 100%',
    },
}));

export default useToolbarStyles;
