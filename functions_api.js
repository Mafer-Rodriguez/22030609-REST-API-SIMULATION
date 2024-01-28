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


//takes an index and, if found, removes the element from the array, it returns the deleted element and the new array.

const myIndex=["Maricruz","Lorena","Camila","Brandon"];

function removeUserByIndex(index){
  if(index >= 0 && index < myIndex.length){//if the index is greater than 0 and less than the length of the array
    const indexRemoved = myIndex.splice(index, 1);//splice method removes the element from the array
    return indexRemoved;
  } else {
    return "User not found";
  }
}

console.log(removeUserByIndex(2));
console.log(myIndex);


// removes the last element from the array, it returns the deleted element and the new array.
function removeLastUser(removeLastUser){//I think that in this part it does not have a parameter for the function 
  //the array utilizes is the username, echo and used previously
  const lastUser = username.pop();//in this part the pop method removes the last element from the array
  return lastUser;
}
console.log(removeLastUser(username));  
console.log(username);


//Removes the first element from the array, it returns the deleted element and the new array.
function removeFirstUser(removeFirstUser){
  // shift can also be used to remove an element from the array, such as at position two or so.(epecific position)
  const firstUser = username.shift(); // in this part the shift method removes the first element from the array
  return firstUser;
}
console.log(removeFirstUser(username));
console.log(username);


//updateUserByIndex, takes the index and the new value, if index exists then replace the element with the new value.
function updateUserByIndex(index, newValue){
  console.log(myIndex);
  if(index >= 0 && index < myIndex.length){//if the index is greater than 0 and less than the length of the array
    myIndex[index] = newValue;//the index is equal to the new value
    return myIndex;
  } else {
    return "User not found";
  }
}
console.log(updateUserByIndex(2, "Avril"));//the index 2 is replaced by the new value Avril, remember that the index starts from 0
console.log(myIndex);//the new array is printed

//return the number of users in the array
function getUsersSize(getUsersSize){
  return username.length;//length method returns the number of elements in the array
  /*I think I got confused and I used an array and an index, when I think I could have used only one.*/  
  //return myIndex.length;
}
console.log("Users size: ");
console.log(getUsersSize(username));
/*console.log("Index size: ");
console.log(getUsersSize(myIndex));*/