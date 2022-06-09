import { Box, Link, Stack } from '@mui/material';
import React from 'react';
import Typography from '../../Atoms/Typography/Typography';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import FormatAlignJustifyIcon  from '@mui/icons-material/FormatAlignJustify'
import CryptoList from '../../Molecules/CryptoList/CryptoList';
import Wallet from '../../Molecules/myWallet/myWallet'

export default function Portfolio() {

  
  return (
    <Box border={'1px solid #E8E8F7'} width={'398px'} height={'805px'} padding='20px' >
      <Stack direction={'row'} spacing={2} justifyContent="space-between" alignItems="center" >
        <Typography variant={'subtitle 1'} content={'My portfolio'} />
        <div>          
          <DonutLargeIcon />
          <FormatAlignJustifyIcon color="primary" />
        </div>
      </Stack>
      <CryptoList />
      <Stack direction={"row"} padding={'20px'} border={'1px solid #E8E8F7'} justifyContent={"space-between"} margin={'5px'}>
        <Typography variant={'body 1'} content={'Total Balance'} styles={{ color: '#7D7D89' }} />
        <Typography variant={'body 1'} content={'$ 0.00'} />
      </Stack>
       <Wallet content={'$0.00'}/>
      
      <Stack direction='row' height={'100px'} padding={'30px'} justifyContent={'space-between'}>
        <Typography variant={'subtitle 1'} content={'Recent transactions'} />
        <Link href='#'>view all</Link>
        </Stack>
       
        <Stack direction="column"
  justifyContent="center" alignItems="center" spacing={2} >
        <div>
          <img src='/assets/transaction.jpeg' alt='transaction' width="200px" height={'100px'} />
        <Typography variant={'caption 2'} content={'You don’t own any crypto. Send yourself'} styles={{ color: '#7D7D89' }} />
        <Typography variant={'caption 2'} content={'some crypto to get started.'} styles={{ color: '#7D7D89' }}  />
        </div>
      </Stack>
    
    
    </Box>
  );
}