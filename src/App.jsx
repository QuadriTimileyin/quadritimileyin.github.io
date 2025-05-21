import React from 'react';
import { RouterProvider, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import { router } from './route/router';

const App = () => {
  return (
    <RouterProvider router={router}>
      <Routes>
      </Routes>
    </RouterProvider>
  );
};

export default App;