import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import "./Home.css";

function Home() {
  const width = {xs:10, sm:8, md:6, lg:4, xl:4};
  const card = {front:"/images/image.png", back:"/images/back.png"};
  const [style, setStyle] = useState("");
  const [onAnim, setOnAnim] = useState(false);
  const [cardState, setCardState] = useState(true);
  const [animStyle, setAnimStyle] = useState("");

  function handleAnimEnd(){
    if (onAnim){
      setOnAnim(!onAnim);
      setCardState(old=>!old);
      // eslint-disable-next-line
      switch (animStyle) {
        case "rotate":
          setStyle("rotate-anim-last");
          setAnimStyle("");
          break;
        case "fade":
          setStyle("fade-anim-last");
          setAnimStyle("");
          break;
        case "flip-left":
          setStyle("flip-left-last");
          setAnimStyle("");
          break;
        case "flip-right":
          setStyle("flip-right-last");
          setAnimStyle("");
          break;
      }
    }else {
      setStyle("");
    }
  }

  function handleRotate() {
    setOnAnim(!onAnim);
    setAnimStyle("rotate");
    setStyle("rotate-anim-first");
  }

  function handleFade() {
    setOnAnim(!onAnim);
    setAnimStyle("fade");
    setStyle("fade-anim-first");
  }

  function flipLeft() {
    setOnAnim(!onAnim);
    setAnimStyle("flip-left");
    setStyle("flip-left-first")
  }

  function flipRight() {
    setOnAnim(!onAnim);
    setAnimStyle("flip-right");
    setStyle("flip-right-first")
  }

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item {...width}>
        <Box display="flex" flexDirection="row" justifyContent="center" py={5}
             style={{"perspective":"1000px"}}>
          <img className={style} style={{"width":"50%"}}
               src={cardState? card.front : card.back}  onAnimationEnd={handleAnimEnd} alt="rleft">
          </img>
        </Box>

        <Box display="flex" flexDirection="column" justifyContent="space-around" py={5} my={5}>

          <Box display="flex" flexDirection="row" justifyContent="space-around" pb={3}>
            <Button variant="contained" color="primary" style={{"width":"9rem"}}
                    onClick={handleRotate}>
              Rotate
            </Button>

            <Button variant="contained" color="primary" style={{"width":"9rem"}}
                    onClick={flipLeft}>
              Flip Left
            </Button>
          </Box>

          <Box display="flex" flexDirection="row" justifyContent="space-around" pb={3}>
            <Button variant="contained" color="primary" style={{"width":"9rem"}}
                    onClick={handleFade}>
              Fade
            </Button>

            <Button variant="contained" color="primary" style={{"width":"9rem"}}
                    onClick={flipRight}>
              Flip Right
            </Button>
          </Box>

        </Box>

      </Grid>
    </Grid>
  )
}

export default Home;