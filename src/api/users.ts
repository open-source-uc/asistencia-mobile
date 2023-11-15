import client from "./client";

function getMe() {
  return client.get("/users/me");
}

export { getMe };
