// array declaration

var color=["red","blue","green","yellow"];
console.log(color[0]);
console.log(color[1]);
console.log(color[2]);
console.log(color[3]);


// length of an array
console.log(color.length);

// adding an element at the end of the array
color.push("black");
console.log(color);


// deleting an array at the end of the array
color.pop("black");
console.log(color);


// adding an element at the starting of an array
color.unshift("white");
console.log(color);

// deleting an element at the starting of an array
color.shift("white");
console.log(color);

// splice and slice
// adding an element at middle of the array
color.splice(2,0,"orange");
console.log(color);

// for deleting 
color.splice(2,1);
console.log(color);
color.splice(2,1);
console.log(color);
color.splice(2,1);
console.log(color);


// adding arrays-concat

var a=["red","blue"];
var b=["green","yellow"];
var c=a.concat(b);
console.log(c);
var c=b.concat(a);
console.log(c);


// reverse 
var color=["red","blue","green","yellow"];
color.reverse();
console.log(color);


//
var animals=["dog","Cat","tiger","lion","crocodile","monkewy","zebra","elephant"]
for (var i=0;i<=animals.length-1;i++){
    console.log(animals[i])
}