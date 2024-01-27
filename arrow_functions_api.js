const getUser = (userName) => {
    try {
  
      // Early return guard clauses
      if (!userName) {
        return sendReponse(400);
      }
  
      const userIndex = users.indexOf(userName);
  
      if (userIndex >= 0) {
        const user = users.at(userIndex);
  
        return sendReponse(200, user);
      }
  
      return sendReponse(404);
    } catch (error) {
      return sendReponse(500, error);
    }
  }
  console.log(getUser("Jacob"));