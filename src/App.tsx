import React from 'react';
import { Grid } from '@material-ui/core';

import Details from './components/Details/Details';
import useStyles from './styles';

const App: Function = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={0} alignItems="center" justify="center" style={classes.grid}>
        <Grid>
          
        </Grid>
      </Grid>
    </div>
  )
}

export default App;