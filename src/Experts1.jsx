import React from 'react';
import {expertsData} from './data';
import Expert from './Expert';

function Experts1() {
  return (
    <ul style={{ listStyleType: 'disc' }}>
      {expertsData.map((expert) => (
        <Expert key={expert.id} expert={expert} />
      ))}
    </ul>
  );
}

export default Experts1;