import supportImg from "../../assets/support.png";
import "./Support.css";

function Support() {
    return(
        <section className="support">
            <div className="support-container">
                <div className="support-image">
                    <img src={supportImg} alt={"supporting"} />

                </div>
                <div className="support-content">
                    <h2 className="support-title">24/7/365
                        <br />
                        Support
                    </h2>
                    <p className="support-text">
                        Sample text. Click to select the Text Element. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


                    </p>
                     <button className="support-btn">Get Started</button>
                </div>

            </div>
        </section>
    );
}
export default Support;