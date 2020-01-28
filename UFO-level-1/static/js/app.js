
// LEVEL 1 - AUTOMATIC TABLE AND DATA SEARCH

var tableData = data;

// TABLE WHERE DATA IS APPENDED AND CODE NEEDED FOR "LISTENING OF EVENTS"
var tbody = d3.select("#target-table-display");
// // select the "submit button" & "input field"
var submitButton = d3.select("#filter-btn");
var inputField = d3.select("#datetime");



// GENERATION OF TABLE IN HTML PAGE FROM THE UFO tableData array
tableData.forEach(object => {
    // Row generation form each object in the array

    var tRow = tbody.append("tr");

    // Fetching object entries

    Object.entries(object).forEach(([key,item]) => {
        
        var tData = tRow.append("td");
        
        // Adding item content to each row
        tData.text(item);
    });
});





