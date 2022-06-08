import theme from "./Theme";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "emotion-theming";
import './constant.css'
import React from "react";

type CustomThemeProviderProps ={
    children:React.ReactNode
}
export default function CustomThemeProvider(props:CustomThemeProviderProps) {
    return (
        <MUIThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </MUIThemeProvider>
    )
}