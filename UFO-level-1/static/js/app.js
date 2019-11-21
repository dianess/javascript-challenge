// Get a reference to the table body
var tbody = d3.select("tbody");

// Assign the data from `data.js` to the variable `ufoSightings`
var ufoSightings = data;

// Append the data to the table
data.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});


// Get the reference to the button with the id property `filter-btn`
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Get the reference to the input element with the class 'form-control'
  var inputField = d3.select(".form-control");

  // Get the value property (the date) of the input element
  var inputValue = inputField.property("value");

  var filteredData = ufoSightings.filter(ufoSightings => ufoSightings.datetime === inputValue);

  console.log(filteredData);
});