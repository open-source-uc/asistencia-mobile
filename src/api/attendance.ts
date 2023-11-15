import client from "./client";

async function takeAttendance(
  data: Object,
  courseId: string,
  activitySlug: string
) {
  await client.post(
    `/courses/${courseId}/activities/${activitySlug}/attendances/`,
    data
  );
}

export { takeAttendance };
