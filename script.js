let colorSelected; 

//Adds a row
function addR() {
    //alert("Clicked Add Row")
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    console.log(rows.length); //Length = 0 
    
    if (rows.length === 0) //empty grid
    {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function (){
            this.style.backgroundColor = colorSelected;
    }

        row.appendChild(col);
        grid.appendChild(row); //here is actually the cell being drawn

        console.log("rows after length ==0: ",rows.length); // length = 1
    } 

    /*rows.length > 0 figure out how many cols are in that row(using childElementCount)
    & then create a new row w/ the same # of cols */
    else //atleast one row in the grid...since we have one row in our grid we can get num of cols
    {
        let rows = document.getElementsByTagName("tr"); 
        let numCols = rows[0].childElementCount; // # of cols in a row 
        let col_Len = rows.item(rows.length - 1).cells.length;
        console.log(numCols); // There is 1 cell in a row

        //creating a new row  
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function ()
            {
             this.style.backgroundColor = colorSelected;
            };

        for (let i = 0; col_Len > i; i++) { 
            console.log(i);
            row.appendChild(col);
            col = document.createElement("td");  
        } 
        grid.appendChild(row);

        console.log("rows length > 0:",rows.length); // length=2;
    }

}


//Adds a column
function addC() {
    //alert("Clicked Add Col")
    let cols = document.getElementsByTagName("td");
    console.log(cols.length); 
}

//Removes a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}