import { userData } from "../Redux/Actions/Action"
import {connect} from "react-redux";
import SignIn from "../Componets/GoogleAuth/SignIn";




const mapStateToProps = (state) =>({
    data : state
})

const mapDispatchToProps = (dispatch) =>({
    userData : (data) => dispatch(userData(data))
})

export default connect(mapStateToProps , mapDispatchToProps)(SignIn)