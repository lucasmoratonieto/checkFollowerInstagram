// const names = document.getElementsByClassName("_aacx");
// const followinfFollow = document.getElementsByClassName("_aad6");

// console.log(followinfFollow[2].innerHTML);

// // // console.log(names[5].innerHTML);

// const allNames = {
//   Name: "",
//   action:"",
// };

// for (let i = 0; i < names.length; i++) {
//   //   allNames.push(names[i].innerHTML);.
//   //   console.log(names[i].innerHTML);
//   allNames.push(names[i].innerHTML);
// }

// console.log(allNames);

// const names = document.getElementsByClassName("name");
// const follow = document.getElementsByClassName("follow");
// const following = document.getElementsByClassName("following");

// // const objectName = {
// //   Object1: {
// //     name: "hola",
// //     action: "hi",
// //   },
// // };

// // console.log(objectName.Object1.action);

// objectName = [];
// let x = 1;

// for (let i = 0; i < follow.length; i++) {
//   let person = "person " + x;
//   objectName[person] = {
//     name: names[i].innerHTML,
//     action: follow[i].innerHTML,
//   };
//   x = x + 1;
// }

// console.log(objectName);

// for (let i = 0; i < names.length; i++) {
//   let person = "person " + x;
//   objectName[person] = {
//     name: names[i].innerHTML,
//     action: followinfFollow[i].innerHTML,
//   };
//   x = x + 1;
// }

// console.log(objectName);

// let person = "person" ++;

// objectName[person] = { name: "lucas", action: "following" };

// console.log(objectName);

// for (let i=0; i<names.length; i++){

// }

const names = document.getElementsByClassName("_aade");

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i].innerHTML);
// }

const following = [];
const follower = [];
let x = 0;
for (let i = 0; i < names.length; i++) {
  x = i + 1;
  if (
    names[x].innerHTML ==
    "\n                                      Following\n                                    "
  ) {
    following.push(names[i].innerHTML);
    i++;
  } else {
    follower.push(names[i].innerHTML);
  }
}
// console.log(following);
// console.log(follower);

// for (let z = 0; z < follower.length; z++) {
//   for (let a = 0; a < following.length; a++) {
//     if (following[a] === follower[z]) {
//       console.log(follower[z] + " le sigues y te sigue");
//       break;
//     } else {
//       // console.log(follower[z] + " No le sigues");
//     }
//   }
// }

for (let z = 0; z < following.length; z++) {
  for (let a = 0; a < follower.length; a++) {
    if (following[z] === follower[a]) {
      // console.log(following[z] + " le sigues y te sigue");
      break;
    } else if (a === follower.length - 1) {
      console.log(following[z] + " NO te sigue");
    }
  }
}
