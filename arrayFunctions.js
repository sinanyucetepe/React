const users = [
   {
      name: "Mehmet",
      age: 18,
   },
   {
      name: "Mehmet",
      age: 29,
   },{
      name:  "Murat",
      age: 20,
   },
];

/*
 push 
 map
 find
 filter
 some 
 every
 includes
*/
//push
// users.push('Ayse');
// users.push('Fatma');
// console.log(users)

//map

//  users.map( (item) => {
//     console.log(item.name);
//  })


//
//find 
// const result = users.find((item) => item.name=== 'Mehmet' && item.age>20);
// console.log(result);

//filter

//const filtered =users.filter((item) => item.name === 'Mehmet' && item.age<20);
// console.log(filtered)

// const filtered = users.filter(({ name, age}) => name==='Mehmet' && age<20);

// console.log(filtered)

//some
// const some =users.some(item => item.age === 18);
// console.log(some)

//every
// const every = users.every((item) => item.age >5);
// console.log(every)

//includes
const fruits = ['apple','banana','watermelon' ];

const isIncludes = fruits.includes("banana");
console.log(isIncludes)