const image = document.getElementById("myImage");
const dis = document.getElementById("dis");
const Title = document.getElementById("title");
let UpdateDate
let date = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();
let fullDate = UpdateDate ? UpdateDate : `${year}-${month}-${date}`;
console.log(date, month, year, "date");

// function validate(date){
//   var today = moment()
//   var birthday = moment(date);

//   if (!birthday.isValid()) {
//       return 0;    
//   }
//   else if (today.isAfter(birthday)) {
//       return 1;    
//   }
//   else {
//       return 0;    
//   }
// }
// console.log(validate(date))

function apiCall() {
  document.getElementById("calendar").setAttribute("value", fullDate);

  // console.log("yup");
  let fetchRes = fetch(
    `http://localhost:8080/api/apods?date=${fullDate}`
  );

  fetchRes
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.url);
      // image.src = data.url;
      image.src = `http://localhost:8080/${data.url}`;
      dis.innerText = data.explanation;
      Title.innerText = data.title;
    });
}
//http://localhost:8080/images/2022-10-19.png
window.onload = apiCall();

document.getElementById("calendar").onchange = function (e) {
  temp = e.target.value;
  
  UpdateDate = temp;
console.log(UpdateDate);
  let fetchRes = fetch(`http://localhost:8080/api/apods?date=${UpdateDate}`
  );
  fetchRes
    .then((res) => res.json())
    .then((data) => {
      // UpdateDate = data.date
      let url = data.url
      // console.log(url.substring(url.IndexOf('/')+1));
      console.log("hello");
      console.log(data.url, "onchange fetch");
      // (validate(data.date))?  UpdateDate = data.date: alert("invalide Date")
      // image.src = data.url;
      // image.src = "`http://localhost:8080/images/${UpdateDate}.png`";
      image.src = `http://localhost:8080/images/${UpdateDate}.png`;
      // http://localhost:8080/images/2022-09-14.png
      dis.innerText = data.explanation;
      Title.innerText = data.title;
    });
};

function validate(date){
  var today = moment()
  var birthday = moment(date);

  if (!birthday.isValid()) {
      return 0;    
  }
  else if (today.isAfter(birthday)) {
      return 1;    
  }
  else {
      return 0;    
  }
}
console.log(validate(date))

// function nextButton(){
//   console.log("next");
//   image.src=imageurl;
//   des.innerHTML=msg;
//   Title.innerHTML=title;
  
// }

// function prevButton(){
//   console.log("prev");
//   image.src=imageurl;
//   des.innerHTML=msg;
//   Title.innerHTML=title;
//   let cal = document.getElementsByClassName('calendar')
  
// }

// jsprint(validate, );