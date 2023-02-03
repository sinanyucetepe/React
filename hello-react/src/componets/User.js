import PropTypes from 'prop-types';
function User({name, surname, isLoggedIn, age, friends, adress}) {
    return (
    <>
        <h1> 
        {isLoggedIn ? `${name} ${surname} (${age}) `  : "You did not login"}
        </h1>
        <h3> {adress.title} {adress.zip } </h3> <br />
        {friends && friends.map((friend) => 
            <div key={friend.id}> {friend.name} </div> )
        }            
    </>
    );
}
User.propTypes = { 
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,   
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    friends: PropTypes.array,
    adress: PropTypes.shape( {
        title: PropTypes.string,
        zip: PropTypes.number,
    }),

}
export default User;