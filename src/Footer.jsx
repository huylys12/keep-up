import React from "react";

const today = new Date();
const currentYear = today.getFullYear();

function Footer() {
    return (
        <footer>
            <p>Copyright ⓒ {currentYear}</p>
        </footer>
    )
}

export default Footer;