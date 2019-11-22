// Trying to fix the Same-Site error that pops up occasionaly and definitely when 
//    trying to change the background image
//    Set-cookie SameSite=None; Secure;


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

  // Tried to clear the existing output and re-populate the table with just the filtered data (didn't work)
  // data.setAttribute("style", display:none);
    //data.forEach((filteredData) => {
    //var row = tbody.append("tr");
    //Object.entries(filteredData).forEach(([key, value]) => {
        //var cell = row.append("td");
        //cell.text(value);
    //});
  if (ufoSightings !== inputValue) {
    //data.setAttribute("style", display=='none'); 
    //ufoSightings.style.display = 'none';
    ufoSightings.style.visibility = "hidden";
  }
 
  //}); //ends the data.forEach
});  // ends the button.on