//all of my data
let mountains = [
    { name: "Monte Falco", 
    height: 1658, 
    place: "Parco Foreste Casentinesi" 
    },
    { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
    { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
    { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
    { name: "Monte Amiata", height: 1738, place: "Siena" }
  ];

 

  const para = document.createElement("p");
  para.innerText = "This is a paragraph.";
  
  //to create the head only
  function generateTableHead(table, data) {
    let thead = table.createTHead(); //methods of the dom
    let row = thead.insertRow(); //insert a row in the head
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  
  //giving all the mountains data
  function generateTable(table, data) {
    //one block by block
    for (let element of data) {
        //one row per element
        let row = table.insertRow();

        //loop through that one element and its key
      for (key in element) {
        //its the td
        let cell = row.insertCell();
        //give it the value
        let text = document.createTextNode(element[key]);
        //add to the cell
        cell.appendChild(text);
      }
    }
  }
  
  //get the div with id hello
  const targetNode = document.getElementById("hello");
  //create the table
  let table = document.createElement("table");
  //append the table
  targetNode.appendChild(table);

  //returns an Array Iterator object with the keys of an object.
  let data = Object.keys(mountains[0]);

  console.log(mountains[0]) //will give the 1st block
  generateTableHead(table, data);
  generateTable(table, mountains);

