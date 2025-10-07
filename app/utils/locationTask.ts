import * as TaskManager from "expo-task-manager";

export const LOCATION_TASK_NAME = "background-location-task";

TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }) => {
  if (error) {
    console.error("Background location task error:", error);
    return;
  }

  if (data) {
    const { locations } = data as any;
    console.log("📍 New background location:", locations);
    // Example: save/send data
  }
});
