import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
// import unicornbikeImg from "./../assets/images/unicorncoin.jpg";
import image1 from "./../assets/images/image1.jpg";
import { Link } from "react-router-dom";
import auth from "../auth/auth-helper";
import ExpenseOverview from "./../expense/ExpenseOverview";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 800,
    margin: "auto",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(
      2
    )}px`,
    color: theme.palette.openTitle,
  },
  media: {
    minHeight: 440,
  },
  credit: {
    padding: 10,
    textAlign: "right",
    backgroundColor: "#ededed",
    borderBottom: "1px solid #d0d0d0",
    "& a": {
      color: "#4f83cc",
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      {auth.isAuthenticated() && <ExpenseOverview />}
      {!auth.isAuthenticated() && typeof window !== "undefined" && (
        <Card className={classes.card}>
          <Typography variant="h6" className={classes.title}>
            One Stop Solution For Savings
          </Typography>
          <CardMedia className={classes.media} image={image1} title="Savings" />
          {/* <Typography
            variant="body2"
            component="p"
            className={classes.credit}
            color="textSecondary"
          >
            Photo by{" "}
            <a
              href="https://www.instagram.com/adi007.ap/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aditya
            </a>
          </Typography> */}
          <CardContent>
            {/* <Typography variant="body1" component="p">
              {" "}
              <Link to="/signup">Sign up</Link>/{" "}
              <Link to="/signin">Sign in</Link>
            </Typography> */}
          </CardContent>
        </Card>
      )}
    </>
  );
}