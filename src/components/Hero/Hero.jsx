import "./Hero.css"
import heroImg from "../../assets/heroImg.png";


function Hero() {
    return (
        <section className="hero">
            <div className="hero-text">
                <p className="offer">  Don't miss limited-time savings: Savings 20%</p>
                <h1>Everything for Your Site to Succeed</h1>
                <a href="#" className="credit">Image from Freepik</a>
                <div className="cta">
                    <button className="btn">Get Stared</button>
                    <p className="price">Starting at only <span>$4.75/mo*</span></p>
                </div>

            </div>
            <img className="hero-img" src={heroImg} alt="Hosting illustration" />

        </section>
    )
}
export default Hero;