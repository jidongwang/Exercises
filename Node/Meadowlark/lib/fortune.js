// JavaScript source code

// This array is invisible to outside, since it is not added to 'exports'
// as below 'getFortune' funciton. This is a useful feature for encapsulation.
var fortunes = ["Conquer your fears or they will conquer you.",
                "Rivers need springs.",
                "Do not fear what you don't know.",
                "Whenever possible, keep it simple.",
];

// If want something to be visible outside of the module, you have to add
// it to 'exports'.
exports.getFortune = function () {
    var idx = Math.floor(Math.random() * fortunes.length);
    return fortunes[idx];
};