const BODIES = [
    {"position": "1",
    "name": "Mercury",
    "image": "http://space-facts.com/wp-content/uploads/mercury-transparent.png",
    "velocity": "47",
    "distance": "58"
    },
    {"position": "2",
    "name": "Venus",
    "image": "http://space-facts.com/wp-content/uploads/venus-transparent.png",
    "velocity": "35",
    "distance": "108",
    },
    {"position": "3",
    "name": "Earth",
    "image": "http://space-facts.com/wp-content/uploads/earth-transparent.png",
    "velocity": "29",
    "distance": "149",
    },
    {"position": "4",
    "name": "Mars",
    "image": "http://space-facts.com/wp-content/uploads/mars-transparent.png",
    "velocity": "24",
    "distance": "227",
    },
    {"position": "5",
    "name": "Jupiter",
    "image": "http://space-facts.com/wp-content/uploads/jupiter-transparent.png",
    "velocity": "13",
    "distance": "778",
    },
    {"position": "6",
    "name": "Saturn",
    "image": "http://space-facts.com/wp-content/uploads/saturn-transparent.png",
    "velocity": "9",
    "distance": "1426",
    },
    {"position": "7",
    "name": "Uranus",
    "image": "http://space-facts.com/wp-content/uploads/uranus-transparent.png",
    "velocity": "6",
    "distance": "2870",
    },
    {"position": "8",
    "name": "Neptune",
    "image": "http://space-facts.com/wp-content/uploads/neptune-transparent.png",
    "velocity": "5",
    "distance": "4498",
    },
    {"position": "9",
    "name": "Sun",
    "image": "http://pngimg.com/uploads/sun/sun_PNG13424.png",
    "velocity": "220",
    "distance": "0",
    } 
]
console.log(BODIES)
loadPlanets();
/* Pour créer l'élément du type table pour afficher les corps célestes */
function loadPlanets() {
    const targetNode = document.getElementById("content");
    // Implementez la fonction loadPlanets pour creer la table HTML et
    let table = document.createElement("table");
    let fields = Object.keys(BODIES[0]);//gets all the heads
    console.log(fields);
    let header = document.createElement("tr"); //created the 1st row

    //for all the fields we need to create a th then inside we need to attach a textNode
    for (let key of field) {
        let cell = document.createElement("th");
        cell.appendChild(document.createTextNode(key)); //attach all the headers to the th
        //all the headers will be attached to the cell one by one
        header.appendChild(cell);
    };
    table.appendChild(header);

    for (let key of BODIES) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
      }

    BODIES.forEach( (object) => {
    let row = document.createElement("tr");
    fields.forEach( (field) => {
    let cell = document.createElement("td");
    if (field == "image") {
    let img = document.createElement("img");
    img["src"] = object[field];
    cell.appendChild(img);
    }
    else{
    cell.appendChild(document.createTextNode(object[field]));
    }
    row.appendChild(cell);
    });
    table.appendChild(row);
    });
    // l'ajouter à targetNode
    targetNode.appendChild(table);
}
