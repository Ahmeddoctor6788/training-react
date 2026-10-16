import InfoCard from "./Infocard";
import "./Info.css"

function AboutSection() {
    return(
        <section className="about-section">
            <InfoCard
            title="20+ Years Experience"
            text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"

           
            />
            <InfoCard
            title="Who We Are"

            text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"

           
            />
        </section>
    );
}
export default AboutSection;