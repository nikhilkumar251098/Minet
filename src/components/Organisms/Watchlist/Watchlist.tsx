import React from "react";
import { Box, Stack, Divider } from '@mui/material'
import Typography from "../../Atoms/Typography/Typography";
import Button from "../../Atoms/Button/Buttons";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Editor from "../../Molecules/Editor/Editor";
export default function Watchlist() {
    return (
		<Box>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems='center' divider={<Divider orientation="vertical" sx={{padding:'5px'}} flexItem />} padding='5px'>			
			<Typography variant="subtitile1" content='Watchlist' />			
				
			<Stack direction={'row'} justifyContent={'space-between'} alignItems='center' width='100%' padding='5px'>				
				<Typography variant="caption1" content='Discover assets >' styles={{ color:'#0052FF'}}/>				
				<Stack direction='row' alignItems='center'>
					<Button variant="text" color="primary" children='EDIT' disabled={false} size={"small"}  />
					<EditOutlinedIcon fontSize="small" color="primary" />
				</Stack>					
			</Stack>
			<div>
				<Editor />
			</div>
		</Stack>	
		
	</Box>
    )

}