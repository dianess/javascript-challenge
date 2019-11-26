
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

  // Get the reference to each input element using their id's in the html file
  var inputField_datetime = d3.selectAll("#datetime").property("value");
  var inputField_city = d3.selectAll("#city").property("value");
  var inputField_state = d3.selectAll("#state").property("value");
  var inputField_country = d3.selectAll("#country").property("value");
  var inputField_shape = d3.selectAll("#shape").property("value");

  var ufoDictionary = {}
  //console.log(typeof ufoDictionary); // result = object
  function filtering() {
    var inputValues = d3.selectAll("input").property("value");
    console.log(typeof inputValues) //string
    console.log(inputValues) //first input that was entered
    //ufoDictionary.append(inputValues);
    
    console.log(ufoDictionary) //empty
  };  
  filtering();

  //  Check that each input field is working correctly by sending it to the console
  console.log(inputField_datetime);
  console.log(inputField_city);
  console.log(inputField_state);
  console.log(inputField_country);
  console.log(inputField_shape);

  // Save each filter item in a variable
  var filteredDate = ufoSightings.filter(ufoSightings => ufoSightings.datetime === inputField_datetime);
  var filteredCity = ufoSightings.filter(ufoSightings => ufoSightings.city === inputField_city);
  var filteredState = ufoSightings.filter(ufoSightings => ufoSightings.state === inputField_state);
  var filteredCountry = ufoSightings.filter(ufoSightings => ufoSightings.country === inputField_country);
  var filteredShape = ufoSightings.filter(ufoSightings => ufoSightings.shape === inputField_shape);

  console.log(filteredDate);
  console.log(filteredCity);
  console.log(filteredState);
  console.log(filteredCountry);
  console.log(filteredShape);
  

  // clear the existing output and re-populate the table with just the filtered data
    tbody.html("");
    filteredDate.forEach((datarow) => { 
        var row = tbody.append("tr");
        Object.entries(datarow).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
            });
        }); 

});  // ends the button.on



// };
// filtering();
// d3.select("input")
//  .on("change",function(d){ 
//     var values = [];
//     selected = d3.select(this) // select the select
//       //.selectAll("option:checked")  // select the selected values
//       .each(function() { values.push(this.value) }); // for each of those, get its value
//     console.log(values)
// }); 