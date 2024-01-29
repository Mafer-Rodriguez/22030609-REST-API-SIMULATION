const users = ["Mont", "Carlos", "Sofia", "Victor"];
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

//getUser, takes one username and return it if exists.
const getUser = (userName) => {
  try {

    // Early return guard clauses
    if (!userName) {
      return sendReponse(400);
    }

    const userIndex = users.indexOf(userName);

    if (userIndex >= 0) {
      const user = users.at(userIndex);//at is a method that returns the element at the specified index

      return sendReponse(200, user);
    }

    return sendReponse(404);
  } catch (error) {
    return sendReponse(500, error);
  }
};

console.log(getUser("Mont"));


//getUsers, return all existing users
const getAllUsers = () => {// remenber => is the arrow function, it is a shorter way to write a function
  try {
    if (users.length > 0) {//length method returns the number of elements in the array  
      return sendReponse(200, users);
    }

    return sendReponse(404);
  } catch (error) {
    return sendReponse(500, error);
  }
};
console.log(getAllUsers());

//addUser, adds a new user to the users array and return the user created, all users in new array and the user created
const addUser = (newUser) => {
  try {
    if (users.push(newUser)) {
      return sendReponse(200, users);
    }

    return sendReponse(404);
  } catch (error) {
    return sendReponse(500, error);
  }
};
console.log(addUser("Jacob"));

//removeUserByIndex, takes an index and, if found, removes the element from the array, it returns the deleted element and the new array.
const removeUserByIndex = (index) => {
  try {
    if (index >= 0 && index < users.length) {
      const user = users.splice(index, 1);//splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
      return sendReponse(200, user);
    }

    return sendReponse(404);
  } catch (error) {
    return sendReponse(500, error);
  }
};
console.log(removeUserByIndex(2));
console.log("New array: "+ users);

