import React from "react";
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import useStyles from './styles';

const Details: Function = (): JSX.Element => {
    const classes = useStyles();

    return (
        <Card>
            <CardHeader title="Expense tracker" subheader="Development by Giuliano Vigna" />
            <CardContent>
                <Typography align="center" variant="h5">Total balance $50</Typography>
                <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    {/* Info card */}
                    Try saying: add income for $100 in category salary for monday
                </Typography>
                <Divider />
                {/* form */}
            </CardContent>
            <CardContent className={classes.cartContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {/* List */}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Details