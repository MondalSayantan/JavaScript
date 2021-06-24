/*

Problem Description
Given an array of objects having properties, name and city. Use JavaScript filter() function to return an array containing objects having either Bangalore or Hyderabad as their city property value.

Note: City name can be in lower case too. ex - bangalore, gwalior.

*/

function filerByCity(arr){
    const out = arr.filter(data => {
        let cityLowerCase = data.city.toLowerCase();
        return cityLowerCase == "bangalore" || cityLowerCase == "hyderabad";
    })
    return out;
}

let arr = [

    {name: "John", city: "delhi" },
    
    {name: "Peter", city: "bangalore" },
    
    {name: "Mike", city: "Bangalore" },
    
    {name: "Rachel", city: "Hyderabad" }
    
    ]

console.log(filerByCity(arr));    

