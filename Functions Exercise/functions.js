//console.log("hello");

//var v1 = prompt("Please enter a number");
//console.log(v1);

v1 = 1;
v2 = 2;
v3 = 5;
v4 = "string";
v5 = "supercalafragilisticexpialidocious"
v6 = "This is a sentence for the last problem."

// Write a function that accepts two numbers as parameters, and returns the sum.
function sum(a, b) {
    return a + b;
};

console.log(v1 + " " + v2 + " sum: " + sum(v1, v2));

// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
function max(a, b, c) {
    return Math.max(a, b, c);
};

console.log(v1 + " " + v2 + " " + v3 + " max: " + max(v1, v2, v3));

// Write a function that accepts one number as a parameter, and returns whether that number is even or odd.
function evenOdd(a) {
    return a % 2 == 0 ? "Even" : "Odd";
};

console.log(v2 + " " + evenOdd(v2));

// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.
function cutOrClump(a) {
    var result = "";
    if (a.length <= 20) {
        result = a.concat(a);
    } else {
        result = a.slice(0, a.length / 2);
    }
    return result;
}

console.log(v4 + " " + cutOrClump(v4));
console.log(v5 + " " + cutOrClump(v5));

// Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.
// I think the problem description has the Fibonacci series wrong. I believe it starts with 0. https://en.wikipedia.org/wiki/Fibonacci_number
function fibo(a) {
    items = [0, 1];
    //console.log(items)
    
    var result = "";
    if (a < 1) {
        result = "Fibonacci target: " + a.toString() + " Invalid entry. The target needs to be larger than 0.";
    } else if (a === 1) {
        result = "Fibonacci target: " + a.toString() + " length=1 numbers=0 sum=items[0]";
    } else {
        for (var i = items.length; items.length < a; i++) {
            //console.log("length=" + i)
            var next = items[items.length - 1] + items[items.length - 2];
            //console.log("next=" + next)
            items.push(next);
            //console.log(items)
            var sum = 0
            for (var j = 0; j < items.length; j++) {
                sum += items[j]
            }
            //console.log("sum=" + sum)
            result = "Fibonacci target: " + a.toString() + " sequence: " + items.toString() + " sum: " + sum.toString();
        }
    }
    return result;
}

console.log(fibo(5));

// Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string. ( White spaces count as a letter )
// function Char_Counts(str1) {
//     var uchars = {};
//     str1.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
//     return uchars;
//     }
// console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));

var string1 = "This is a string.";

function highCount(string1) {


    var collection = {};
    var max = 0;
    var finalResult = "";

    for (var i = 0; i < string1.length; i++) {
        var counter = 0;
        for (var j = 0; j < string1.length; j++) {
            if (string1.charAt(j) == string1[i]) {
                counter += 1;
            }
        }
        if (counter > max) {
            max = counter;
        }
        collection[string1[i]] = counter;
    }

    var sortable = [];
    for (var character in collection) {
        sortable.push([character, collection[character]]);
    }

    sortable.sort(function (a, b) {
        return b[1] - a[1];
    });
    let newArray = sortable.filter((element) => element[1] === max);
    finalResult = "Sentence: " + string1.toString() + " Highest frequency character(s), count: " + newArray.toString();
    return finalResult;
}

console.log(highCount("This is a string."));