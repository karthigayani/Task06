//1.  https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

// Class - Movie
/*The class Movie is stated below. An instance of class Movie represents a film.
This class has the following three properties: */

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
/* a) Write a constructor for the class Movie, which takes a String representing the title
      of the movie, a String representing the studio, and a String representing the rating 
      as its arguments, and sets the respective class properties to these values.

    b) The constructor for the class Movie will set the class property rating to "PG" as
       default when no rating is provided.

    c) Write a method getPG, which takes an array of base type Movie as its argument,
       and returns a new array of only those movies in the input array with a rating of
       "PG". You may assume the input array is full of Movie instances. The returned array
        need not be full.

    d) Write a piece of code that creates an instance of the class Movie with the title
       “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13” */


//  class Movie{
//     constructor(title,studio,rating="PG"){
//          this.title=title;
//          this.studio=studio;
//          this.rating=rating;
//      }
//      getPG(arr){  
//      arr=arr.filter((ele)=>ele.rating=="PG" || ele.rating=="PG13");
//      return arr;
//      }
//  }
//  var F1 = new Movie("Casino Royale","Eon Productions","PG13");
//  var F2 = new Movie("Vadachennai","Lyca Production Wunderbar films","A");
//  var F3 = new Movie("Ponniyin Selvan","Madras Talkies Lyca Production");
//  var arr = [F1,F2,F3];
//  var x = new Movie(arr);
//  console.log(x.getPG(arr));

// //2.  https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
// class Circle{
//     constructor(radius,color){
//         this.radius=radius;
//         this.color=color;
//     }
//     getRadius(){
//         return this.radius;
//     }
//     getColor(){
//         return this.color;
//     }
//     getArea(){
//         return 3.14*this.radius*this.radius; // Area of circle = πr2
//     }
//     getCircumference(){
//         return 2*3.14*this.radius; // circumference of a circle, C=2𝜋r
//     }
// }
// var c1=new Circle(2.5,"red");
// console.log(c1.getArea().toFixed(2));
// console.log(c1.getCircumference().toFixed(2));

// //3.  Write a “person” class to hold all the details.
// class Person{
//     constructor(Name,DOB,BloodGroup,Phone,Gender,Qualification,MaritalStatus,Religion,Address,Citizenship){
//         this.Name=Name;
//         this.DOB=DOB;
//         this.BloodGroup=BloodGroup;
//         this.Phone=Phone;
//         this.Gender=Gender;
//         this.Qualification=Qualification;
//         this.MaritalStatus=MaritalStatus;
//         this.Religion=Religion;
//         this.Address=Address;
//         this.Citizenship=Citizenship;
//     }
//     getdetails(){
//         if(this.BloodGroup=="O+ve" && this.Citizenship=="Indian"){
//            return `Name : ${this.Name}, Phone : ${this.Phone}, Citizenship : ${this.Citizenship}`;
//         }
//         else{
//             return "Not Required";
//         }
//     }
// }
// var p1=new Person("karthi","18-11-1994","B+ve","8124688679","Female","B.Tech","Unmarried","Hindu","Pondicherry","Indian");
// var p2=new Person("Jayaraj","13-12-1991","O+ve","9876543210","Male","M.Tech","Unmarried","Hindu","Tamilnadu","Indian");
// var p3=new Person("Anju","06-07-1996","O+ve","9876548888","Female","M.Com","Married","Hindu","Tamilnadu","Indian");
// var p4=new Person("Azrar","10-05-1994","O+ve","8876543541","Male","B.Tech","Unmarried","Muslim","Tamilnadu","Dubai");
// console.log(p1.getdetails());
// console.log(p2.getdetails());
// console.log(p3.getdetails());
// console.log(p4.getdetails());


// //4.  write a class to calculate the uber price.
// class Uber{
//     constructor(price,km,wcpm=0){
//         this.price=price;
//         this.km=km;
//         this.wcpm=wcpm;
//     }
//     rate(){
//       if(this.wcpm<=5){
//         return `The cost of the trip is Rs.${this.price*this.km}`;
//     }
//     else{
//         return `The cost of the trip is Rs.${this.price*this.km} and the waiting charge is Rs.${this.wcpm*2} so the total amount you have to pay is Rs.${(this.price*this.km)+(this.wcpm*2)}`;
//     }
// }
// }
// var r1=new Uber(100,1,10);
// var r2=new Uber(270,2);
// var r3=new Uber(96,3,15);
// // var arr=[r1,r2,r3];
// // console.log(arr);
// console.log(r1.rate());
// console.log(r2.rate());
// console.log(r3.rate());






