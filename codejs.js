// Ask a question on the Q&A Forum if you get stuck!
var names =["Jack", "Mesut", "Theo", "Santi", "Giroud"];
for(var i=0; i<names.length; i++){
    console.log("I know someone called " + names[i]);
}



/*jshint multistr:true */

text = "Blah blah blah blah blah blah Olatunji \
blah blah blah Olatunji blah blah Eric blah blah \
blah blah blah blah blah Olatunji";

var myName = "Olatunji";
var hits = [];

// Look for "E" in the text
for(var i = 0; i < text.length; i++) {
	if (text[i] === "E") {
		for(var j = i; j < (myName.length + i); j++) {
			hits.push(text[j]);
		}
	}
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}


/*jshint multistr:true */


/*jshint multistr:true */

var text = "Hey, how are you doing?\ My name is Olatunji. No need to worry!";
var myName = "Olatunji";
var hits = [];

for(var i=0; i < text.length; i++){
    if (text[i] === "O"){
       for(var j = i; j < (myName.length + 1); j++){
           hits.push(text[j]);
            } 
    }
}



/*jshint multistr:true */
 var text ="Hey, how are you doing?\ My name is Olatunji.";
var myName = "Olatunji";
var hits = [];
for(var i = 0; i < text.length; i++){if (text[i] === "O"){for(var j = i; j < (myName.length + 1); j++){hits.push(text[j]);}}}
for(var i = 0; i < text.length; i++){if (text[i] === "E"){for(var j = i; j < (myName.length + i); j++){hits.push(text[j]);}}}


//WHILE LOOP
var coinFace = Math.floor(Math.random() * 2);

while(coinFace === 0){
	console.log("Heads! Flipping again...");
	var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");

