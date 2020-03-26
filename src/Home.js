import React, {useState} from "react";

function Home() {
  const card = {front:"/images/image.png", back:"/images/back.png"};
  const [style, setStyle] = useState("");
  const [onAnim, setOnAnim] = useState(false);
  const [cardState, setCardState] = useState(true);
  const [animStyle, setAnimStyle] = useState("");

  function handleAnimEnd(){
    if (onAnim){
      setOnAnim(!onAnim);
      setCardState(old=>!old);
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
    <div className="container mt-5 ">
      <div className="container d-flex overflow-hidden p-5 perspective">
        <img className={"col-xl-3 col-lg-4 col-md-5 col-sm-6 col-6 mx-auto " + style}
             src={cardState? card.front : card.back}  onAnimationEnd={handleAnimEnd} alt="rleft">
        </img>
      </div>

      <div className="container col-xl-5 col-lg-6 col-md-8 col-sm-10 col-10">

        <div className="container mt-5">
          <div className="row d-flex justify-content-around">
            <button className="btn btn-outline-success" onClick={handleRotate}>
              Rotate
            </button>

            <button className="btn btn-outline-success" onClick={flipLeft}>
              Flip Left
            </button>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row d-flex justify-content-around">
            <button className="btn btn-outline-success" onClick={handleFade}>
              Fade
            </button>

            <button className="btn btn-outline-success" onClick={flipRight}>
              Flip Right
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home;