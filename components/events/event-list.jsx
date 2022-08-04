import EventItem from "./event-item";

const EventList = ({ items }) => {
  return (
    <ul>
      {items.map((event) => (
        <EventItem />
      ))}
    </ul>
  );
};

export default EventList;
