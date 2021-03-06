import * as React from "react";

import {makeStyles} from '@mui/styles';
import { Toolbar } from "@mui/material";
import Typography from '../../Atoms/Typography/Typography';
import Button from "../../Atoms/Button/Buttons";
import Stack from '@mui/material/Stack';
import Profile from '../../Molecules/Profile/Profile';
import { useNavigate } from 'react-router-dom';

 

export default function Header() {
	const navigate = useNavigate();
	const useStyles = makeStyles({
		
		RightOptions: {
		// 	textAlign:'right',
		// 	width:'50%',
		// 	height:'100%',
		// 	display: 'flex',
		// 	flexDirection:'row'
		},
		heading:{
			height:'100%'
		},
		ops:{
			width:'50%',
			height:'100%',
			padding:'20px',
			display:'flex',
			flexDirection:'row'

		},
		avatardiv:{
			width:'50%',
			height:'100%'
		},
		buttonspace:{
			padding:'10px',
			width:'50%',
			height:'100%'

		}
	
	  });
	
	  const classes = useStyles();

return (	
		<Toolbar>
			<div style={{display: "flex", justifyContent:"space-between", width: "100%", alignItems: "center"}}>
				<div className={classes.heading}>
				<Typography variant="h6" content='Checkout' />
				</div>
					<div className={classes.RightOptions}> 
					<Stack direction={'row'}  spacing={1}>

						<Button variant="contained" color="secondary"  disabled={false} size={"small"} onClick={() => navigate('/sell')}>SELL</Button>
						<Button variant="contained" color='primary'  disabled={false} size={"small"} onClick={() => navigate('/')}>BUY</Button>    

						<Profile />
					</Stack>
				</div>
			</div>
		</Toolbar>	
);
}
