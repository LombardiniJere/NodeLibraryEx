const axios = require("axios");
const payload = { user: "admin", password: "admin" };


axios
  .post("http://localhost:8888/login", payload)
  .then(function (response) {
    console.log(response.data);
    const token = response.data.token;
    axios
      .get("http://localhost:8888/user/1", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const user = response.data;
        console.log("User found!!");
        console.log(
          `User is name: ${user.name} Surname: ${user.lastName}`
        );
      });
  })
  .catch(function (error) {
    console.log(error);
  });

  