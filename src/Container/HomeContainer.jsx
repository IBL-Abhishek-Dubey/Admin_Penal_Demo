import { logOut, userData } from "../Redux/Actions/Action"
import {connect} from "react-redux";
import Home from "../Componets/Home";




const mapStateToProps = (state) =>({
    data : state
})

const mapDispatchToProps = (dispatch) =>({
    userData : (data) => dispatch(userData(data)),
    logOut : (data) => dispatch(logOut(data))
})

export default connect(mapStateToProps , mapDispatchToProps)(Home)