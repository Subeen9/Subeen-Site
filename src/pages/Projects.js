import React from "react";
import styled from "@emotion/styled";
import {
  Divider,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import SeluStore from "../assests/selu4.png";
import NoteKeeper from "../assests/NoteKeeper.png";
import UserAuth from "../assests/UserAuth.png";
import Nsas from "../assests/siteselu.png";
import DipikaSite from "../assests/dipika.png";
import BinaryTree from "../assests/Binary Tree.png";
import "../App.css";
const CustomDivider = styled(Divider)({
  width: "4%",
  margin: "auto",
  fontWeight: "bolder",
  borderBottomColor: "#191970",
  borderBottomWidth: "5px",
});
export const ProjectCard = ({ image, alt, title, text, link }) => {
  return (
    <Card
      sx={{ maxWidth: 300, margin: "auto", marginTop: "40px" }}
      className="card"
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          width="130"
          image={image}
          alt={alt}
          sx={{
            objectFit: "cover",
            width: "100%",
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
          }}


        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => (window.location.href = link)}>
            Learn More
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
export const Projects = ({dark}) => {
  return (
    <>
      <div id="projects" style={{backgroundColor: dark?'#121212':'#F5F5F5'}}> 
        <h1 style={{ textAlign: "center", color:dark?'white':'black' }}>Projects</h1>
        <CustomDivider />
        <Grid container spacing={2}>
          <Grid item xs={12}sm={4}>
            <ProjectCard
              image={SeluStore}
              alt="Selu Thrift store"
              title="Selu Thrift Store"
              text="A full-stack application designed for Selu Thrift Store, facilitating seamless buying and selling of goods at affordable prices"
              link="https://github.com/Subeen9/CMPS-285-Fall-23-Thrift-Store-"
            />
          </Grid>
          <Grid item xs={12}sm={4}>
            <ProjectCard
              image={NoteKeeper}
              alt="Note App"
              title=" Note Keeper App"
              text="This is a Note-Keeper app that allows you to add a note and then you will be able to see the note on the app made with Firebase and React"
              link="https://mynotes-47f36.web.app/home"
            />
          </Grid>
          <Grid item xs={12}sm={4}>
            <ProjectCard
              image={UserAuth}
              alt="User Auth image"
              title="User Authentication App"
              text="This is a user authentication app that is build using React js and firbase for the management of user and authentication."
              link="https://auth-development-57f34.web.app/"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}sm={4}>
            <ProjectCard
              image={Nsas}
              alt="Nsas site"
              title="NSAS Site"
              text="This is a Nepalese Student Association at Southeastern Site developed in collaboration with my friend and under guidance of Senior Brother "
              link="https://selu-nsas.vercel.app/"
            />
          </Grid>
          <Grid item xs={12}sm={4}>
            <ProjectCard
              image={DipikaSite}
              alt="Dipika site"
              title="Dipika Artistry"
              text="This is a  eccomerce site  developed for one of our client  in collaboration with my friend and under guidance of Senior Brother "
              link="https://artbydipika-dg.web.app/"
            />
          </Grid>
          <Grid item xs={12}sm={4}>
            <ProjectCard
              image={BinaryTree}
              alt="Binary Tree"
              title="Tree Vs Bubble Sort"
              text="This Java program provides a comparison between a binary tree traversal algorithm and bubble sort including the number of comparisons made during their execution."
              link="https://github.com/Subeen9/Tree-Vs-Bubble-Sort"
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
