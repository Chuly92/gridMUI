import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { GridOperations } from '../components/GridOperations'

export const Locations = () => {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/listAll" component={GridOperations} />
          {/* <Route exact path="/" component={ CalendarScreen } /> */}

        </Routes>
      </div>
    </Router>
  )
}
