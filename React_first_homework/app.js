import axios from "axios";

const getUser = (user_id) => {
    return new Promise (async (resolve,reject) => {
        const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/"+ user_id);
        resolve(user);
        //reject(" something wrongs for users")
    })
}

const getPost =(user_id) => {
    return new Promise(async(resolve, reject) => {
        const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id);
        resolve(post);
        //reject("something wrongs for posts")
    } )
}
async function getData(user_id) {
    try{
        const user = await getUser(user_id);
        const post =await getPost(user_id);

        const array = [user,post]
        return array ;
    }
    catch(e) {
        console.log(e);
    }
}

export default getData
