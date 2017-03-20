/**
 * Created by yesin on 3/8/17.
 */

$('#temp-slider').slider({
    formatter: function(value) {
        return 'Current value: ' + value;
    }
});

// date range pcker
$(document).ready( function () {
    $('input[name="daterange"]').daterangepicker({
        opens:"center",
        drops:"up"
    });
})

// $(document).ready(function(){
//         document.getElementById("#historic-toggle").checked = false;
// });

    $("#historic-toggle").click(function(){
        $(".date-picker").slideToggle("slow");
    });


$('input[name="daterange"]').on('apply.daterangepicker', function(ev, picker) {
    console.log(typeof picker.endDate.format('DD/MM/YYYY') + ' - ' + picker.endDate);
    // console.log(picker);

    $("#from-span").html(picker.startDate.format('DD/MM/YYYY'));
    $("#till-span").html(picker.endDate.format('DD/MM/YYYY'));
    var startDate = moment(picker.startDate.format('DD/MM/YYYY'), "DD/MM/YYYY");
    var endDate = moment(picker.endDate.format('DD/MM/YYYY'), "DD/MM/YYYY");
    var result = endDate.diff(startDate, 'days');
    // var testing = picker.startDate;
    console.log(result);
    $( "#slider-component" ).html('<input id="temp-slider" class="span2" name="slider" data-slider-id="ex1Slider" type="text" data-slider-min="0" data-slider-max="'+ result +'" data-slider-step="1" />');
    $("#temp-slider").attr("data-slider-min",0);
    $("#temp-slider").attr("data-slider-max", result);
    $("#temp-slider").attr("data-slider-step", 1);
    // $("#temp-slider").attr("data-slider-max", result);
    $('#temp-slider').slider({
        formatter: function(value) {
            return 'Current value: ' + value;
        }
    });
});

// Dynamically generating fields
$(document).ready(function() {
    var max_fields      = 10; //maximum input boxes allowed
    var wrapper         = $(".input_fields_wrap"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID

    var x = 1; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div><input type="text" name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
        }
    });

    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});