import axios from "axios";
import api from "../Authentication/apiAddress";
import authentication from "../Authentication/authentication";

const HandleSignOut = () => {
  // const values = authentication();
  // if (values.authenticated) {
  //   axios
  //     .post(`${api}/signout`)
  //     .then((res) => {
  //       axios.defaults.headers.common["Authorization"] = "";

  //       const FBIdToken = `Bearer `; //Manish
  //       localStorage.setItem("FBIdToken", FBIdToken); //Manish
  //       localStorage.setItem("WhoIsHe", "");
  //       localStorage.setItem("UserDetails", "{}");
  //       console.log(res.data);
  //       window.location.reload();
  //     })
  //     .catch((err) => {
  //       console.log(err.response.data);
  //     });
  // }
};

export default HandleSignOut;
