import React from 'react';

const NoSidebarLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default NoSidebarLayout;
