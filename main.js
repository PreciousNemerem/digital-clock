// console. log("hello world")

// var wrapper;

// wrapper = "hello world"

// console.log(wrapper);

// let wrapper = "hello world"

// var wrap = "hello world"

// const arr = [34, 35, 56]
// const arr1 = ["lion"]
// const arr2 = ["mango", 5, true]
// const arr3 = [ [5,5] ]
// const arr4 = [ [ [457, 677] ] ]

// const obj = {
//     name: "james pink",
//     age: 54,
//     isSchool: true,
//     bestFood: ["Rice", "Meat"],
//     address: {
//         state: "Lagos",
//         city: "yaba"
//     },
//     "Zip code": 78
// }

// console.log(obj["zip code"]);


// const arr = ["lion", "pig", "monkey"]
// const arr1 = ["mango", "orange", "cherry"]
// const arr2 = ["pen", "biro",]

// const age = prompt ("Enter Your Age")

// if(age <= 6) {
//     console.log("I am a baby");
// }else if(age<= 15){
//     console.log("Young teen");
// }
// else if(age<= 20){
//     console.log("Teenager");
// }
// else if(age<= 30){
//     console.log("Youth");
// }
// else if(age<= 40){
//     console.log("Young adult");
// }
// else if(age<= 50){
//     console.log("Adult");
// }
// else if(age<= 75){
//     console.log("I am retired");
// }
// else if(age<= 90){
//     console.log("I am old");
// }
// else if(age<= 105){
//     console.log("Awaiting the lord");
// }
// else if(age<= 150){
//     console.log("Gone");
// }
// else{
//     console.log("not correct")
// }
// const arr = [
//     {
//         id: 1,
//         img: "https://images.pexels.com/photos/7445820/pexels-photo-7445820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         product: "Smart Watch",
//         content: "ggdhuh hbkhvu huidfh ohfjhn guifuk hufjjn hibfdbioud hufhfkjfuenfbvijvnhg",
//         button: "Read More"
//     },
//     {
//         id: 2,
//         img: "https://images.pexels.com/photos/13387311/pexels-photo-13387311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         product: "Iphone 13 Pro",
//         content: "ggdhuh hbkhvu hhfhfh hghbiu hghkhj hufjjn hibfdbioud hufhfkjfuenfbvijvnhg",
//         button: "Read More"   
//     },
//     {
//         id: 3,
//         img: "https://images.pexels.com/photos/7445820/pexels-photo-7445820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         product: "Sport Shoe",
//         content: "ggdhuh hbkhvu huidfh ohfjhn guifuk hufjjn hibfdbioud hufhfkjfuenfbvijvnhg yfhhtf jhygn",
//         button: "Read More"
//     }
// ]
// const div = document.querySelector("div")

// for(let i = 0; <arr)

let hrs = document.getElementById("hrs")
let min = document.getElementById("min")
let sec = document.getElementById("sec")

setInterval(()=>{
    let currentTime = new Date()

hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours()
min.innerHTML =   (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes()
sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds()
},1000)

