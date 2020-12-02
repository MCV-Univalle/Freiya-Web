import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles"; 

// core components
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/FondoLoginMorado.jpg";
import logo from "assets/img/LogoS.png";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <img 
                      src= {logo}
                      alt="Logo Freiya"
                    />
                  </CardHeader>
                  <CardBody>
                    <br /><br /><br />
                  </CardBody>
                  <p className={classes.divider}></p>
                  <CardFooter className={classes.cardFooter}>
                    <Button size="lg">Talleristas</Button>
                  </CardFooter>
                  <CardFooter className={classes.cardFooter}>
                    <Button color="info" size="lg">Estudiantes</Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
