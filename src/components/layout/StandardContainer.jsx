import { Container, Grid, useTheme } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../hook/useStyles';

const StandardContainer = ({ children }) => {
     const theme = useTheme();
     const classes = useStyles(theme);
     return (
          <div>
               <Container maxWidth='lg' className={classes.container}>
                    <Grid container spacing={3}>
                         {children}
                    </Grid>
               </Container>
          </div>
     );
};

export default StandardContainer;
