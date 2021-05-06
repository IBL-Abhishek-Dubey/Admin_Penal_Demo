import AddUser from "../Componets/AddUser"
import { connect } from "react-redux";
import { addData } from "../Redux/Actions/Action"


const mapStateToprops = (state) => ({
    data : state
})


const mapDispatchToProps = (dispatch) => {
    return{
        addData : (data) => dispatch(addData(data))
    }
}

export default connect(mapStateToprops , mapDispatchToProps)(AddUser)

// export default AddAuther