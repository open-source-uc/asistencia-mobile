import client from "./client";

const endpoint = "";

const takeAttendance = (data: any) => client.post(endpoint, data);

export { takeAttendance };
