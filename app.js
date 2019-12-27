const name = "Imtiaz";
const age = "26";
const job = "Web Developer";
const city = "Dhaka";


let html;

//template string

html = `<ul>
<li>Name : ${name} </li>
<li>Age : ${age} </li>
<li>Job : ${job} </li>
<li>City : ${city} </li>


</ul>`

document.body.innerHTML = html;
