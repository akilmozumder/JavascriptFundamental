// const name = "Imtiaz";
// const age = "26";
// const job = "Web Developer";
// const city = "Dhaka";
//
//
// let html;
//
// //template string
//
// html = `<ul>
// <li>Name : ${name} </li>
// <li>Age : ${age} </li>
// <li>Job : ${job} </li>
// <li>City : ${city} </li>
//
//
// </ul>`
//
// document.body.innerHTML = html;
function getColor() {
  const colorName = document.getElementById('getColor').value;
  let txt;
  if (colorName == '') {
    txt = "Please input a color name";
    document.getElementById('result').innerHTML = txt;
  } else {
    switch (colorName) {
      case "blue":
        txt = 'This is blue color';
        break;
      case "red":
        txt = 'This is red color';
        break;
      case "green":
        txt = 'This is green color';
        break;
      default:
        txt = 'The color is not match';

    }
    document.getElementById('result').innerHTML = txt;
  }

}


let day;

// day = new Date().getDay();
// console.log(day);

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Satday";
    break;

}
document.getElementById('time').innerHTML=day;
