const myColorArray = ["yellow", "blue", "red", "orange"];

// Old Style
let i = 0;
while (i < myColorArray.length) {
    console.log(myColorArray[i]);
    i++;
}

for (let i = 0; i < myColorArray.length; i++) {
    console.log(myColorArray[i]);
}


//New style
myColorArray.forEach((color) => console.log(color));


// 1. For loop takes 3 lines, while loop takes 5 lines
// 2. Takes 1 line
// 3. Een array method heeft een aantal voordelen:
// --> You wont have a never ending loop.
// --> forEach says right away what you're about to
// --> you don't need to keep track with an i, where you are in an interation

const myColors = {
    colorWall: "blue",
    colorFruit: "orange",
    colorCar: "red",
    colorHair: "white",
    colorGras: "green",
};

for (x in myColors) {
    console.log(myColors[x]);
}

// Yes, i'm iterating about an object.
// Nopes, Array Methods can't be used on an object