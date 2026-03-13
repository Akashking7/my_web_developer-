function lifeSpan(age) {
    var years = 90 - age;
    var months = years * 12;
    var weeks = years * 52;
    var days = years * 365;
    console.log("i have " + years + "years," + months + " months, " + weeks + " weeks, " + days + " days");
}
lifeSpan(24);