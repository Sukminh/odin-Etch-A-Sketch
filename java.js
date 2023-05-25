const cont = document.getElementById("container");
let box = document.createElement("div");
box.className = "box";
cont.appendChild(box);
let grids = [];
let row = 16;

for(i=0; i<row; i++) {
    let newGrid = document.createElement("div");
    newGrid.className = "grid";
    grids[i] = newGrid;
    box.appendChild(newGrid);
}

for(j=0; j<row; j++) {
    for(k=0; k<row; k++) {
        let newCell = document.createElement("div");
        newCell.className = "cell";
        grids[j].appendChild(newCell);
    }
}

function alert() {
    for(i=0; i<row; i++) {
        box.removeChild(grids[i]);
    }
    row = prompt("What's the number of squares per side? (max:100)");
    document.getElementsByClassName("grid").height = (640/row).toString()+"px";
    document.getElementsByClassName("cell").width = (640/row).toString()+"px";
    document.getElementsByClassName("cell").height = (640/row).toString()+"px";
    for(i=0; i<row; i++) {
        let newGrid = document.createElement("div");
        newGrid.className = "grid";
        grids[i] = newGrid;
        box.appendChild(newGrid);
    }
    
    for(j=0; j<row; j++) {
        for(k=0; k<row; k++) {
            let newCell = document.createElement("div");
            newCell.className = "cell";
            grids[j].appendChild(newCell);
        }
    }
}