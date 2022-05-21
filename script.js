//1
let array =[10, 20, 30, 40, 50];
array.push ("javascript","python");
array.unshift ("html", "css");
array.shift ();
array.pop(); 

console.log (array.length);
console.log(array);



//2
let array1=["orange", "banana", "pear"];
console.log (array1.length);

array1.push ("apple","pineapple");
array1.unshift ("watermelon");
console.log (array1.length);

array1.splice (2, 0, "mango"); 
console.log(array1);

array1.shift();
array1.pop(); 
console.log (array1.length);



//3
let array2 = [12, 25, 3, 6, 8, 14, 7, 23];
let newArray = array2.map(x => x/3);
console.log(newArray);



//4
let array3 = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
let newArray1 = array3.filter(x => typeof(x) == 'number');
console.log(newArray1);



//5
let languages = ["html", "css", "javascript", "python", "php"]; 
let newLanguages = languages.filter (x => x.length > 3);
console.log(newLanguages);



//6
let array4= ['academy', 'of', 'digital', 'industries'].reduce(function(accumulator, currentValue) {
    return accumulator + currentValue; 
})
console.log(array4);



//7
let item = [12, "google", 32, null, "yahoo", 25];
let result = item.map(
    x=> typeof (x)=="number" ?  x * x * x :
    typeof (x)=="string" ? x.toUpperCase:
    x
)
console.log(result);
    


//8
let words = ["Madrid", "Rome", "Milan", "Berlin"];
let newWords = words.filter (function (array){
    if (array.includes ("m") ||array.includes ("M"))
        return(array);
})
console.log (newWords);