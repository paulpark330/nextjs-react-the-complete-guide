export const getAllEvents = async () => {
  const response = await fetch(
    "https://nextjs-demo-30190-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
};

export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
};

export const getEventById = async (id) => {
    const allEvents = await getAllEvents();
    return allEvents.find((event) => event.id === id);
  }