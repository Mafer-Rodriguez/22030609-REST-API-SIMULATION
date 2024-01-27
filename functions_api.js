//takes one username and return it if exists.
const username=["Maricruz","Lorena","Camila","Brandon"]
function getUser(getUser){
  if(username.includes(getUser)){
    return getUser
  }
}

console.log(getUser("Lorena"));

//return all existing users

function getAllUsers(getAllUser){//getAllUser is the parameter
  return username;
}
console.log(getAllUsers(username));

//adds a new user to the users array and return the user created, all users in new array and the user created

function addUser (newUser){
  username.push(newUser)//remember to push the new user or agree a new element to the array
  return username;
}
console.log(addUser("Avril"));