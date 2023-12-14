import React from 'react';

function TimelineTitle({text, stage}) {
  return (
    <h2 className={stage}>{text}</h2>
  );
}

export default TimelineTitle;