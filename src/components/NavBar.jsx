import React from 'react'
import { useSelector } from 'react-redux'

export const NavBar = () => {
    const count = useSelector((state) => state.count)

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div className="logo">
                APACHE
            </div>
            <nav>
                <ul style={{display: 'flex', listStyle: 'none', gap: '10px'}}>
                    <li>home</li>
                    <li>contacts</li>
                    <li>page</li>
                </ul>
            </nav>
            <div style={{fontSize: '42px', fontWeight: 'bold', color: 'red'}}>
                {count}
            </div>
        </div>
    )
}
