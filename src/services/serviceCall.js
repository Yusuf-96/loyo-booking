export const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users'); // return Promises (async and await), resolved, pending, suspended, rejected

  if (response.status == 200) {
    const result = await response.json();
    return result;
  }

  console.log('Error on fetching data: ', { result: [] });
};
