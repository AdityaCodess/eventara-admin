"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React, { useState } from 'react';
import clsx from "clsx";
import RotatingText from '@/components/ui/RotatingText';

// Import images properly from src/app/images
import techEventImage from '@/app/images/tech_event.jpeg';
import hackathonImage from '@/app/images/hackathon.png';
import festImage from '@/app/images/fest.jpeg';

export default function OrganizerPage() {
    const [showForm, setShowForm] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState("");

    const handleCreateClick = (title) => {
        setSelectedEvent(title);
        setShowForm(true);
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col items-center bg-black-100 py-12 px-6">
                <RotatingText
                    texts={["Host Your Event", "Plan with Ease", "Create Memorable Moments"]}
                    mainClassName={clsx(
                        "text-white text-[5rem] font-light flex items-center gap-4",
                        "hostevent-heading",
                        ["text-[#34D399] text-5xl opacity-80 animate-pulse"],
                        ["absolute inset-0 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.15)_2px,transparent_1px)] bg-[size:40px_40px] opacity-30"],
                        ["relative w-full h-[100vh] flex flex-col justify-center items-center overflow-hidden bg-[#121b22]"]
                    )}
                    staggerFrom="last"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}  
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                />

                {/* Event Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <EventCard 
                        title="Tech Conference"
                        description="Host an engaging technology event with expert speakers and workshops."
                        image={techEventImage}
                        onCreate={handleCreateClick}
                    />
                    <EventCard 
                        title="Hackathon"
                        description="Organize a coding competition and bring together innovative minds."
                        image={hackathonImage}
                        onCreate={handleCreateClick}
                    />
                    <EventCard 
                        title="Club Festival"
                        description="Set up a live club event and create unforgettable experiences."
                        image={festImage}
                        onCreate={handleCreateClick}
                    />
                </div>

                {/* Event Creation Form (Only shows when "Create Event" is clicked) */}
                {showForm && (
                    <div className="mt-8 w-full max-w-lg bg-white p-6 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Create {selectedEvent}
                        </h2>
                        <form onSubmit={(e) => { e.preventDefault(); setShowForm(false); }}>
                            <label className="block text-gray-700">Event Name:</label>
                            <input 
                                type="text" 
                                className="w-full border rounded-lg px-4 py-2 mb-3" 
                                placeholder="Enter event name"
                            />

                            <label className="block text-gray-700">Date & Time:</label>
                            <input 
                                type="datetime-local" 
                                className="w-full border rounded-lg px-4 py-2 mb-3"
                            />

                            <label className="block text-gray-700">Description:</label>
                            <textarea 
                                className="w-full border rounded-lg px-4 py-2 mb-3"
                                placeholder="Enter event details"
                            ></textarea>

                            <button 
                                type="submit" 
                                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
                            >
                                Submit Event
                            </button>
                        </form>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}

// ✅ Event Card Component
const EventCard = ({ title, description, image, onCreate }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
            <img src={image.src} alt={title} className="w-full h-52 object-cover" />
            <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
                <p className="text-gray-600 mt-2">{description}</p>
                <button 
                    onClick={() => onCreate(title)}
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
                >
                    Create Event
                </button>
            </div>
        </div>
    );
};
