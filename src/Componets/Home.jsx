import React from "react";
import Card from "./Card";
import Dashbord from "./Dashbord";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Home(props) {
  console.log(props);
  return (
    <div>
      {/* <Sidebar image={props.data.userReducer.users.profile}
      name ={props.data.userReducer.users.name} /> */}
      {/* <Navbar /> */}
      <Dashbord />
      
    </div>
  );
}

export default Home;
