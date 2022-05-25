import axios from "axios";

const getData = {
  getWords: () => axios.get(`https://wordler-server.herokuapp.com/words`),
};

export default getData;
