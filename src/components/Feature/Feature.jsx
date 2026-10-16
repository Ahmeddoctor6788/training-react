import FeatureCard from "./FeatureCard";
import "./Feature.css";

import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/icon-2.png";
import icon3 from "../../assets/icon-3.png";
import icon4 from "../../assets/icon-4.png";
const featureS = [
    {id: 1, icon: icon1, title: "Maximum Performance", text: "Sample text. Click to select the Text Element." },
{id: 2, icon: icon2, title: "Fully Secure Data Centers", text: "Sample text. Click to select the Text Element."},
{id: 3, icon: icon3, title: "DDos Attack Prevention", text: "Sample text. Click to select the Text Element."},
{id: 4, icon: icon4, title: "Get Unmetered Bandwidth", text: "Sample text. Click to select the Text Element."},

];
function Feature() {
    return (
        <section className=" features">
            <h2>Pick your perfect web hosting plan</h2>
<div className="features-arrange">
    {featureS.map((f) => (
        <FeatureCard 
        key={f.id}
        icon={f.icon}
        title={f.title}
        text={f.text}
        />
    ))}
</div>
        </section>
    );
}
export default Feature;