import React from 'react';
import { Container, Grid, Paper, useTheme } from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from '../components/hook/useStyles';

const Dashboard = () => {
     const theme = useTheme();
     const classes = useStyles(theme);
     const fixedHeightPaper = clsx(classes.paper);
     return (
          <div>
               <Container maxWidth='lg' className={classes.container}>
                    <Grid container spacing={3}>
                         {/* Chart */}
                         <Grid item xs={12} md={8} lg={9}>
                              <Paper className={fixedHeightPaper}>
                                   Chart
                                   {/* <Chart /> */}
                              </Paper>
                         </Grid>
                         {/* Recent Deposits */}
                         <Grid item xs={12} md={4} lg={3}>
                              <Paper className={fixedHeightPaper}>
                                   Graph
                                   {/* <Deposits /> */}
                              </Paper>
                         </Grid>
                         {/* Recent Orders */}
                         <Grid item xs={12}>
                              <Paper className={classes.paper}>
                                   Recent
                                   {/* <Orders /> */}
                              </Paper>
                         </Grid>
                    </Grid>
               </Container>
          </div>
     );
};

export default Dashboard;
