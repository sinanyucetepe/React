
function User({name, surname, isLoggedIn, age, friends}) {
    return (
    <>
        <h1> 
        {isLoggedIn ? `${name} ${surname} (${age}) `  : "You did not login"}
        </h1>

        {friends.map((friend) => 
            <div key={friend.id}> {friend.name} </div> )
        }            
    </>
    );
}
export default User;