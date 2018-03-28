"use strict"

module.exports = (context, callback) => {
    let val = process.env.timeout_secs || "20";
    let timeoutVal = parseInt(val);
    console.log("Waiting " + val);

    setTimeout(function() {
        callback(undefined, {status: "done"});
    }, timeoutVal);
}
