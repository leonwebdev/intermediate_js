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
    // *****************FUNCTIONS*****************

    function applyColor() {
        // read the cookie and apply color
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
            document.cookie = 'colorName=' + clr_v;
            console.log(document.cookie);
            applyColor();
        }
    }
}
