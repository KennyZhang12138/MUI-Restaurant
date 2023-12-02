import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box>
        <Typography variant="h4">Welcome to my restaurant</Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
          culpa quam in possimus ad velit dolores necessitatibus atque,
          doloremque porro earum dicta ipsa incidunt labore quo! Incidunt cumque
          facere optio.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
