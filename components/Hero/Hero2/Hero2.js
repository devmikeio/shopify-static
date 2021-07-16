export default function Hero2() {
    return(
        <div className="hero hero2">
            <div className="hero2__collection1">
            <img src="https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="hero2__bg" />
                <div className="hero2__content-container">
                    <div className="hero2__info">
                        <a href="#" className="hero2__button">About</a>
                    </div>
                </div>
            </div>
            <div className="hero2__collection2">
                {/* <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F09%2F11%2Fgal-gadot-2000.jpg&q=85" className="hero2__bg" /> */}
                {/* <img src="https://c4.wallpaperflare.com/wallpaper/553/564/19/cyberpunk-amoled-dark-vertical-hd-wallpaper-preview.jpg" className="hero2__bg" /> */}
                {/* <img src="https://images.pexels.com/photos/1480690/pexels-photo-1480690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="hero2__bg" /> */}
                <img src="https://images.pexels.com/photos/2901581/pexels-photo-2901581.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="hero2__bg" />
                <div className="hero2__content-container">
                    <div className="hero2__info">
                        <a href="#" className="hero2__button">Store</a>
                    </div>
                </div>
            </div>
        </div>
    );
}