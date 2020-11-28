import React, { FC, useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, Grid, Button, Paper, CardActions } from '@material-ui/core';

const Counter: FC = () => {
    
    const [count, setCount] = useState(0);
    const decrement = () => setCount((count) => count - 1);
    const increment = () => setCount((count) => count + 1);

    const style = {
        width: '5em',
        height: '5em',
        textAlign: 'center',
    } as React.CSSProperties;

    return (
        <Card>
            <CardHeader 
                title="Counter"
            />
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item md={3} container justify="center">
                        <Button variant="contained" color="primary" onClick={decrement}>
                            -1
                        </Button>
                    </Grid>
                    <Grid item md={6} container justify="center">
                        <Paper style={style}>
                            <h1>{count}</h1>
                        </Paper>
                    </Grid>
                    <Grid item md={3} container justify="center">
                        <Button variant="contained" color="secondary" onClick={increment}>
                            +1
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default Counter;