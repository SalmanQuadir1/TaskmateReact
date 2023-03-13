import React, { useEffect, useState } from 'react'
import '../Styles/Header.css';

const Header = ({theme,setTheme}) => {
   
    return (
        <header className='shadow-lg bg-light border border-light mt-2 p-3'>
            <div className='logoimg mx-3'>
                <img src="/Bot.png" alt="" height={40} />
                <span className='logoName'>Taskmate</span>
            </div>
            <div className="themeSelector ">
                <span className="light bg-white" onClick={() => setTheme("light")}></span>
                <span className="medium bg-default " onClick={() => setTheme("medium")}></span>
                <span className="dark bg-dark" onClick={() => setTheme("dark")}></span>
                <span className="g1" onClick={() => setTheme("g1")}></span>
                <span className="g2" onClick={() => setTheme("g2")}></span>
                <span className="g3" onClick={() => setTheme("g3")}></span>
            </div>
        </header>

    )
}

export default Header