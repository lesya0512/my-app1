import './style.css'

function Footer({text, date}) {
    return ( 
        <footer>
            <p>{text} <br /> {date}</p>
        </footer>
     );
}

export default Footer;