import axios from 'axios';

async function getPosts() {
  try {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    console.log('getPosts -> data', data);
    return data;
  } catch (error) {
    console.log(error);
  }

  return [];
}

async function getUsers() {
  try {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    console.log('getUsers -> data', data);
    return data;
  } catch (error) {
    console.log(error);
  }

  return [];
}

export { getUsers, getPosts };
