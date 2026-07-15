export const blocks = [
  {
    title: "Morning Routine",
    start: "09:00",
    end: "12:00",
  },
  {
    title: "Work Block",
    start: "12:00",
    end: "15:00",
  },
  {
    title: "Life Maintenance",
    start: "15:00",
    end: "17:00",
  },
];

export function getCurrentBlock(currentTime) {
  const currentMinutes =
    currentTime.getHours() * 60 + currentTime.getMinutes();

  for (const block of blocks) {
    const [startHour, startMinute] = block.start.split(":").map(Number);
    const [endHour, endMinute] = block.end.split(":").map(Number);

    const start = startHour * 60 + startMinute;
    const end = endHour * 60 + endMinute;

    if (currentMinutes >= start && currentMinutes < end) {
      return block.title;
    }
  }
  return "Free Time";
}