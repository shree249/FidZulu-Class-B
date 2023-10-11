
const path= require('path');
const rootPath= path.resolve(__dirname, '../../');
const filepath=path.join(rootPath, 'Resources/Bookjson.json');
const fs = require('fs');

let read_json_file = () =>{
    return fs.readFileSync(filepath);
}

exports.list = () =>{
    return JSON.parse(read_json_file());
}

exports.query_by_arg = (value) =>{
    if(value !== "US" && value!=="IE" && value!="IN"){
        return null;
    }
    let results = JSON.parse(read_json_file());
    console.log("Query by location" + value);
    console.log(results);
    for(let i =0; i < results.length; i++){
        console.log("CHECKING PRIZE",results[i].price);
        if(value === "US"){
            results[i].price *= 1.08;
            
        }else if(value === "IE"){
            results[i].price *= 1.23;
            results[i].price*=0.95;
        }else if(value === "IN"){
            results[i].price *= 1.18;
            results[i].price*=83.00;

        }
        results[i].price=Math.round((results[i].price + Number.EPSILON) * 100) / 100
        // results[i].price = Double(results[i].price.toFixed(2));
       // results[i].price = results[i].price.toFixed(2); 
        console.log("UPDATING PRIZE",results[i].price);
    }
    console.log(results);
    return results;
}

exports.post_book = (books) => {
    if (books.hasOwnProperty("productId") && books.hasOwnProperty("productName") && books.hasOwnProperty("price") &&
     books.hasOwnProperty("productDescription") && books.hasOwnProperty("rating") && books.hasOwnProperty("imageUrl") && books.hasOwnProperty("author") && books.hasOwnProperty("publisher")&& books.hasOwnProperty("format") && books.hasOwnProperty("language") && Object.keys(books).length == 10) {
        let results = JSON.parse(read_json_file());
        results[results.length] = books;
        const data = JSON.stringify(results);
        fs.writeFile("../Resources/Bookjson.json", data, err=>{
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