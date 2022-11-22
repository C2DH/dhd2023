export const StaticPageRoutePrefix = '/page'
export const CfpRoute = {
  to: `${StaticPageRoutePrefix}/cfp`,
  label: 'Call for Papers',
  contentUrl: [process.env.REACT_APP_API_ROOT, process.env.REACT_APP_PAGES_CFP_URL].join(''),
}
export const TeamRoute = {
  to: `${StaticPageRoutePrefix}/team`,
  label: 'Team',
  contentUrl: [process.env.REACT_APP_API_ROOT, process.env.REACT_APP_PAGES_TEAM_URL].join(''),
}

export const ConferenceHighlightsRoute = {
  to: `${StaticPageRoutePrefix}/conf_highlights`,
  label: 'Conference Highlights',
  contentUrl: [process.env.REACT_APP_API_ROOT, process.env.REACT_APP_PAGES_CONFHIGLIGHTS_URL].join(
    '',
  ),
}

export const StaticPagesRoutes = [CfpRoute]
export const StaticPagesRoutesPathnames = StaticPagesRoutes.map((route) => route.to)
