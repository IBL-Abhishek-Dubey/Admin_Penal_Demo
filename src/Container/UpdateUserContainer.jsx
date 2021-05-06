
import { connect } from "react-redux";
import UpdateUser from "../Componets/UpdateUser";

import { updateData , saveUpdatedData } from "../Redux/Actions/Action";

const mapStateToProps = (state) =>({
    data : state
})


const mapDispatchToProps = (dispatch) => ({
    saveUpdatedData: (index,data) => dispatch(saveUpdatedData(index,data)),
    updateData : (id ) => dispatch(updateData(id))
});

export default connect(mapStateToProps , mapDispatchToProps)(UpdateUser)