import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
        <p>© {currentYear} NoteNest</p>
        </footer>
    );
    }

export default Footer;