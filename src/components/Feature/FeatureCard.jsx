function FeatureCard({icon, title, text}) {
    return (
        <div className="feature-card">
            <img src={icon} alt={title} />
            <h3>{title}</h3>
            <p>{text}</p>
            <span className="arrow">→</span>

        </div>
    );
}
export default FeatureCard;