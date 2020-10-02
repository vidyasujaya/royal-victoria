import React from "react";
import { Image } from "react-bootstrap";
import Plan from "../assets/Plan.svg";
import Site from "../assets/Site.svg";

export const Coalition = () => {
  return (
    <div>
      <h3>Our Coalition</h3>
      <h5>We are the Royal Vic for the Public Coalition</h5>
      <hr />
      <p>
        <b>
          The Royal Vic for the Public Coalition is a Montreal-wide coalition to
          advocate for the hospital to always be devoted to the common good,
        </b>{" "}
        in accordance with the founders’ wishes recorded in the original deed of
        transfer. The site of the former Royal Victoria Hospital must remain in
        the public domain, be managed democratically and ecologically, and be
        used to serve urgent needs .
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
        So what does this mean for us? McGill University will probably
        eventually acquire half of the pavilions for a campus. We are not
        opposed to McGill using part of the site for a campus, as long as the
        ownership remains in the public domain and is safeguarded from any
        privatization.
      </p>
      <p>
        Regarding the other half of the pavilions, their future is uncertain.
        Although the original founders of the hospital wisely included in the
        deed of transfer that the site must always be used for healing, there is
        no guarantee that this is still legally binding and none of the
        principles directing the SQI’s planning process prioritize social uses
        of the site. The SQI’s planning process does have a participatory
        element, including consultative meetings with stakeholder groups and
        guided visits of the site, although it is not truly a public
        consultation (the Office de consultation publique de Montréal will do a
        consultation in 2021). There is also an openness for transitory
        occupations of the site, to test out different uses for the site as part
        of a process of developing permanent uses. This could be an opportunity
        for the population and community organizations to propose innovative
        social uses of different pavilions. But we also have to be careful of
        attempts to privatize the site such as for condos, private healthcare or
        elderly care, bars, restaurants, and hotels.
      </p>
      <p>
        For more documentation on the SQI’s planning process, see the page on
        the Royal Vic on their website.
      </p>
    </div>
  );
};
