import './style.css'

function Header( {img, name} ) {
    return ( 
        <header>
            <div className="img">
                <img src={img} alt="image" />
            </div>
            <div className="name">
                <h1>{name}</h1>
            </div>
        </header>
    );
}

export default Header;