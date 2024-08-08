import React, { Component } from 'react'
import './App.css';
import User from './component/User';
import Navbar from './component/Navbar';
 class App extends Component {
  render() {
    return (
      <div className='container'>

        <h4 className='header'>app component</h4>
        <hr />
        <Navbar title = "User app" />
        <hr />
        <User
           name = "mustafa Murat coşkun"
           department = "Bilişim"
           salary = "15000"
        />

       <User
           name = "oğuz arrtıran"
          
           salary = "60.000"
        />
      </div>
     
    )
  }
}
export default App;


