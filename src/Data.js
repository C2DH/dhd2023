import {
  ZeitschieneRoute,
  AboutRoute,
  KeynoteRoute,
  ImpressumRoute,
  LocationRoute,
} from './constants'

export const dataDropdown = [
  { title: 'About', link: AboutRoute.to },
  { title: 'Zeitschiene', link: ZeitschieneRoute.to },
  { title: 'Keynotes', link: KeynoteRoute.to },
  { title: 'Programmübersicht', link: '#/' },
  { title: 'Anmeldung Conftool', link: '#/' },
  { title: 'Teilnahmegebühren', link: '#/' },
  { title: 'FAQ', link: '#/' },
  { title: 'Location', link: LocationRoute.to },
]

export const dataSecondaryMenu = [
  { title: 'Postersession', link: '#/' },
  { title: 'Behind the Scenes', link: '#/' },
  { title: 'BLOG', link: '#/' },
  { title: 'Kontakt', link: '#/' },
]

export const dataFooterMenu = [
  { title: 'Impressum', link: ImpressumRoute.to },
  { title: 'Datenschutz', link: 'https://dig-hum.de/datenschutz' },
]

export const dataLocation = [
  { location: '/' },
  { location: '/page/cfp' },
  { location: '/page/zeitschiene' },
  { location: '/page/keynotes' },
  { location: '/page/impressum' },
  { location: '/page/location' },
]
