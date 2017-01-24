/**
 * Created by yesin on 1/20/17.
 */
//JSON obj array
var markerInfo = {
    metaData: []
};

//console.log(baseMap);

$('form').validate({
    // Specify the validation rules
    rules: {
        locationName: {
            required: true
            , minlength: 3
        }
        , address: {
            required: true
        }
        , floornumbers: {
            required: true
        }
        , agree: "required"
    }, // Specify the validation error messages
    messages: {
        firstname: {
            reuired: "Please enter the location name"
            , minlength: "Location name should be more than 3 characters"
        }
        , address: {
            required: "Please enter your correct address"
        }
        , floornumbers: {
            required: "Please provide floor number"
        }
    }
});

$('#home').on('click', '[data-toggle=update-data]', function(e){

    if($(e.target).closest('form').valid()) {

        var markerDetails = {};
        var coordinates = {};
        var element = $(e.target).closest('.item');

        coordinates["lat"] = element.data('lat');
        coordinates["lng"] = element.data('lng');

        //get the values of the form elements
        var id = element.prop('id');

        var name = element.find('[name=locationName]').val();
        var address = element.find('[name=address]').val();
        var floors = element.find('[name=floors]').val();

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

});