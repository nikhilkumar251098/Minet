import React from 'react';
import Typography from '../../Atoms/Typography/Typography';
import Button from '../../Atoms/Button/Buttons';
import {makeStyles} from '@mui/styles';
import { Stack } from '@mui/material';

const useStyles = makeStyles(
    {
    
    lined: {
        display: 'flex',        
        flexDirection:'column',
        justifyContent:'center',
        position:'relative',
        top:'20%',
        left:'20%',
        width:'50%'
    }, 
    textClass:{
        textAlign:'center'
    },
    imageDiv :{
        textAlign:'center'
    }
}
)    

export default function SellSuccessScreen() {
    const classes = useStyles();
    return (
        <div className={classes.lined}>
            <div className={classes.imageDiv}>
                <img src='/assets/success.jpeg' alt='success'/><br/>
            </div>
            <div className={classes.textClass}>
                <Typography variant="h4" content='0.0234510 BTC'/><br/>
                <Typography variant="body2" content='Sell is completed, please check your'/>
                <Typography variant="body2" content=' balance in your crypto wallet'/>
            </div>
            <div id="buttons-area">
                <Stack direction={'row'} spacing={2} justifyContent={'center'} alignItems={'center'} padding={'20px'}>
                    <Button variant="outlined" color='primary' disabled={false} size={'large'}>BUY CRYPTO</Button>
                    <Button variant="contained" color='primary'  disabled={false} size={'large'}>GO TO USD COIN</Button>
                </Stack>
            </div>
        </div>
    )
}