
import { useEffect, useState, useContext } from "react";
import { GameContext } from "../Context/GameContext";

import Container from "@mui/material/Button";
import Typography from "@mui/material/Typography";


const FindCityDialog = () => {
  const { findCity } = useContext<any>(GameContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update window width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container
      style={{
        width: "auto",
        backgroundColor: "white",
        color: "black",
        borderRadius: "20px",
        boxShadow: "none",
        padding: "20px",

        maxWidth: "400px",
        textAlign: "center",
        position: "fixed",
        bottom: 20,
        left: `${windowWidth * 0.5 - 100}px`,
        zIndex: 100,
      }}
    >
      <Typography variant="body1">find </Typography>
      <Typography variant="body1" color="inherit" noWrap>
        &nbsp;
      </Typography>
      <Typography variant="h4" style={{ fontWeight: "bold", color: "green" }}>
        {findCity.name}
      </Typography>
    </Container>
  );
};

export default FindCityDialog;
