const date = new Date();

// Get the current time
export const time = date.toLocaleTimeString("default", {
  hour: "2-digit",
  minute: "2-digit",
});

// get the current date
export const day = date.toLocaleDateString("default", {
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
});
