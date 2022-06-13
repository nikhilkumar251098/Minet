import React from 'react';
import {Avatar} from '@mui/material';

const avatar  = (props: any) => {
    return(        
        <Avatar alt="user" sx={{width:props.width , height:props.height}} />        
    );
}
export default avatar;