import React, { useEffect, useState } from 'react'
import '../Styles/Header.css';

const Header = ({ theme, setTheme }) => {

    return (
        <>
            <header className='shadow-lg bg-light border border-light mt-2 p-3'>
                <div className='logoimg mx-3'>
                    <img src="/Bot.png" alt="" height={40} />
                    <span className='logoName'>Taskmate</span>
                </div>
                <div className="themeSelector ">
                    <span className={theme === 'light' ? 'light activeTheme' : 'light'} onClick={() => setTheme("light")}></span>
                    <span className={theme === 'medium' ? 'medium activeTheme' : 'medium'} onClick={() => setTheme("medium")}></span>
                    <span className={theme === 'dark' ? 'dark activeTheme' : 'dark'} onClick={() => setTheme("dark")}></span>
                    <span className={theme === 'g1' ? 'g1 activeTheme' : 'g1'} onClick={() => setTheme("g1")}></span>
                    <span className={theme === 'g2' ? 'g2 activeTheme' : 'g2'} onClick={() => setTheme("g2")}></span>
                    <span className={theme === 'g3' ? 'g3 activeTheme' : 'g3'} onClick={() => setTheme("g3")}></span>
                </div>
            </header>
        </>
    )
}

export default Header