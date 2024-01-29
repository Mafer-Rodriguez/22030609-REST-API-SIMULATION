//takes one username and return it if exists.
const username=["Maricruz","Lorena","Camila","Brandon"]
function sendReponse(code, body = null) {
  const response = {
    code,
    body,
  };

  switch (code) {
    case 200:
      response.msg = "Ok";
      break;
    case 400:
      response.msg = "Endpoint not valid";
      break;
    case 404:
      response.msg = "Not found";
      break;
    case 500:
      response.msg = "Internal Server Error";
      break;
    default:
      response.msg = "Unknown status code";
  }

  return response;
}


function getUser(getUser){
  if(username.includes(getUser)){
    const user = getUser;
    return sendReponse(200 , user);
  }
  else{
    return sendReponse(404);
  }
}

console.log(getUser("Lorena"));

//return all existing users

function getAllUsers(getAllUser){
  if (username.length > 0){//length method returns the number of elements in the array
    //return username;
    const user = username;
    return sendReponse(200 , user);
  }else{
    return sendReponse(404);
  }
}  

console.log(getAllUsers(username ));

//adds a new user to the users array and return the user created, all users in new array and the user created

function addUser (newUser){
  if (username.push(newUser)){//remember to push the new user or agree a new element to the array
  return sendReponse(200 , username)  ;
}else {
  return sendReponse(404);
}
}
console.log("New user added: ")
console.log(addUser("Avril"));



//takes an index and, if found, removes the element from the array, it returns the deleted element and the new array.

const myIndex=["Maricruz","Lorena","Camila","Brandon"];

function removeUserByIndex(index){
  if(index >= 0 && index < myIndex.length){//if the index is greater than 0 and less than the length of the array
    const indexRemoved = myIndex.splice(index, 1);//splice method removes the element from the array
    return sendReponse(200 , indexRemoved); 
  } else {
     return sendReponse(404)
  }
}

console.log(removeUserByIndex(2));
console.log(myIndex);


// removes the last element from the array, it returns the deleted element and the new array.
function removeLastUser(removeLastUser){//I think that in this part it does not have a parameter for the function 
  //the array utilizes is the username, echo and used previously
  if( lastUser = username.pop()){
    return lastUser;//in this part the pop method removes the last element from the array
  }else {
    return sendReponse(404)
  }
  
}
console.log("Last user removed: ");
console.log(removeLastUser(username));  
console.log("New array: " + username);


//Removes the first element from the array, it returns the deleted element and the new array.
console.log("Remove the first element from the array");
function removeFirstUser(removeFirstUser){
  // shift can also be used to remove an element from the array, such as at position two or so.(epecific position)
  if( firstUser = username.shift()){// in this part the shift method removes the first element from the array
  return sendReponse(200 , firstUser);
  }else {
    return sendReponse(404)
  }
}
console.log(removeFirstUser(username));
console.log("New array: " + username);


//updateUserByIndex, takes the index and the new value, if index exists then replace the element with the new value.
console.log("Update user by index");
function updateUserByIndex(index, newValue){
  console.log(myIndex);
  if(index >= 0 && index < myIndex.length){//if the index is greater than 0 and less than the length of the array
    myIndex[index] = newValue;//the index is equal to the new value
    return sendReponse(200 , myIndex) ;
  } else {
    return sendReponse(404) ;
  }
}
console.log(updateUserByIndex(2, "Avril"));//the index 2 is replaced by the new value Avril, remember that the index starts from 0
console.log("New array is : "+myIndex);//the new array is printed

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


