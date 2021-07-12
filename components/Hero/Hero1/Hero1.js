export default function Hero1() {
    return(
        <div className="hero hero1 hero1--aligned-left">
            <img src="https://images.pexels.com/photos/1480690/pexels-photo-1480690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="hero1__bg" />
            <div className="hero1__content-container">
                <div className="hero1__info">
                    <h1 className="hero1__title">Title</h1>
                    <p className="hero1__paragraph">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                    <a href="#" className="hero1__button">View More</a>
                </div>
            </div>
        </div>
    );
}