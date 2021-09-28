

// let object={
//     laptop:"Hp",
//     model:"i5",
//     processor:"octa core"
// }
// same
// // object.price= "3000"
// object["price"]="3000";

// console.log(object)





// let object={
//     laptop:"Hp",
//     model:"i5",
//     processor:"octa core"
// }


// for(var key in object){
//     console.log([key] + ":" + object[key] )
// }







// var car={
//     name:"Civic",
//     model:"2020",
//     price:"30Lakh"
// }
// for(var key in car){
//     console.log(car[key])
// }






// constructor function




// function StudentData(name,fatherName,dob){
//     this.name=name;
//     this.fatherName=fatherName;
//     this.dob=dob;
    
// }


// let firstStudent=new StudentData("Zeeshan","Muhammad Mumtaz","24 aug,2002")

// let SecndStudent=new StudentData("Adnan","Muhammad Mumtaz","10 oct,2001")


// console.log(firstStudent,SecndStudent)












// function StudentData(name,fatherName,dob){
//     this.name=name;
//     this.fatherName=fatherName;
//     this.dob=dob;
//     this.greetUser=function (){
//         console.log(this.name)
//     }
    
// }


// let firstStudent=new StudentData("Zeeshan","Muhammad Mumtaz","24 aug,2002")

// let SecndStudent=new StudentData("Adnan","Muhammad Mumtaz","10 oct,2001")



// firstStudent.greetUser();

// SecndStudent.greetUser();










// delete Method in Object

//  var car={
//         name:"Civic",
//         model:"2020",
//         price:"30Lakh"
//     }


//     delete car.price;

//     console.log(car)



//     if("name" in car){
//         console.log("Given in object")
//     }