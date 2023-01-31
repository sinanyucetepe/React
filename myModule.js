 const hello = (name) => {
 console.log(`hello ${name}`)
};
 const plus = (a, b) => a+b;
 const minus = (a, b) => a-b;
 export default hello;  // if we use default to import then only one default 

 const text = 'Text';
 const user = {
    name : 'Sinan',
    surname:'Yucetepe'
};
 const users = [{
    name: 'Ahmet',
    surnmae:'Tarık' 
},{
    name:' Veli',
    surname: 'Dursun'
}
];
export { 
    plus,
    minus,
    text,
    user,
    users
};