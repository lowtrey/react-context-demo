import React from 'react';
import Form from './Form';
import Navbar from './Navbar';
import PageContent from './PageContent';
import './App.css';

function App() {
  return (
    <PageContent>
      <Navbar />
      <Form />
    </PageContent>
  );
}

export default App;
