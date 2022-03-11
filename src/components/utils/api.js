import axios from "axios";

const getData = {
  getWords: () => axios.get(`http://localhost:8080/words`),
};

export default getData;
