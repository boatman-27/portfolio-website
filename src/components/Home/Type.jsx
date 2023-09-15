import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Passionate Blockchain Enthusiast",
              "Effective Problem Solver",
              "Crtical Thinker",
              "Developer",
              "Embedded Systems Enthusiast",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type