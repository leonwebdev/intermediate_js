// ************Global Variables******************
var error_boxes = {
    error_box: [],
    error_message: []
}

var error_flag = false;

var cookie_matrix = {
    keys: [],
    values: []
}

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
    validatePostalCode();
    validatePhone();
    validateAge();
    validateWebUrl();

    // show error boxes on page
    for (let i = 0; i < error_box_query.length; i++) {

        error_boxes.error_box[i].innerHTML = error_boxes.error_message[i];
        console.log(error_boxes);
    }
    // check if there is any error currently
    // if there is an error, stop the function
    var factor_any_error = '';
    for (let i = 0; i < error_boxes.error_message.length; i++) {
        factor_any_error += error_boxes.error_message[i];
        console.log(factor_any_error);
    }

    if (factor_any_error != '') {
        return;
    }

    console.log('there is no error, let\'s proceed');

    window.location.href = "output.html";
}

function validateFirstName() {
    let v_first_name = document.getElementById('registration').first_name.value;
    if (v_first_name == '') {
        error_flag = true;
        error_boxes.error_message[0] = 'Please input first name';
        console.log(error_flag);
    } else {
        error_flag = false;
    }
}

function validateLastName() {
    let v_last_name = document.getElementById('registration').last_name.value;
    if (v_last_name == '') {
        error_flag = true;
        error_boxes.error_message[1] = 'Please input last name';
        console.log(error_flag);
    } else {
        error_flag = false;
    }
}

function validateEmail() {
    let v_email = document.getElementById('registration').email.value;
    let factor = v_email.indexOf('@');
    if (v_email == '') {
        error_flag = true;
        error_boxes.error_message[2] = 'Please input email';
        console.log(error_flag);
    } else if (factor == -1) {
        error_flag = true;
        error_boxes.error_message[2] = 'Please input valid email with \'@\' symbol';
        console.log(error_flag);
    } else {
        error_flag = false;
    }
}

function validatePostalCode() {
    let v_postal_code = document.getElementById('registration').postal_code.value;
    let factor = v_postal_code.length;
    if (v_postal_code == '') {
        error_flag = true;
        error_boxes.error_message[3] = 'Please input postal code';
        console.log(error_flag);
    } else if (factor != 6) {
        error_flag = true;
        error_boxes.error_message[3] = 'Please input valid 6-characters postal code';
        console.log(error_flag);
    } else {
        error_flag = false;
    }
}

function validatePhone() {
    let v_phone = document.getElementById('registration').phone.value.split('-').join('');
    console.log(v_phone);
    let factor = v_phone.length;
    if (v_phone == '') {
        error_flag = true;
        error_boxes.error_message[4] = 'Please input phone number';
        console.log(error_flag);
    } else if (factor != 10) {
        error_flag = true;
        error_boxes.error_message[4] = 'Please input valid phone number in a format of 123-123-1234 ';
        console.log(error_flag);
    } else {
        error_flag = false;
    }
}

function validateAge() {
    let v_age = document.getElementById('registration').age.value;
    console.log(v_age);
    let factor = isNaN(parseInt(v_age));
    console.log(factor);
    if (v_age == '') {
        error_flag = true;
        error_boxes.error_message[5] = 'Please input age';
        console.log(error_flag);
    } else if (factor == true) {
        error_flag = true;
        error_boxes.error_message[5] = 'Please input valid age with a number';
        console.log(error_flag);
    } else {
        error_flag = false;
    }
}

function validateWebUrl() {
    let v_web_url = document.getElementById('registration').web_url.value;
    console.log(v_web_url);
    let factor_length = v_web_url.length;
    console.log(factor_length);
    if (v_web_url == '') {
        error_flag = true;
        error_boxes.error_message[6] = 'Please input website url';
        console.log(error_flag);
    } else if (factor_length < 10) {
        error_flag = true;
        error_boxes.error_message[6] = 'Please input valid web url';
        console.log(error_flag);
    } else {
        error_flag = false;
    }
}

