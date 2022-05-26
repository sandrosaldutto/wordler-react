import axios from "axios";

const getData = {
  getWords: () => axios.get(`https://wordler-server.herokuapp.com/`),
};

export default getData;
