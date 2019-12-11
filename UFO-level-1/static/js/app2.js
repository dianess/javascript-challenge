
// Get a reference to the table body
var tbody = d3.select("tbody");

// Assign the data from `data.js` to the variable `ufoSightings`
var ufoSightings = data;

function init() {
    // Append the data to the table
    data.forEach((ufoSightings) => {
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });  // ends Object.entries.forEach
    })   // ends data.forEach
};  //ends the function(init()

// Get the reference to the button with the id property `filter-btn`
var button = d3.select("#filter-btn");

button.on("click", function() {
    tbody.html("");
    let filteredData = ufoSightings;
    // console.log(filteredData);

    date = d3.selectAll("#datetime").property("value");
    city = d3.selectAll("#city").property("value").trim().toLowerCase();
    state = d3.selectAll("#state").property("value").trim().toLowerCase();
    country = d3.selectAll("#country").property("value").trim().toLowerCase();
    shape = d3.selectAll("#shape").property("value").trim().toLowerCase();
    filters = {'datetime':date, 'city':city, 'state':state, 'country':country, 'shape':shape};
    //console.log(filters);

    // Filter the data and delete filter keys not present
    Object.entries(filters).forEach(([key, value]) => {
        if (value === "") {
            // console.log(filters[key]);
            delete filters[key];
        }
        //else {
            //console.log(filters);
        //}
    }); //  1nd Object.entries

    // Use filtered data to populate table
    Object.entries(filters).forEach(([key, value]) => {
            filteredData = filteredData.filter(row => row[key] === value );
            // console.log(filteredData);
            filteredData.forEach((filteredData) => {
                // console.log(filteredData);
                var row = tbody.append("tr");
                Object.entries(filteredData).forEach(([key, value]) => {
                    var cell = row.append("td");
                    cell.text(value);
                }) // 3rd Object.entries 
            })  // filteredData.forEach

    }); //  2nd Object.entries

});  // ends the button.on

// Create initial table with all the data so users can browse.
init();