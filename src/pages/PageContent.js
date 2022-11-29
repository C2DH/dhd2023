// import React, { useState } from 'react'
import CfpPage from './CfpPage.js'
import KomiteeAndTeam from './KomiteeAndTeam.js'
import { useLocation } from 'react-router-dom'
import Zeitschiene from './Zeitschiene.js'
import './Page.scss'

const PageContent = ({ data }) => {
  const location = useLocation()

  if (location.pathname === '/page/cfp') {
    return <CfpPage data={data}></CfpPage>
  }
  if (location.pathname === '/page/zeitschiene') {
    return <Zeitschiene data={data}></Zeitschiene>
  }
  if (location.pathname === '/page/komitee_and_team') {
    return <KomiteeAndTeam data={data}></KomiteeAndTeam>
  } else {
    return null
  }
}

export default PageContent
