import { ZeitschieneRoute, AboutRoute, KeynoteRoute } from './constants'
export const dataDropdown = [
  { title: 'About', link: AboutRoute.to },
  { title: 'Zeitschiene', link: ZeitschieneRoute.to },
  { title: 'Keynotes', link: KeynoteRoute.to },
  { title: 'Programmübersicht', link: '#/' },
  { title: 'Anmeldung Conftool', link: '#/' },
  { title: 'Teilnahmegebühren', link: '#/' },
  { title: 'FAQ', link: '#/' },
]

export const dataSecondaryMenu = [
  { title: 'Postersession', link: '#/' },
  { title: 'Behind the Scenes', link: '#/' },
  { title: 'BLOG', link: '#/' },
  { title: 'Kontakt', link: '#/' },
]

export const dataFooterMenu = [
  { title: 'Impressum', link: '#/' },
  { title: 'Datenschutz', link: 'https://dig-hum.de/datenschutz' },
]
