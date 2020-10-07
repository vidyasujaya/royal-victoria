import React from "react";
import { Image } from "react-bootstrap";
import Plan from "../assets/Plan.svg";
import CoalitionImage from "../assets/coalitionImage.svg";

export const Coalition = () => {
  return (
    <div>
      <h3>Our Coalition</h3>
      <h5>We are the Royal Vic for the Public Coalition</h5>
      <hr />
      <p>
        <b>
          The Royal Vic for the Public Coalition is a Montreal-wide coalition
          that advocates for the Royal Victoria hospital to remain devoted to
          the common good.
        </b>{" "}
        The site of the former Royal Victoria Hospital must remain in the public
        domain, be managed democratically and ecologically, and be used to serve
        urgent needs.
      </p>
      <p>
        <b>We oppose any attempt to privatize the site,</b> as has happened to
        many other hospitals, and major institutional and ecclesiastical sites
        close to the mountain, like the Children’s Hospital (sold off a cost of
        $25 million, when its property assessment was $47 million), the Chest
        Hospital (purchased by condo developers), as well as Marianopolis
        College, the Couvent d’Outremont, the Missionary Sisters of the
        Immaculate Conception, and the Shriners Hospital. Other publicly-owned
        sites in Montreal that have been sold off for private developers include
        the Radio-Canada site and the Peel-Bonaventure Basin site.
      </p>
      <p>
        The founding members of the Coalition are the Milton Parc Citizens’
        Committee, the Peter McGill Community Council, the Students’ Society of
        McGill University, the Yellow Door, and the Communauté Milton Parc.
      </p>
      <Image fluid src={CoalitionImage} />
    </div>
  );
};
