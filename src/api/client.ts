import axios from "axios";

const API_HOST = "https://automate.cparedesr.com/api/v1/webhooks/HsgLklZ9bDiwZRNTbB3qa";

const client = axios.create({
  baseURL: API_HOST,
});

export default client;
