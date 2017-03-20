/**
 * Created by yesin on 3/20/17.
 */
/**
 * Created by yesin on 3/20/17.
 */

var config = {
    container: document.getElementById('heatmapContainer'),
    max: 50,
    min: 25,
    radius: 10,
    maxOpacity: .5,
    minOpacity: 0,
    blur: .75,
    gradient: {
        // enter n keys between 0 and 1 here
        // for gradient color customization
        '.25': 'green'
        ,'.5': 'yellow'
        , '.7': 'orange'
        , '.95': 'red'
    }
};

setColorRange(config, "Celcius");

function setColorRange( heatMapObj, unit) {

    var minRange = heatMapObj.min;
    var maxRange= heatMapObj.max;
    var gradient = heatMapObj.gradient;
    try{
        var rainbow = new Rainbow(); // by default, range is 0 to 100

        rainbow.setNumberRange(minRange, maxRange);

        //array that will hold the spectrum colors
        var colors = [];

        //set spectrum array first
        $.each(gradient, function (key, val) {
            colors.push(val);
        });

        //set spectrum colors
        rainbow.setSpectrumByArray(colors);

        //adding color values to table
        var table = '<table>';
        table += '<tr>';
        table += ' <th>Color</th>';
        table += '<td style="background-color: #' + rainbow.colourAt(minRange) + '; color: #fff"></td>';
        var counter = minRange;

        //first row
        $.each(gradient, function (key, val) {
            var watts = minRange + parseFloat(key)*(maxRange - minRange);
            var hexColour = '#' + rainbow.colourAt(watts);
            table += '<td style="background-color:' + hexColour + '; color: #fff"></td>';

            counter = watts + 0.01;
        });

        table += '<td style="background-color: #' + rainbow.colourAt(maxRange) + '; color: #fff"></td>';
        table += '</tr>';
        table += '<tr>';
        table += ' <th>('+ unit +')</th>';
        table += ' <td>'+ minRange+ '</td>';

        counter = minRange;

        $.each(gradient, function (key, val) {
            var watts = minRange + parseFloat(key)*(maxRange - minRange);
            var appliance = Math.round(watts);
            table += '<td>' + appliance + '</td>';
            counter = watts + 0.01;
        });
        table += ' <td>'+ maxRange+ '</td>';
        table += '</tr>';
        table += '</table>';

        document.getElementById("range-table").innerHTML = table;
    }
    catch(err){
        alert(err);
    }
};