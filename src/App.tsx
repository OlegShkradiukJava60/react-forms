import { useState } from 'react'

import './App.css'
import EmployeeForm from './components/employee-form/EmployeeForm'
import Employee from './model/Employee'

function App() {
 
  return (
   <EmployeeForm submitter={(empl: Employee) => console.log(empl)}/>
  )
}

export default App
