export default function Header2(){
    return(
        <header className="header header2">
            <div className="header2__logo">
                <a href="/link">STORE</a>
            </div>
            <div className="header2__collections-nav">
                <a href="/link">Link</a>
                <a href="/link">Link</a>
                <a href="/link">Link</a>
            </div>
            <div className="header2__collections-nav">
                <a href="/cart"><i className="fas fa-shopping-cart"></i></a>
                <a href="/user"><i className="fas fa-user"></i></a>
            </div>
        </header>
    )
}