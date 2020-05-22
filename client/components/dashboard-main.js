import React from 'react'
import { Link } from 'react-router-dom'

const DashboardMain = () => {
  return (
    <div>
      <div id="title"> Main </div>
      <Link to="/dashboard/profile/67f93347-277c-478d-b1d9-7302f7fda273"> Go To Profile </Link>
      <Link to="/dashboard"> Go to Root </Link>
    </div>
  )
}

DashboardMain.propTypes = {}

export default DashboardMain
