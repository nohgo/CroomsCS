import React from 'react';

function TimelineSubtext({text, stage}) {
  return (
    <li className={stage}>
        {text.map((item, index) => <ul key={index}>{item}</ul>)}
    </li>
  );
}

export default TimelineSubtext;