function getNu() {
  let text = document.getElementsByClassName("form-control").value.trim();
  fetch(`https://calorieninjas.p.rapidapi.com/v1/nutrition?query=${text}`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "ce19d0164fmsh3d383efc0e85ce5p16dcb1jsnb1a4a3c79541",
      "x-rapidapi-host": "calorieninjas.p.rapidapi.com",
    },
  })
    .then((response) => {
      console.log(response.json()).then((data) => {
        let hmtml = "";
      });
    })
    .catch((err) => {
      console.error(err);
    });
}
