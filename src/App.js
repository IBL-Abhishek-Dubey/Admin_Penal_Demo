import "./App.css";
import { Route, Switch } from "react-router-dom";
import Signup from "./Componets/GoogleAuth/Signup";
import ForgotPass from "./Componets/GoogleAuth/ForgotPass";
import HomeContainer from "./Container/HomeContainer";
import SignInContainer from "./Container/SignInContainer";
import AddUserContainer from "./Container/AddUserContainer";
import UserData from "./Componets/UserData";
import DataContainer from "./Container/DataContainer";
import UpdateUserContainer from "./Container/UpdateUserContainer";
import UpdateUser from "./Componets/UpdateUser";
import Sidebar from "./Componets/Sidebar";
import Navbar from "./Componets/Navbar";
import { userData } from "./Redux/Actions/Action";
import { connect } from "react-redux";
import DataTable from "./Componets/DataTable";

function App(props) {
  console.log("App js ", props);
  return (
    <div className="App">
      {props.data.userReducer.isLogined && (
        <Sidebar
          image={props.data.userReducer.users[0].profile}
          name={props.data.userReducer.users[0].name}
        />
      )}
      {props.data.userReducer.isLogined && <Navbar />}
      {/* <Sidebar image={props.data.userReducer.users.profile}
      name ={props.data.userReducer.users.name} /> */}
      {/* <Navbar /> */}
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route exact path="/" component={SignInContainer} />
        <Route exact path="/forgot" component={ForgotPass} />

        <Route exact path="/home" component={HomeContainer} />

        <Route exact path="/user-list/addUser" component={AddUserContainer} />

        <Route exact path="/user-list" component={DataContainer} />

        <Route exact path="/user-list/updateuser" component={UpdateUserContainer} />

        <Route exact path="/data-table" component={DataTable} />        
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state,
});

const mapDispatchToProps = (dispatch) => ({
  userData: (data) => dispatch(userData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
