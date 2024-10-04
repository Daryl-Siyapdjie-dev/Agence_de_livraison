import React from 'react';

type HistoryEvent = {
  location: string;
  date: string;
  time: string;
};

const HistoryTimeline: React.FC<{ history: HistoryEvent[] }> = ({ history }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center ">Historique des localisations</h2>
      <ul className="space-y-3">
        {history.map((event, index) => (
          <li key={index} className="flex justify-between">
            <span>{event.location}</span>
            <span>{event.date} - {event.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryTimeline;
