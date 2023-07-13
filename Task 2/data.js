const fs = require("fs");

// render data
const renderData = () => {
    try {
        const JsonFile = fs.readFileSync("data.json").toString();
        return JSON.parse(JsonFile);
    } catch {
        return [];
    }
};

// save data
const saveData = (allData) => {
    const saveDataJson = JSON.stringify(allData);
    fs.writeFileSync("data.json", saveDataJson);
};

// add Person
const addPerson = (id, fname, lname, age, city) => {
    const allData = renderData();

    const duplicate = allData.filter((obj) => {
        return obj.id === id;
    });

    if (duplicate.length === 0) {
        allData.push({
        id,
        fname,
        lname,
        age,
        city,
        });
        saveData(allData);
    } else {
        console.log("ERROR DUPLICATED DATA");
    }
};

// delete person
const deletePerson = (id) => {
    const allData = renderData();

    const keepData = allData.filter((obj) => {
        return obj.id !== id;
    });

    console.log(keepData);
    saveData(keepData);
};

// list persons
const listPerson = () => {
    const allData = renderData();

    allData.forEach((obj) => {
        console.log(obj.fname, obj.lname, obj.city);
    });
};

// read data
const readData = (id) => {
    const allData = renderData();

    const searchPerson = allData.find((obj) => {
        return obj.id == id;
    });

    console.log(searchPerson);
};

// export functions
module.exports = {
    addPerson,
    deletePerson,
    listPerson,
    readData,
};