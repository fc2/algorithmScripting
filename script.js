
// ---  Smallest Common Multiple --- 

function smallestCommons(arr) {
    //get the max and min number of the arr
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);

    var result = min;

    //calculate greatest common divisor (GDC)
    function gcd(a, b) {
        return (b == 0) ? a : gcd(b, a % b);
    }

    //calculate lowest common multiple (LCM)
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    for (var i = min; i < max; i++) {
        result = lcm(result, i + 1);
    }

    return result;
}


// --- Finders Keepers --- 
// looks through an array (first argument) and returns the first element in the array that passes a truth test (func).

function findElement(arr, func) {

    var filtered = arr.filter(func);
    return filtered[0];
}

findElement([1, 2, 3, 4], function (num) { return num % 2 === 0; });


// --- Drop it! ---
//Drop the elements of an array, starting from the front, until the predicate (second argument) returns true.

function dropElements(arr, func) {
    // Drop them elements.


    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr.slice(i);
        }
    }
    return [];

}

dropElements([1, 2, 3], function (n) { return n < 3; });


// -- Steamroller -- Flatten Array ---

function steamrollArray(arr) {

    resultedArray = [];

    function flatten(args) {
        if (!Array.isArray(args)) {
            console.log(args)
            resultedArray.push(args);
        } else {
            for (var i = 0; i < args.length; i++) {
                flatten(args[i]);
                console.log(args.length);
            }
        }
    }

    arr.forEach(flatten);

    return resultedArray;
}

steamrollArray([1, [2], [3, [[4]]]]);


// -- Binary Agents -- 

function binaryAgent(str) {

    var binaryArray = str.split(" ");

    var decodeArray = binaryArray.map(function (elem) {
        return String.fromCharCode(parseInt(elem, 2));
    });

    return decodeArray.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


// --- Truthy values ---

function truthCheck(collection, pre) {

    for (var elem in collection) {
        item = collection[elem];
        if (item[pre] === false || item[pre] === 0 || item[pre] === "" || item[pre] === null ||
            item[pre] === undefined || Number.isNaN(item[pre])) {
            return false;
        }
    }
    return true;
}
truthCheck([{ "name": "Pete", "onBoat": true }, { "name": "Repeat", "onBoat": true, "alias": "Repete" }, { "name": "FastFoward", "onBoat": true }], "onBoat");


// Optional arguments , trying closures 
function addTogether() {

    function add(x) {
        return function (val) {
            if (typeof val == "number") {
                return x + val;
            } else {
                return undefined;
            }
        };
    }

    if (arguments.length == 1 && typeof arguments[0] == "number") {
        return add(arguments[0]);
    } else if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
        return arguments[0] + arguments[1];
    } else {
        return undefined;
    }
}
addTogether(2)([3]);
//need a better solution!!


// --- Record Collection --- 

// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  
    if (prop === "tracks" && value !== ""){
        if(collectionCopy[id].tracks == null){
            collectionCopy[id].tracks = [value];
        } else{
            collectionCopy[id].tracks.push(value);
        }
    } else if (value !== ""){
        collectionCopy[id][prop] = value;
    } else {
        delete collectionCopy[id][prop];
    }

  return collectionCopy;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
