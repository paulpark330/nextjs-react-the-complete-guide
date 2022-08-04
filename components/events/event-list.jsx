import EventItem from "./event-item";

const EventList = ({ items }) => {
  return (
    <ul>
      {items.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
};

export default EventList;
