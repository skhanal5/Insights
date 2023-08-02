// Dot.js
import React from 'react';

const Dot = ({ color = 'bg-gray-500' }) => (
  <div className={`h-2 w-2 rounded-full ${color}`} />
);

export default Dot;