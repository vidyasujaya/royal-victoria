import React from "react";
import { Image } from "react-bootstrap";
import Plan from "../assets/Plan.svg";
import Site from "../assets/Site.svg";

export const Background = () => {
  return (
    <div>
      <h3>Our Coalition</h3>
      <h5>We are the Royal Vic for the Public Coalition</h5>
      <hr />
      <p>
        {"  "}In 2015, health services moved out of the Royal-Victoria Hospital
        and into the new super-hospital at the Glen. Three years later, in 2018,
        the Quebec government announced authorization of McGill University to
        explore using half of the pavilions (pavilions L, M, S, A, and E) to
        develop a new campus by 2027. The government subsequently granted McGill
        $37m to fund a study on the feasibility of developing on the site. The
        Royal Victoria’s Ross Pavilion is{" "}
        <u>
          <a href="https://globalnews.ca/news/7297763/old-royal-victoria-hospital-montreal-homeless/">
            currently
          </a>
        </u>{" "}
        being used as a temporary 24/7 shelter resource for the homeless. 150
        beds having been installed.
      </p>
      <p>
        {"  "}The government has mandated the Société québécoise des
        infrastructures (SQI), the provincial agency that manages provincially
        owned property,
        <u>
          <a href="https://www.sqi.gouv.qc.ca/gestionprojets/Pages/RoyalVictoria-presentation.aspx">
            to do a master plan
          </a>
        </u>{" "}
        for the future use of the whole site (including for the pavilions not
        proposed as a McGill campus, H, R, F, C, X, and eventually the Allan
        Memorial Institute). In its consultations, the SQI met with 200 members
        of the Institut de développement urbain du Québec (IDU). The IDU
        proposed capitalist projects like for-profit hotels, luxury apartments,
        bars, and restaurants for the site. The SQI has also met with member
        groups of this coalition.
      </p>
      <p>
        {"  "}The SQI will issue proposals to the Conseil du Trésor of the
        provincial government. The Conseil du Trésor will ultimately make
        decisions about the future of the site.
      </p>
      <Image
        fluid
        src={Site}
        alt="Site McGill sur le site de l'Hôpital Royal Victoria"
      />
      <br />
      <br />
      <Image fluid src={Plan} alt="Plan" />
      <br />
      <br />
      <p>
        {"  "}So what will this process mean for the public? McGill University
        will likely acquire half of the pavilions for a campus. The coalition is
        not opposed to McGill using part of the site for a campus, but we insist
        that ownership remains in the public domain and is safeguarded from any
        privatization.
      </p>
      <p>
        {"  "}Regarding the Royal Victoria Hospital’s other pavilions, their
        future is uncertain. Although the original founders of the hospital
        wisely stipulated in the deed of transfer that the site must be used for
        healing, there is no guarantee that this provision is still legally
        binding. Certainly, none of{" "}
        <u>
          <a href="https://www.sqi.gouv.qc.ca/gestionprojets/Pages/Projet-Royal-Victoria---Processus.aspx">
            the principles directing the SQI’s planning process
          </a>
        </u>{" "}
        prioritize social uses of the site.
      </p>
      <p>
        {"  "}As mentioned above, the SQI has held consultative meetings with
        stakeholder groups and guided visits of the site. However, it is not
        truly a public consultation (the Office de consultation publique de
        Montréal will do a consultation in 2021). The coalition has launched a
        study with the Community-University Research Exchange (CURE) to address
        these deficits in the SQI’s approach.
      </p>
      <p>
        {"  "}For more documentation on the SQI’s planning process, see their{" "}
        <u>
          <a href="https://www.sqi.gouv.qc.ca/gestionprojets/Pages/Projet-Royal-Victoria---Documentation.aspx">
            webpage
          </a>
        </u>{" "}
        on the Royal Vic.
      </p>
    </div>
  );
};
