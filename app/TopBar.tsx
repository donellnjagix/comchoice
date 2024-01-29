// components/TopStrip.tsx

import React from 'react';

const TopStrip: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'orange', padding: '7px', textAlign: 'center', width: '100%', position: 'fixed', top: 0, left: 0, zIndex: 1000 }}>
      Contacts: 
      {' '}
      <a href="tel:+254729304190">(+254)-729-304-190</a>
      {' | '}
      <a href="mailto:info@travauxlimited.com">info@travauxlimited.com</a>
    </div>
  );
};

export default TopStrip;