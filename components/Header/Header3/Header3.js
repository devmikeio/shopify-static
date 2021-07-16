export default function Header3(){
    return(
        <header className="header header3">
            <div className="header3__info">
                <img src="https://www.thrasio.com/wp-content/uploads/2020/06/thrasio_white_trans.png" alt=""/>
            </div>
            <div className="header3__collections-nav">
                <a href="/link">SHOP</a>
                <a href="/link">BLOG</a>
                <a href="/link">FAQ</a>
                <a href="/cart"><i className="fas fa-shopping-cart"></i></a>
                <a href="/user"><i className="fas fa-user"></i></a>
            </div>
        </header>
    )
}