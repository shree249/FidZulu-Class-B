
const path= require('path');
const rootPath= path.resolve(__dirname, '../../');
const filepath=path.join(rootPath, 'resources/Booksjson.json');
const fs = require('fs');

let read_json_file = () =>{
    return fs.readFileSync(filepath);
}

exports.list = () =>{
    return JSON.parse(read_json_file());
}

exports.query_by_arg = (value) =>{
    if(value !== "Raleigh" && value!=="Durham"){
        return null;
    }
    let results = JSON.parse(read_json_file());
    console.log("Query by location" + value);
    console.log(results);
    for(let i =0; i < results.length; i++){
        console.log(results[i].price);
        if(value === "Raleigh"){
            results[i].prize *= 1.075;
        }else if(value === "Durham"){
            results[i].prize *= 1.08;
        }

        results[i].prize = results[i].prize.toFixed(2); 
    }
    return results;
}

exports.post_book = (books) => {
    if (books.hasOwnProperty("name") && books.hasOwnProperty("brand") && books.hasOwnProperty("age_group") &&
     books.hasOwnProperty("price") && Object.keys(books).length == 4) {
        let results = JSON.parse(read_json_file());
        results[results.length] = books;
        const data = JSON.stringify(results);
        fs.writeFile("../Resources/Booksjson.json", data, err=>{
            if(err){
                console.log("Error writing file" ,err)
            } else {
                console.log('JSON data is written to the file successfully')
            }
        })
        return books;
    }
    return null;
}

exports.reset_json = (content) => {
    const data = JSON.stringify(content);
        fs.writeFile("../Resources/Booksjson.json", data, err=>{
            if(err){
                console.log("Error writing file" ,err)
            } else {
                console.log('JSON data is written to the file successfully')
            }
        })
}