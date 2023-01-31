// setTimeout(()=>{
//  console.log("Merhaba"); 
// }, 5000);

// setInterval(() => {
//     console.log("Hello every seconds i will run ");
// }, 1000);

// const sayHello = (cb) => {
//     cb();
// }
// sayHello(() => {
//     console.log("Hello")
// });


import fetch from 'node-fetch';
import axios from 'axios';

// // import { users } from './myModule';

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => data.json())
// .then((users) => {
//     console.log("users: done",users);
//     fetch('https://jsonplaceholder.typicode.com/posts/1').then(data => data.json()).then(post => console.log("Post done!", post) )
// } );


// it's about axios and axios is more pratical than fetch 
// async function getData( ) {
//      const {data: users} =await  axios("https://jsonplaceholder.typicode.com/users");
     
//      const {data: post1} =await  axios("https://jsonplaceholder.typicode.com/posts/1");
//      const {data: post2} =await  axios("https://jsonplaceholder.typicode.com/posts/2");

//     console.log("users",users);
//     console.log("post1",post1);
//     console.log("post2",post2);
//     }

// getData();

// it's about Promises
//  const getComments = (number) => {
//    return new Promise( (resolve, reject) => {
//       if (number === 1) {
//          resolve({ text:"Hi"});
//       }

//       reject("There is a problem!")
//    });
//  };

  

//  getUsers()
//  .then( (data) =>console.log(data))
//  .catch((e)=> console.log(e));

//for users
const getUsers = () => {
   return new Promise(async (resolve, reject) => {
      const {data} =await  axios("https://jsonplaceholder.typicode.com/posts/");

      resolve(data);
      // reject("somethings wrongs")
   });
 };




//for posts 

const getPost = (post_id) => {
   return new Promise(async (resolve, reject) => {
      const {data} =await  axios("https://jsonplaceholder.typicode.com/posts/"+ post_id);

      resolve(data);
      // reject(" one more wrong also")
   });
 };
//   getPost(1)
//  .then( (data) =>console.log(data))
//  .catch((e)=> console.log(e));


 // for make to line it is important and we can use an anonymous function with async and await 

//  (async () => {
//     await  getUsers()
//     .then( (data) =>console.log(data))
//     .catch((e)=> console.log(e));

//     await getPost(1)
//     .then( (data) =>console.log(data))
//     .catch((e)=> console.log(e));
//  })();

// without using tehn and catch
// (async () => {

//    try{
//       const users = await getUsers();

//       const post = await getPost(1);
   
//       console.log(users);
//       console.log(post); 
//    }catch(e){
//       console.log(e);
//    }
// })();

Promise.all([getUsers(), getPost(1)])
.then(console.log)
.catch(console.log);

