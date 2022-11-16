export const StaticPageRoutePrefix = '/page'
export const CfpRoute = {
  to: `${StaticPageRoutePrefix}/cfp`,
  label: 'Call for Papers',
  contentUrl: [process.env.REACT_APP_API_ROOT, process.env.REACT_APP_PAGES_CFP_URL].join(''),
}

export const StaticPagesRoutes = [CfpRoute]
export const StaticPagesRoutesPathnames = StaticPagesRoutes.map((route) => route.to)
