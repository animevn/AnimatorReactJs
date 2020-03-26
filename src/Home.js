import React, {useState} from "react";

function Home() {
  const [style, setStyle] = useState("");

  const handleAnimationEnd = ()=>{
    setStyle("");
  };


  return (
    <div className="container mt-5 ">
      <div className="container d-flex overflow-hidden">
        <img className={"col-xl-3 col-lg-4 col-md-5 col-sm-6 col-6 mx-auto " + style}
             src="/images/image.png" onAnimationEnd={handleAnimationEnd} alt="rleft">
        </img>
      </div>



    </div>
  )
}

export default Home;