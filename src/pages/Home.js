import React from "react";
import { Image } from "react-bootstrap";
import { NavBar } from "../components/NavBar2";
import ChristaLogo from "../assets/ChristaLogo.svg";

export const Home = () => {
  return (
    <div>
      <Image fluid className="imgwidth" src={ChristaLogo}></Image>
      <h3>Our Coalition</h3>
      <hr />
      <p>
        <b>
          We are a Montreal-wide coalition that advocates for the Royal Victoria
          hospital to remain devoted to the common good.
        </b>{" "}
        The site of the hospital must remain in the public domain, be managed
        democratically and ecologically, and be used to serve urgent needs in
        our communities.
      </p>
      <h3>Background</h3>
      <hr />
      <p>
        The provincial government has mandated the Société Québécoise des
        Infrastructures (SQI) to conduct a master plan on the future use of the
        Royal Victoria Hospital. They have authorized McGill University to
        explore using a portion of the pavilions as a campus.
      </p>
      <h3>Our Initiatives</h3>
      <hr />
      <h6>Our March</h6>
      <p>
        In the middle of the pandemic, the coalition organized a march on
        September 4th, 2020. There were families, speeches, politicians, media,
        and even a choir!
      </p>
      <h6>Our Open Letter</h6>
      <p>
        In the middle of the pandemic, the coalition organized a march on
        September 4th, 2020. There were families, speeches, politicians, media,
        and even a choir!
      </p>
      <h6>Consultation {"&"} Research</h6>
      <p>
        We are studying and consulting to explore community uses for the site of
        the former Royal Victoria Hospital.
      </p>
      <h3>Resources</h3>
      <p>
        If you want to find out more, there is lots of useful documentation!
      </p>
      <hr />
      <h3>Media</h3>
      <p>
        Click here for news reports, photos, and videos about the hospital and
        our coalition.
      </p>
      <hr />
      <h3>Connect With Us</h3>
      <p>Contact us to keep in the loop and get involved!</p>
    </div>
  );
};
