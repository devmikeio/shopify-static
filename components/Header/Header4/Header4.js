import AnnounceBar from "../../AnnounceBar/AnnounceBar"
export default function Header4(){
    return(
        <>
            <AnnounceBar />
            <header className="header header4">
                <div className="header4__logo">
                    <a href="/link">Company</a>
                </div>
                <div className="header4__collections-nav">
                    <a href="/link">Link</a>
                    <a href="/link">Link</a>
                    <a href="/link">Link</a>
                    <a href="/cart"><i className="fas fa-shopping-cart"></i></a>
                    <a href="/user"><i className="fas fa-user"></i></a>
                </div>
            </header>
        </>
    )
}