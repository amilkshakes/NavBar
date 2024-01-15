// // AppRouter.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Home';
// import MaterialUI from './MaterialUI';
// import Npm from './Npm';

// function AppRouter() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" exact component={Home} />
//         <Route path="/MaterialUI" exact component={MaterialUI} />
//         <Route path="/Npm" exact component={Npm} />
//         <Route path="*" element={Home} />
//       </Routes>
//     </Router>
//   );
// }

// export default AppRouter;

// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import MaterialUI from './MaterialUI';
import Npm from './Npm';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/MaterialUI" exact component={MaterialUI} />
        <Route path="/Npm" exact component={Npm} />
        <Route path="*" element={Home} />
      </Routes>
    </Router>
  );
}

export default AppRouter;



