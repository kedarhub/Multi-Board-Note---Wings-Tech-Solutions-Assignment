import React from 'react';

function StatisticsWidget({ notes }) {
  const totalNotes = notes.length;

  const calculateAverageWordCount = () => {
    const totalWordCount = notes.reduce((sum, note) => {
      const words = note.content.split(' ').length;
      return sum + words;
    }, 0);

    return totalWordCount / totalNotes;
  };

  const calculatePriorityCounts = () => {
    const priorityCounts = {
      Low: 0,
      Medium: 0,
      High: 0,
    };

    notes.forEach((note) => {
      priorityCounts[note.priority]++;
    });

    return priorityCounts;
  };

  const averageWordCount = calculateAverageWordCount();
  const priorityCounts = calculatePriorityCounts();

  return (
    <div>
      <p>Total Notes: {totalNotes}</p>
      <p>Average Word Count: {averageWordCount.toFixed(2)}</p>
      <p>Priority Counts:</p>
      <ul>
        <li>High priority: {priorityCounts.High}</li>
        <li>Medium priority: {priorityCounts.Medium}</li>
        <li>Low priority: {priorityCounts.Low}</li>
      </ul>
    </div>
  );
}

export default StatisticsWidget;
