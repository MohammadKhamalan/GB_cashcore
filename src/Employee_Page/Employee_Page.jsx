

import React, { useState } from 'react';

import Sidebar from '../Sidebar/Sidebar';
import { BrowserRouter as Router, Route,Routes, Switch, Redirect, useNavigate } from 'react-router-dom';
import Waiting from '../waiting/Waitaing';
import Products from '../Products/Products'
import Accounts from '../Accounts/Accounts'
import Navbar from '../Navbar/Navbar';
import "./Employee.scss"
function Employee_Page() {
  const [showWaiting, setShowWaiting] = useState(false);
const[showProducts,setShowProducts]=useState(false);
const[showAccounts,setShowAccounts]=useState(false);
const navigate = useNavigate();

  return (
    <div className="a">
<Navbar/>
      <Sidebar 
      setShowWaiting={setShowWaiting}
      setShowProducts={setShowProducts}
      setShowAccounts={setShowAccounts}
       />
       
      </div>
  );
}

export default Employee_Page
