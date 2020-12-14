import axios from 'axios';
import ApiConfig from '../config/api';

async function getPosts() {
  try {
    const { data } = await axios.get(`${ApiConfig.MAIN_ENDPOINT}/posts`);
    return data;
  } catch (error) {}

  return [];
}

async function getUsers() {
  try {
    const { data } = await axios.get(`${ApiConfig.MAIN_ENDPOINT}/users`);
    return data;
  } catch (error) {}

  return [];
}

export { getUsers, getPosts };
