import axios from 'axios';

const TOKEN = 'rhhrmjvdvcv0ka4e6ouao9a1gj42fbjim5bcu60f';

const INSTANCE = axios.create({
  baseURL: 'https://api.json-generator.com/templates/',
  timeout: 5000,
  headers: { Authorization: `Bearer ${TOKEN}` },
});

export default INSTANCE;
