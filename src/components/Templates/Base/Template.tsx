import React from 'react';
import './Style.css';
import Header from '../../Organisms/Header/Header';
import Navs from '../../Organisms/Nav-Bars/NavBarLoad';
import Footer from '../../Organisms/Footer/Footer';
import { Stack } from '@mui/material';

export default function Template(props: any) {
    
    return(
        
        <Stack direction={'row'} spacing={2} >
            <Navs width={'44px'} height={'22px'} size={'large'} />
            <Stack direction={'column'} spacing={'4'} justifyContent={'space-between'} alignItems={'center'} >
                <div style= {{ position: "relative",width: "calc(100vw - 68px)", minHeight:"calc(100vh - 16px)" }}>
                    <div className='header-footer'>
                        <Header />
                    </div>     
                    <div id='content-wrap'>
                        {props.children}
                    </div>
                    <div className='header-footer'>
                        <Footer />
                    </div>
                </div>
            </Stack>
        </Stack>
    );
}