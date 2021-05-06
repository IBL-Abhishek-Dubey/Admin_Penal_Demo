import UserData  from "../Componets/UserData"
import { connect } from "react-redux";
import { remove , updateData } from "../Redux/Actions/Action"
// import { updateData , remove } from "../Services/Actions/Action";

// import { addData } from "../Services/Actions/Action"

const mapStateToProps = (state) =>({
    data : state
})

const mapDispatchToProps = (dispatch) => ({
    remove : (index) => dispatch(remove(index)),
    updateData : (id ) => dispatch(updateData(id))
});

export default connect(mapStateToProps , mapDispatchToProps)(UserData)

// export default Auther