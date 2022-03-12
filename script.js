let colorSelected; 

//Adds a row
function addR() 
{
    //alert("Clicked Add Row")
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");

    console.log("rows length:",rows.length); // length = 0
    
    if (rows.length === 0) 
    {
        let row = document.createElement("tr"); 
        let col = document.createElement("td");
        col.onclick = function ()
        {
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
        grid.appendChild(row);  //here is actually the cell being drawn

    }

    console.log("rows after length ==0: ",rows.length); // length = 1

    // if # of rows.length > 0 then you figure out how many cells 
    //are in that row (using childElementCount) & then create a new row w/ the same # of cells 

    if(rows.length > 0)
    {
        let rows = document.getElementsByTagName("tr"); //tr
        let numCols = rows[0].childElementCount; // figuring out # of cells in a row 
        console.log(numCols); // There is 1 cell in a row

        //creating a new row w/ the same # of cells 
        let row = document.createElement("tr"); 
        let col = document.createElement("td");
        col.onclick = function ()
        {
            this.style.backgroundColor = colorSelected;
        };

        row.appendChild(col);
        grid.appendChild(row);

        console.log("rows length > 0:",rows.length); // length=2;
    }
}








//Adds a column
function addC() 
{
    //alert("Clicked Add Col")
    let cols = document.getElementsByTagName("td");
    console.log(cols.length); 
}

//Removes a row
function removeR() 
{
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() 
{
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected()
{
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill()
{
    alert("Clicked Fill All")
}

function clearAll()
{
    alert("Clicked Clear All")
}

function fillU()
{
    alert("Clicked Fill All Uncolored")
}

