import React from 'react'
import './Header.css';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

function Header() {
    return (
        <div className='header'>
            <h1>I am a header</h1>
            <MenuSharpIcon />
            <img
                className='header__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/9/90/Logo_of_YouTube_%282013-2015%29.svg' alt='logo'
            />
            <input type="text" />
            <SearchSharpIcon />
            <VideoCallSharpIcon />
            <AppsSharpIcon />
            <NotificationsSharpIcon />
            <AccountCircleSharpIcon />

        </div>
    )
}

export default Header
