/**
 * All your Javacript goes here.
 * Do not modify index.html in any way
 */
window.onload = function () {

    // *****************GLOBAL VARIABLES*****************
    var cookie_matrix = {
        keys: [],
        values: []
    }
    // get the collection of tds
    var tds = document.getElementsByTagName('td');
    // get the collection of headings
    var headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    console.log(headings);

    // *****************FUNCTIONS*****************
    // apply color to headings everytime open the page
    applyColor();


    /**
     * [applyColor extract color from cookie and apply color to headings]
     *
     * @return  {[void]}  [return void]
     */
    function applyColor() {
        // read the cookie and apply color
        extractCookie();
        console.log(cookie_matrix.values[0]);
        // judge if cookie is empty, stop the function
        if (!cookie_matrix.values[0]) {
            console.log('no color in cookie');
            return;
        }
        //  apply the color to headings
        var color_v = cookie_matrix.values[0];
        console.log(color_v);
        var headings_to_cope_with = [...headings];
        console.log(headings_to_cope_with);
        for (let i = 0; i < headings_to_cope_with.length; i++) {

            headings_to_cope_with[i].style.color = color_v;
        }
    }

    /**
     * [extractCookie get information from cookie, may return two different value]
     *
     * @return  {[string]}  [return cookie_empty if there is nothing in cookie]
     * @return  {[string]}  [return cookie_extract_value_succeed if succeed to get information from cookie]
     */
    function extractCookie() {
        // erase all previous data prior to assign value
        cookie_matrix = {
            keys: [],
            values: []
        }
        // split cookie into individual arraies
        var cookie_array = document.cookie.split(';');
        console.log(cookie_array);

        // judge if cookie is empty
        if (cookie_array == '') {
            return 'cookie_empty';
        }

        // extract keys and values into cookie matrix
        for (let i = 0; i < cookie_array.length; i++) {
            var raw_cookie = cookie_array[i].split('=');
            console.log(raw_cookie);
            cookie_matrix.keys.push(raw_cookie[0].trim());
            cookie_matrix.values.push(decodeURIComponent(raw_cookie[1].trim()));
        }
        console.log(cookie_matrix);
        return 'cookie_extract_value_succeed';
    }

    // function doMainSomething() 
    // onclick and write the info to cookie
    // loop through the tds
    for (let i = 0; i < tds.length; i++) {
        // add a click handler to each tds
        tds[i].onclick = function (e) {
            var clr_v = this.dataset.clr;
            console.log(clr_v);
            // write clr_v into document.cookie and set expired time
            var expire_after = 60 * 60 * 24 * 365;
            document.cookie = 'colorName=' + encodeURIComponent(clr_v) + '; Max-Age=' + expire_after;
            console.log(document.cookie);
            applyColor();
        }
    }
}