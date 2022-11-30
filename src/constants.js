export const StaticPageRoutePrefix = '/page'
export const CfpRoute = {
  to: `${StaticPageRoutePrefix}/cfp`,
  label: 'Call for papers',
  contentUrl: [process.env.REACT_APP_API_ROOT, process.env.REACT_APP_PAGES_CFP_URL].join(''),
}
export const TeamRoute = {
  to: `${StaticPageRoutePrefix}/team`,
  label: 'Team',
  contentUrl: [process.env.REACT_APP_API_ROOT, process.env.REACT_APP_PAGES_TEAM_URL].join(''),
}

export const AboutRoute = {
  to: `${StaticPageRoutePrefix}/about`,
  label: 'About',
  contentUrl: [process.env.REACT_APP_API_ROOT, process.env.REACT_APP_PAGES_ABOUT_URL].join(''),
}

export const GuidelinesRoute = {
  to: `${StaticPageRoutePrefix}/guidelines`,
  label: 'Guidelines',
  contentUrl: [process.env.REACT_APP_API_ROOT, process.env.REACT_APP_PAGES_GUIDELINES_URL].join(''),
}

export const ZeitschieneRoute = {
  to: `${StaticPageRoutePrefix}/zeitschiene`,
  label: 'Zeitschiene',
  contentUrl: [process.env.REACT_APP_API_ROOT, process.env.REACT_APP_PAGES_ZEITSCHIENE_URL].join(
    '',
  ),
}

export const KomiteeAndTeamRoute = {
  to: `${StaticPageRoutePrefix}/komitee_and_team`,
  label: 'Komitee and team',
  contentUrl: [process.env.REACT_APP_API_ROOT, process.env.REACT_APP_PAGES_KOMITEEANDTEAM_URL].join(
    '',
  ),
}

export const ConferenceHighlightsRoute = {
  to: `${StaticPageRoutePrefix}/conf_highlights`,
  label: 'Conference highlights',
  contentUrl: [process.env.REACT_APP_API_ROOT, process.env.REACT_APP_PAGES_CONFHIGLIGHTS_URL].join(
    '',
  ),
}

export const ClosingKeynoteRoute = {
  to: `${StaticPageRoutePrefix}/closing_keynote`,
  label: 'Closing keynote',
  contentUrl: [process.env.REACT_APP_API_ROOT, process.env.REACT_APP_PAGES_CLOSINGKEYNOTE_URL].join(
    '',
  ),
}

export const StaticPagesRoutes = [
  CfpRoute,
  TeamRoute,
  GuidelinesRoute,
  KomiteeAndTeamRoute,
  ConferenceHighlightsRoute,
  AboutRoute,
  ZeitschieneRoute,
  ClosingKeynoteRoute,
]
export const StaticPagesRoutesPathnames = StaticPagesRoutes.map((route) => route.to)
