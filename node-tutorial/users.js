// a empty user list
var users = [];
var person = ["Jack", "Callum", "Neil"];

person.forEach(function(x){
  var obj = {
    first_name: x,
    last_name: "Bradshaw"
  };
  users.push(obj);
});
users.forEach(function(user){
  console.log("Hi, " + user.first_name + " " + user.last_name + "!");
});
//create 3 users in the users array
//using code like this: users.push({ first_name : 'Andy', last_name : 'Bradshaw' });
//Create 3 users : Jack, Callum and Neil - they all should have the name Bradshaw
//now loop through the users array and write the following data to the console below each other for each user
//you can use the forEach method

//Hi, first_name last_name!
