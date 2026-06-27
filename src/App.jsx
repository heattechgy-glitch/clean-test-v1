import React from 'react';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#0f172a',
        margin: 0,
        padding: 0,
      }}
    >
      <h1
        style={{
          color: '#0ea5e9',
          fontSize: '3rem',
          marginBottom: '1rem',
        }}
      >
        CleanTest
      </h1>
      <p
        style={{
          color: '#ffffff',
          fontSize: '1.25rem',
        }}
      >
        Autonomous build verified.
      </p>
    </div>
  );
}

export default App;
