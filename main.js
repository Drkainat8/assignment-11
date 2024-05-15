//assignment 11 
var names = ['lubna', 'fatima', 'manahil', 'ali', 'hadi'];
//loop method
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//for each method
names.forEach(function (friends) {
    console.log(friends);
});
//assignment 12 writing personalize message to each from the list of names variable
//loop method
for (var i = 0; i < names.length; i++) {
    console.log("hi,".concat(names[i], " how are you today?"));
}
//foreach method
names.forEach(function (friends) {
    console.log("hi,".concat(friends, " how are you today"));
});
