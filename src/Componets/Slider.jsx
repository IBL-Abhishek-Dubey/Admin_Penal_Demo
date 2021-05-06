import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "./img1.jpeg";

function Slider() {
  return (

      //   <div
      //     className="card mt-4"
      //     style={{
      //       backgroundColor: "#FB9678",
      //       color: "white",
      //       borderRadius: "0px",
      //     }}
      //   >
      //     <div className="card-body">
      //       <Carousel controls={false} interval={3000} indicators={false}>
      //         <Carousel.Item>
      //           <h4
      //             style={{
      //               height: "110px",
      //               fontSize: "19px",
      //               fontWeight: "normal",
      //               width: "90%",
      //             }}
      //           >
      //             My Acting blown Your Mind and you also laugh at the moment
      //           </h4>
      //           <div class="d-flex">
      //             <span>
      //               <img
      //                 style={{ borderRadius: "50%" }}
      //                 src={img1}
      //                 alt="user"
      //                 width="50"
      //                 class="img-circle"
      //               />
      //             </span>
      //             <span style={{ marginLeft: "10px" }}>
      //               <h4
      //                 class="text-white"
      //                 style={{
      //                   fontSize: "18px",
      //                   marginBottom: "0px",
      //                   fontWeight: "normal",
      //                 }}
      //               >
      //                 Govinda
      //               </h4>
      //               <p class="text-white" style={{ fontSize: "15px" }}>
      //                 Actor
      //               </p>
      //             </span>
      //           </div>
      //         </Carousel.Item>
      //         <Carousel.Item>
      //           <h4
      //             style={{
      //               height: "110px",
      //               fontSize: "19px",
      //               fontWeight: "normal",
      //               width: "90%",
      //             }}
      //           >
      //             My Acting blown Your Mind and you also laugh at the moment
      //           </h4>
      //           <div class="d-flex no-block">
      //             <span>
      //               <img
      //                 style={{ borderRadius: "50%" }}
      //                 src={img1}
      //                 alt="user"
      //                 width="50"
      //                 class="img-circle"
      //               />
      //             </span>
      //             <span style={{ marginLeft: "10px" }}>
      //               <h4
      //                 class="text-white"
      //                 style={{
      //                   fontSize: "18px",
      //                   marginBottom: "0px",
      //                   fontWeight: "normal",
      //                 }}
      //               >
      //                 Govinda
      //               </h4>
      //               <p class="text-white" style={{ fontSize: "15px" }}>
      //                 Actor
      //               </p>
      //             </span>
      //           </div>
      //         </Carousel.Item>
             
      //         <Carousel.Item>
      //           <h4
      //             style={{
      //               height: "110px",
      //               fontSize: "19px",
      //               fontWeight: "normal",
      //               width: "90%",
      //             }}
      //           >
      //             My Acting blown Your Mind and you also laugh at the moment
      //           </h4>
      //           <div class="d-flex no-block">
      //             <span>
      //               <img
      //                 style={{ borderRadius: "50%" }}
      //                 src={img1}
      //                 alt="user"
      //                 width="50"
      //                 class="img-circle"
      //               />
      //             </span>
      //             <span style={{ marginLeft: "10px" }}>
      //               <h4
      //                 class="text-white"
      //                 style={{
      //                   fontSize: "18px",
      //                   marginBottom: "0px",
      //                   fontWeight: "normal",
      //                 }}
      //               >
      //                 Govinda
      //               </h4>
      //               <p class="text-white" style={{ fontSize: "15px" }}>
      //                 Actor
      //               </p>
      //             </span>
      //           </div>
      //         </Carousel.Item>
      //       </Carousel>
      //     </div>
      //   </div>
      // </div>


    <div
      class="card col-md-12 "
      style={{ backgroundColor: "#F39678", marginTop: "20px" }}
    >
      <div className="card-body">
        <Carousel indicators={false} controls={false}>
        <Carousel.Item>
            <span
              style={{
                fontFamily: "sans-serif",
                color: "white",
                fontSize: "18px",
                height: "1.125rem",
                fontWeight : "400"
              }}
            >
              My Acting blown Your Mind and you also  laugh at the moment
            </span>

            <div style={{ display: "flex" , marginTop : "80px"}}>
              <img
                src={img1}
                alt="user"
                width="70"
                style={{ borderRadius: "100%" }}
              />
              
                <div style={{ marginTop : "5px"}}><span style={{ color: "white" , marginLeft : "10px" }}>Govinda</span>
                <p style={{ color: "white" ,  marginLeft : "10px" }}>Actor</p></div>
            </div>

           
          </Carousel.Item>
          <Carousel.Item>
          <span
              style={{
                fontFamily: "sans-serif",
                color: "white",
                fontSize: "18px",
                height: "1.125rem",
                fontWeight : "400"
              }}
            >
              My Acting blown Your Mind and you also  laugh at the moment
            </span>

            <div style={{ display: "flex" , marginTop : "80px"}}>
              <img
                src={img1}
                alt="user"
                width="70"
                style={{ borderRadius: "100%" }}
              />
              
                <div style={{ marginTop : "5px"}}><span style={{ color: "white" , marginLeft : "10px" }}>Govinda</span>
                <p style={{ color: "white" ,  marginLeft : "10px" }}>Actor</p></div>
            </div>

          </Carousel.Item>
          <Carousel.Item>
          <span
              style={{
                fontFamily: "sans-serif",
                color: "white",
                fontSize: "18px",
                height: "1.125rem",
                fontWeight : "400"
              }}
            >
              My Acting blown Your Mind and you also laugh at the moment
            </span>

            <div style={{ display: "flex" , marginTop : "80px"}}>
              <img
                src={img1}
                alt="user"
                width="70"
                style={{ borderRadius: "100%" }}
              />
              
                <div style={{ marginTop : "5px"}}><span style={{ color: "white" , marginLeft : "10px" }}>Govinda</span>
                <p style={{ color: "white" ,  marginLeft : "10px" }}>Actor</p></div>
            </div>

          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Slider;
