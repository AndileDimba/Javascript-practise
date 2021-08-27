1
// function  foo(color){
//   console.log("Hi");
//   if(color == "blue")
//     console.log("color is " + color);
//   console.log("Bye")
// }

// x = foo("green");
// x = foo("blue");
// console.log(`x = ${x}`);

2
// function  foo(color){
//   console.log("Hi");
//   console.log("Bye");
//   if(color === "red")
//     return color;
//   return "color is not red";
// }
// x = foo("green");
// x = foo("red");
// console.log(`x = ${x}`);

3
// function    foo(){
//   console.log("Hello");
//   for(let i = 0; i < 5; i++){
//       console.log(i);
//       console.log(i + 1)
//   }
//   console.log("Bye")
// }

// x = foo();
// console.log(`x = ${x}`);

4
// function  foo(){
//   for(let i = 100; i < 104; i++){
//     let num = 0;
//     num += 1;
//     console.log(i);
//     console.log("Hi");
//     if(num == 3){
//       return i + 1;
//     }
//   }
//   console.log("Blue");
//   console.log("Green");
// }
// x = foo();
// x = foo();
// console.log(`x = ${x}`);

5
// function    foo(color){
//   console.log("Hello");
//   for(let i = 0; i < 5; i++){
//     if(color == "blue"){
//       return i;
//     }
//     console.log("blue");
//     console.log("green");
//   }
//   console.log("Bye");
//   return 10;
// }
// x = foo("green")
// console.log(`x = ${x}`);
// x = foo("blue");


6
// function    foo(){
//   let num = 0;
//   console.log("Hello");
//   for(let i = 0; i < 4; i++){
//       num++;
//       if(num == 3){
//           console.log("Hi");
//       }
//       else{
//           console.log("Bye");
//       }
//   }
//   console.log(num);
//   return;
// }
// x = foo();
// console.log(`x = ${x}`);

7
// function    foo(){
//   console.log("Hello");
//   for(let i = 0; i < 4; i++){
//       if(i % 2 == 1){
//           console.log("Hi");
//       }
//       else{
//           console.log("Bye");
//       }
//   }
//   console.log("color");
//   return;
// }
// x = foo();
// console.log(`x = ${x}`);


// function  foo(){
  for(let i = 0; i < 3; i++){
  for(let j = i; j < 4; j++) {
    console.log(j)
  }
  }
//     return i++;
//   }
//   console.log("Hi");
// }
// x = foo();
// console.log(`x = ${x}`);
