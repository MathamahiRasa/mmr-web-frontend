import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { useStyles } from "./AboutStyles/AboutStyles";

// Dummy images
const dummyImage1 = "https://via.placeholder.com/300";
const dummyImage2 = "https://via.placeholder.com/300";

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Box className={classes.heading}>
          <Typography variant="h4" className={classes.text}>
            Mee-Maw’s Magic
          </Typography>
        </Box>
        <Box className={classes.section}>
          <Typography variant="body1" className={classes.text}>
            As an IT professional, I was on a relentless quest to find something
            that truly excites me, something that would make me leap out of bed
            each morning with excitement. Then one day, while chatting with my
            amazing Mee-Maw, she whipped up the spiciest, most delicious podi
            using a secret family recipe that's been passed down for 100 years.
            BAM! It was like a lightning bolt struck me! It was like a culinary
            epiphany hit me straight between the eyes! The kitchen, a place I’d
            previously treated like uncharted territory, suddenly transformed
            into a wonderland of flavors and possibilities.
          </Typography>
          <img
            src={dummyImage2}
            alt="Podi Power Duo"
            className={classes.image}
          />
        </Box>
        <Box className={classes.heading}>
          <Typography variant="h4" className={classes.text}>
            Podi Power Duo
          </Typography>
        </Box>
        <Box className={classes.section}>
          <Typography variant="body1" className={classes.text}>
            With Mee-Maw’s ancient culinary wizardry and my tech-savvy skills,
            we’ve formed an unstoppable dream team to create a range of podis
            that are 100% natural, pure, and packed with an extra dose of love
            and happiness. Imagine me as the flashy, tech-savvy frontman and
            Mee-Maw as the mystical, culinary wizard behind the curtain.
            Together, we’re an unstoppable duo on a mission to revolutionize
            your dining experience! And to blow your taste buds out of the
            water!
          </Typography>
          <img
            src={dummyImage2}
            alt="Mee-Maw’s Magic"
            className={classes.image}
          />
        </Box>
        <Box className={classes.heading}>
          <Typography variant="h4" className={classes.text}>
            Mission
          </Typography>
        </Box>
        <Box className={classes.section}>
          <Typography variant="body1" className={classes.text}>
            Our goal? To bring the magic of our extraordinary podis to every
            dining table, from cozy family homes to rowdy hostels, from student
            dorms to backpacks of thrill-seeking travelers on the go. Picture
            this: your favorite comfort food, now turbocharged with a fiery kick
            that makes every meal a celebration. The possibilities are
            limitless, folks!
          </Typography>
          <img
            src={dummyImage1}
            alt="Mee-Maw’s Magic"
            className={classes.image}
          />
        </Box>
        <Box className={classes.heading}>
          <Typography variant="h4" className={classes.text}>
            The New Beginnings...
          </Typography>
        </Box>
        <Box className={classes.section}>
          <Typography variant="body1" className={classes.text}>
            We’re on a roll, and we’re just getting started. Whether you’re a
            busy professional, a homesick student or an intrepid explorer
            craving a taste of home, our podis are here to spice up your life.
            So buckle up, because we’re about to take your taste buds on the
            wildest, most flavorful ride they've ever been on. Let’s bring the
            heat to every table, one podi at a time!
          </Typography>
          <img
            src={dummyImage2}
            alt="Mee-Maw’s Magic"
            className={classes.image}
          />
        </Box>
      </Container>
    </div>
  );
};

export default About;
