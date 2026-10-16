function InfoCard ({title, text, bg}) {
  
    return (
        <div className="info-card" >
            <h2>{title}</h2>
            <p>{text}</p>
            <button>Get Started</button>

        </div>
    );
}
export default InfoCard;