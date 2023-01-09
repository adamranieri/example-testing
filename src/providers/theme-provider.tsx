import React, { useState } from "react";


export type Theme = {theme:"DARK" | "LIGHT"};
export type SetTheme = (app:Theme) => void;

const themeContext = React.createContext<[Theme,SetTheme]>([{theme:"LIGHT"},()=>({theme:"LIGHT"})]);


export default function ThemeProvider(props:{children:any}){
    const [theme,setTheme] = useState<Theme>({theme:"LIGHT"});
    
    return <>
    <hr />
        <themeContext.Provider value={[theme,setTheme]}>
            {props.children}
        </themeContext.Provider>
    <hr />
    </>
}