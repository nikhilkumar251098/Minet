import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Portfolio from './Portfolio';



export default {
    title: 'Organisms/Portfolio',
    component: Portfolio
}  as ComponentMeta<typeof Portfolio>;

const Template : ComponentStory<typeof Portfolio> = (args)=><Portfolio />

  
  export const MyPortfolio = Template.bind({});
  MyPortfolio.args = {
    position: 'static',
    width: '710px',
    height: '152px',
    left: '0px',
    top: '990px'
    
  };