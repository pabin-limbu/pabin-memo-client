import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import useStyles from "./styles";
import memories from "../../images/memories.png";
import Posts from "../../components/Posts/Posts";
import Form from "../../components/Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";

import Header from "../../components/Header";
function HomePage() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    console.log("reNDERING");
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <Container maxWidth="lg">
        <Header></Header>
        {user.authenticate ? (
          <div>
            <p>loged in</p>
          </div>
        ) : (
          <div>
            <p>Not logged in</p>
          </div>
        )}

        <Grow in>
          <Grid
            className={classes.mainContainer}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
            mt={4}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Grow>
      </Container>
    </>
  );
}

export default HomePage;
