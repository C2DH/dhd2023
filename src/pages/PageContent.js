// import React, { useState } from 'react'
import CfpPage from './CfpPage.js'
import KomiteeAndTeam from './KomiteeAndTeam.js'
import { useLocation } from 'react-router-dom'
import Zeitschiene from './Zeitschiene.js'
import About from './About.js'
import Keynotes from '../components/sections/keynotes/Keynotes.js'
import Impressum from './Impressum.js'
import Location from './Location.js'
import './Page.scss'

const PageContent = ({ data }) => {
  const location = useLocation()
  if (location.pathname === '/page/about') {
    return <About data={data}></About>
  }
  if (location.pathname === '/page/cfp') {
    return <CfpPage data={data}></CfpPage>
  }
  if (location.pathname === '/page/zeitschiene') {
    return <Zeitschiene data={data}></Zeitschiene>
  }
  if (location.pathname === '/page/komitee_and_team') {
    return <KomiteeAndTeam data={data}></KomiteeAndTeam>
  }
  if (location.pathname === '/page/impressum') {
    return <Impressum data={data}></Impressum>
  }
  if (location.pathname === '/page/location') {
    return <Location data={data}></Location>
  }
  if (location.pathname === '/page/keynotes') {
    return <Keynotes data={data}></Keynotes>
  } else {
    return null
  }
}

export default PageContent
