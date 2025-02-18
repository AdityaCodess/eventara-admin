import { useState } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
  });

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, eventData]);
    setEventData({ title: "", description: "", date: "", time: "", location: "" });
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Host an Event</h1>

      {/* Event Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded-lg">
        <input type="text" name="title" placeholder="Event Title" value={eventData.title} onChange={handleChange} required className="border p-2 w-full mb-2" />
        <textarea name="description" placeholder="Event Description" value={eventData.description} onChange={handleChange} required className="border p-2 w-full mb-2"></textarea>
        <input type="date" name="date" value={eventData.date} onChange={handleChange} required className="border p-2 w-full mb-2" />
        <input type="time" name="time" value={eventData.time} onChange={handleChange} required className="border p-2 w-full mb-2" />
        <input type="text" name="location" placeholder="Event Location" value={eventData.location} onChange={handleChange} required className="border p-2 w-full mb-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Create Event</button>
      </form>

      {/* Display Events */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Upcoming Events</h2>
        {events.map((event, index) => (
          <div key={index} className="bg-white p-4 my-2 shadow rounded">
            <h3 className="text-lg font-bold">{event.title}</h3>
            <p>{event.description}</p>
            <p className="text-sm text-gray-500">{event.date} at {event.time} - {event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
