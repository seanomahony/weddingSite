import React from "react";
import "../styles.css"

const Directions = () => {
    return (
        <div>
            <center>
                <br />
                <h1 class="centeredBox" > Directions </h1>
                <br />
                <div class="flexLayout">
                    <div class="sideBox" id="leftalign">
                        <h2 >The Church</h2>
                        <br />
                        <iframe title="ChurchDirections" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2465.6762200981034!2d-8.318111284785626!3d51.83034489486085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x484483f3bccbe1b5%3A0x18a6858f83df0510!2sRingaskiddy%20Oratory!5e0!3m2!1sen!2sie!4v1652122050540!5m2!1sen!2sie" width="400" height="300"></iframe>
                        <p >
                            The Oratory, <br />Ringaskiddy,<br />Co. Cork,<br /> P43 YK22 <br /> Get Directions <a href="https://goo.gl/maps/beeEMimu2HA9yYRV6"> here </a>
                        </p>
                    </div>

                    <div class="sideBox" id="rightalign">
                        <h2 >The Roberts Cove Inn</h2>
                        <br />
                        <iframe title="RobertsCoveDirections" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2470.379167960292!2d-8.31540038478939!3d51.74438980116942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x484487b278a036ab%3A0x9f3fb9ce98a3c92b!2sThe%20Roberts%20Cove%20Inn!5e0!3m2!1sen!2sie!4v1652123379371!5m2!1sen!2sie" width="400" height="300"></iframe>
                        <p >
                            The Roberts Cove Inn <br />Robert's Cove,<br />Co. Cork,<br /> P17 XF86 <br /> Get Directions <a href="https://g.page/TheRobertsCoveInn?share"> here </a>
                        </p>
                    </div>
                </div>
            </center>
        </div >
    );
};

export default Directions;