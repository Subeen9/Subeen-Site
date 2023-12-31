import React from "react";
export const Footer = ()=>{
    const time = new Date();
    const year = time.getFullYear();
    return(
        <>
        <footer>
        <p>Subin {year}</p>
        </footer>
        </>
    )
}