
// LEVEL 1 - AUTOMATIC TABLE AND DATA SEARCH

var tableData = data;

// TABLE WHERE DATA IS APPENDED AND CODE NEEDED FOR "LISTENING OF EVENTS"
var tbody = d3.select("#target-table-display");
var inputItem = d3.select("#datetime");
var submitBtn = d3.select("#filter-btn");

// GENERATION OF TABLE STRUCTURE IN HTML PAGE FROM THE UFO tableData array
tableData.forEach(object => {

// Row generation from items in array

        var tRow = tbody.append("tr");

// Fetching object entries

    Object.entries(object).forEach(([key,item]) => {
        
        var tData = tRow.append("td");
        
// Adding rows to table
        tData.text(item);
    });
});


// Function that allows for submittal of search request and search through date/time column
submitBtn.on("click", function() {

// Clearing table upon new request      
    tbody.html("");

// Selecting INPUT response 
    var inputResp = d3.select("#datetime");
    
// Reading Input date
    var inputItem = inputResp.property("value");

    // console.log(inputItem);

// Filtering tableData by input date
    var input = tableData.filter(selection => selection.datetime === inputItem);
    console.log(input)

// Displaying Input response in html website
    input.forEach((dates) => {

        var row = tbody.append("tr");

//Using forEach to fetch entries
        Object.entries(dates).forEach(([key,value]) => {
            var cell = row.append("td");

// Adding values to rows
            cell.text(value);
        });
    });      
});


