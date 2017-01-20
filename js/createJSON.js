/**
 * Created by yesin on 1/20/17.
 */
    //JSON obj array
var markerInfo = {
        metaData: []
    };
//get values from the fields
function pushStuff() {
    //create an object
    var markerDetails = {};
    //get the values of the form elements
    var id = document.getElementById('id').value;
    var coordinates = document.getElementById('coordinates').value;
    var name = document.getElementById('locationName').value;
    var address = document.getElementById('address').value;
    var floors = document.getElementById('floors').value;

    //prepare the properties of the object
    markerDetails["id"] = id;
    markerDetails["coordinates"] = coordinates;
    markerDetails["locationName"] = name;
    markerDetails["address"] = address;
    markerDetails["floors"] = floors;

    //After you've done fiddling with the object you can pass the object into the JSON array
    markerInfo.metaData.push(markerDetails);
    console.log(markerInfo);
}