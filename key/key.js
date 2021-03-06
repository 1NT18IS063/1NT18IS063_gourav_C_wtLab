let events = new Set();
let event1 = { type: "concert", day: "Saturday" };
let event2 = { type: "book launch", day: "Wednesday"};
let event3 = { type: "conference", day: "Thursday"};
let event4 = { type: "meet up", day: "Monday" };

// Let's add each event to the set
events.add(event1);
events.add(event2);
events.add(event3);
events.add(event4);
for (let item of events.values()) {
  console.log(item);
}

console.log(events.has(event2));

events.delete(event3);
for (let value of events) {
    console.log(value);
}
console.log(events.size);
events.clear();
console.log(events.has(event4));
/*
console.log(events.size);
events.clear();
console.log(events.has(event4));*/

let cities = new Set();
let city1 = { name: "Tumakuru" };
let city2 = { name: "Bengaluru"};
let city3 = { name: "Mysuru"};
cities.add(city1);
cities.add(city2);
cities.add(city1);
cities.add(city3);
cities.forEach((city, cities) => {
  console.log(city);
});

//Converting Set into an arrays
let set = new Set([9, 15, "a string", {"objectKey": "objectValue"}]);
set.add(true);
let arr = [...set]; // destructuring
console.log(arr);

//Converting Arrays into an sets
let arr2 = [9, 15, 15, "a string", {"objectKey": "objectValue"}];
let arr2converted = [...new Set(arr2)];
console.log(arr2converted);

//we have duplicate items in an array and we want to filter them out. 
//We can do this in two ways
let users = ["Mohan", "Kiran", "Mohan", "Ranga", "Kumar"];
/*function unique(users) {
        return Array.from(new Set(users));
}
console.log(unique(users));*/
let set3 = new Set(users);
let arrFromSet = [...set3];
console.log(arrFromSet);

/*let’s say we want to add all the users from above to a new set and a new array. 
Let’s see which collection performs the operation faster*/
let arr1 = [], set4 = new Set();
let users2 = ["John", "Murray", "Jane", "Jane", "Anne", "John", "Murray", "Jane", "Jane", "Anne"];
for (let i = 0; i < users2.length; i++) {
  arr1.push(users2[i]);
  set4.add(users2[i]);
}

let result;

console.time('Array'); 
result = arr1.indexOf("Anne") !== -1; 
console.timeEnd('Array');

console.time('Set'); 
result = set4.has("Anne"); 
console.timeEnd('Set');
