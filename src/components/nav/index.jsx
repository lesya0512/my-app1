import './style.css'

function Nav({links}) {
    return ( 
        <nav>
            <ul>
                {
                    links.map((link)=>{
                        return <li><a href="#">{link}</a></li>
                    })
                }
            </ul>
        </nav>
    );
}

export default Nav;