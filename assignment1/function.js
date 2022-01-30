// ************Global Variables******************
var error_boxes = {
    error_box: [],
    error_message: []
}

var error_flag = false;
/**
 * [showTime : get the current Time and return a string of a formatted date]
 *
 * @return  {[formatted_date]}  [return a string of a formatted date]
 */
function showTime() {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var current_day = new Date();
    console.log(current_day);

    // get the current year
    var year = current_day.getFullYear();

    // get the current month
    var month_index = current_day.getMonth();
    var month = months[month_index];
    console.log(month);

    // get current date
    var date = current_day.getDate();
    console.log(date);

    // get Day of week
    var day_of_week_index = current_day.getDay()
    var day = days[day_of_week_index];
    console.log(day);

    // get hours
    var hour_24 = current_day.getHours();
    console.log(hour_24);

    // get AM or PM
    var am_pm_str = (hour_24 < 12) ? 'AM' : 'PM';
    console.log(am_pm_str);

    // convert 24 hour to 12 hour
    var hour_12 = (hour_24 > 12) ? hour_24 - 12 : hour_24;
    console.log(hour_12);

    // pad the hour if necessary
    if (hour_12 < 10) {
        hour_12 = '0' + hour_12;
    }
    console.log(hour_12);

    // get minutes
    var minutes = current_day.getMinutes();
    console.log(minutes);
    // pad the minute if necessary
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    console.log(minutes);

    var formatted_date = `${day}, ${date} ${month} ${year}, ${hour_12}:${minutes} ${am_pm_str}`;
    console.log(formatted_date);

    return formatted_date;

}

function validateForm(e, el) {
    e.preventDefault();
    error_boxes = {
        error_box: [],
        error_message: []
    }
    console.log(error_boxes);

    // query all div.error_box
    let error_box_query = document.querySelectorAll('div.error_box');
    console.log(error_box_query);

    // initial error_boxes to assign message to it
    for (let i = 0; i < error_box_query.length; i++) {

        error_boxes.error_box[i] = error_box_query[i];
        error_boxes.error_message[i] = '';
        error_boxes.error_box[i].innerHTML = error_boxes.error_message[i];
        console.log(error_boxes);
    }

    validateFirstName();
    validateLastName();
    validateEmail();

    // show error boxes on page
    for (let i = 0; i < error_box_query.length; i++) {

        error_boxes.error_box[i].innerHTML = error_boxes.error_message[i];
        console.log(error_boxes);
    }
}

function validateFirstName() {
    let v_first_name = document.getElementById('registration').first_name.value;
    if (v_first_name == '') {
        error_flag = true;
        error_boxes.error_message[0] = 'Please input first name';
        console.log(error_flag);
    }
}

function validateLastName() {
    let v_last_name = document.getElementById('registration').last_name.value;
    if (v_last_name == '') {
        error_flag = true;
        error_boxes.error_message[1] = 'Please input last name';
        console.log(error_flag);
    }
}

function validateEmail() {
    let v_email = document.getElementById('registration').email.value;
    let factor = v_email.indexOf('@');
    if (v_email == '') {
        error_flag = true;
        error_boxes.error_message[2] = 'Please input email';
        console.log(error_flag);
    }else if (factor == -1) {
        error_flag = true;
        error_boxes.error_message[2] = 'Please input valid email with \'@\' symbol';
        console.log(error_flag);
    }
}

