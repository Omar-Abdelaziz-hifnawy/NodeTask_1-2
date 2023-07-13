const fs = require("fs")

// STEP 1 : create the person Object
const person1 = {
    fname : "Ahmed" ,
    lname : "Hossam",
    age : "20" ,
    city : "alex"
}

// STEP 2 : convert the OBJECT to JSON
const person1JSON = JSON.stringify(person1)

// STEP 3 : Store the JSON in file
fs.writeFileSync("data.json" , person1JSON)

// STEP 4 : Read the file (JSON)
console.log(fs.readFileSync('data.json').toString())

// STEP 5 : Convert JSON to OBJECT
const person1OBJ = JSON.parse(person1JSON)

// STEP 6 : Update data
person1OBJ.fname = 'Adel' ;
person1OBJ.lname = 'Ahmed' ;
person1OBJ.age = '40' ;
person1OBJ.city = 'cairo' ;

// STEP 7 : Convert the updated OBJECT to JSON
const person1JSON2 = JSON.stringify(person1OBJ)

// STEP 8 : Store the Updated JSON in a file
fs.writeFileSync('data.json' , person1JSON2)