import React from 'react'
import { BrowserRouter ,Routes, Route, Switch, Redirect } from 'react-router-dom';
import Login_Signup from './Login_Signup/Login_Signup';
import Employee_Page from './Employee_Page/Employee_Page';
import Waiting from './waiting/Waitaing';
import Products from './Products/Products';
import Test from './Test/Test';
import Accounts from './Accounts/Accounts';

function Page() {
  return (

<Routes>
    <Route path="/" element={<Login_Signup/>}/>
    <Route path="/Employee" element={<Employee_Page/>}>
        <Route path="waiting" element={<Waiting/>}>

        </Route>
        <Route path="Products" element={<Products/>}>
          
          </Route>
          <Route path="Accounts" element={<Accounts/>}>
          
          </Route>

    
</Route>
</Routes>
    )
}

export default Page