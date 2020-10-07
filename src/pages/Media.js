import React from "react";
import { Image } from "react-bootstrap";
import MediaImageOne from "../assets/mediaImageOne.svg";

export const Media = () => {
  return (
    <div>
      <h3>Media</h3>
      <hr />
      <p>
        <u>
          <a href="https://petermcgill.org/en/manifestation-royal-vic-journalisme/">
            Read
          </a>
        </u>{" "}
        the citizen journalism piece written by Philippe Fines, resident of
        Peter-McGill.
      </p>
      <Image fluid src={MediaImageOne} />
      <br />
      <br />
      <p>Contact us to keep informed of future events or to get involved!</p>
    </div>
  );
};
