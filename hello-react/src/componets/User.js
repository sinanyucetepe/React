function User({name, surname, isLoggedIn, age}) {
    return (
    <h1>
        {
            isLoggedIn ? `${name} ${surname} (${age})`  : "You did not login"
        }
         {isLoggedIn} </h1>
    );
}
export default User;