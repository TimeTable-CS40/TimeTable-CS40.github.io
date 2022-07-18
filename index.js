function change(color) {
    var date = new Date();
    var day = date.getDay();

    var dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

    document.querySelector("." + dayNames[day]).style.background = color;
}

change("#000");