const yargs = require("yargs");
const data = require("./data");


// 1 - add 7 persons with id from 1 - 7 (id fname lname age city)
yargs.command({
    command: "add",
    describe: "add person",
    builder: {
        id: {
        describe: "add the person's ID",
        demandOption: true,
        type: "number",
        },
        fname: {
        describe: "add the first name",
        demandOption: true,
        type: "string",
        },
        lname: {
        describe: "add the last name",
        demandOption: true,
        type: "string",
        },
        age: {
        describe: "add the age",
        demandOption: false,
        type: "number",
        },
        city: {
        describe: "add the city",
        demandOption: false,
        type: "string",
        },
    },
    handler: (x) => {
        data.addPerson(x.id, x.fname, x.lname, x.age, x.city);
    },
});


// 2 - delete id 4 - 6
yargs.command({
    command: "delete",
    describe: "delete person",
    builder: {
        id: {
        describe: "delete person by ID",
        demandOption: true,
        type: "number",
        },
    },
    handler: (x) => {
        data.deletePerson(x.id);
    },
});


// 3 - list ( fname lname city ) for all
yargs.command({
    command: "list",
    describe: "list person data",
    handler: () => {
        data.listPerson();
    },
});


// 4 - read all data for only the 5th person
yargs.command({
    command: "read",
    describe: "read person data",
    builder: {
        id: {
        describe: "read person by ID",
        demandOption: true,
        type: "number",
        },
    },
    handler: (x) => {
        data.readData(x.id);
    },
});


yargs.parse();