import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AuthLayout, GlobalLayout, SecurityLayout } from './layout';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalLayout>
        <Router>
          <Routes>
            <Route path="user/*" element={<AuthLayout />} />

            <Route
              path="/*"
              element={<SecurityLayout />}
              caseSensitive={false}
            />
          </Routes>
        </Router>
      </GlobalLayout>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="light"
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
