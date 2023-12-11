// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // Import BrowserRouter
// import React, { useState,useEffect } from 'react';
// import Login from './Components/Login';
// import Signup from './Components/Signup';
// import Overlay from './Components/Overlay';
// import './Styles/App.scss';
// import Loading from './First/Logo';

// function App() {
//   const [signIn, setSignIn] = useState(true);
//   const [isLoading, setIsLoading] = useState(true);

//   const handleToggle = () => {
//     setSignIn(!signIn);
//   };

//   useEffect(() => {
//     // Simulate a 3-second loading period
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);
//   }, []);
//   const handleBackToLogin = () => {
//     setSignIn(true);
//   };
  
//   return (
//     <Router>
//     <div className="container">
//       {isLoading ? (
//         <Loading /> // Show the Loading component during loading
//       ) : (
//         <div className="form-container">
//           <Overlay show={signIn} handleSignIn={() => setSignIn(true)} handleSignUp={() => setSignIn(false)} />
//           <div className={`form login ${signIn ? 'active' : ''}`}>
//             <Login show={signIn} onToggle={handleToggle} />
//           </div>
//           <img src="logo1.png"  className="logo" />

//           <div className={`form signup ${!signIn ? 'active' : ''}`}>
//   <Signup show={!signIn} onToggle={handleToggle} onBackToLogin={handleBackToLogin} />
// </div>

//         </div>
//       )}
//     </div>
//     </Router>
//   );
// }

// export default App;
/////////////
import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Waiting from './waiting/Waitaing';
import Products from './Products/Products'
import Accounts from './Accounts/Accounts'
import Employee_Page from './Employee_Page/Employee_Page';
import Login_Signup from './Login_Signup/Login_Signup';
import Page from './Page';
function App() {

  return (
   <Page/>
  );
}

export default App;


//////////////////////////



// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import Navbar from './Navbar/Navbar';
// import Sidebar from './Sidebar/Sidebar';
// import Login from './Components/Login';
// import Signup from './Components/Signup';
// import Waiting from './waiting/Waitaing';
// import Overlay from './Components/Overlay';
// import Loading from './First/Logo';
// import './Styles/App.scss';
// import { makeRequest } from '../src/axios';

// function App() {
//   const [signIn, setSignIn] = useState(true);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleToggle = () => {
//     setSignIn(!signIn);
//   };

//   const handleLoginSuccess = async (email, password) => {
//     try {
//       const response = await makeRequest.post('http://localhost:8080/api/employee/login', {
//         email: email,
//         password: password,
//       });

//       if (response && response.status === 200) {
//         console.log('Login successful!', response.data);
//         setIsLoggedIn(true);
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       alert('Login failed. Please try again.');
//     }
//   };

//   useEffect(() => {
//     // Simulate a 3-second loading period
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);
//   }, []);

//   return (
//     <Router>
//       <div className="container">
//         {isLoading ? (
//           <Loading />
//         ) : (
//           <>
//             <div className="form-container">
//               <Overlay show={signIn} handleSignIn={() => setSignIn(true)} handleSignUp={() => setSignIn(false)} />
//               {signIn ? (
//                 <div className="form login active">
//                   <Login show={signIn} onToggle={handleToggle} onLoginSuccess={handleLoginSuccess} />
//                 </div>
//               ) : (
//                 <div className="form signup active">
//                   <Signup show={!signIn} onToggle={handleToggle} />
//                 </div>
//               )}
//               <img src="logo1.png" className="logo" />
//             </div>

//             {isLoggedIn && (
//               <div className="app">
//                 <Navbar />
//                 <Sidebar />
//                 <div className="content">
//                   <Switch>
//                     <Route exact path="/waiting">
//                       <Waiting />
//                     </Route>
//                     <Redirect to="/dashboard" />
//                   </Switch>
//                 </div>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </Router>
//   );
// }

// export default App;
