import {
  ZeitschieneRoute,
  AboutRoute,
  KeynoteRoute,
  ImpressumRoute,
  LocationRoute,
} from './constants'

export const dataDropdown = [
  { title: 'About', to: AboutRoute.to },
  { title: 'Zeitschiene', to: ZeitschieneRoute.to },
  { title: 'Keynotes', to: KeynoteRoute.to },
  { title: 'Programmübersicht', to: '#/' },
  { title: 'Anmeldung Conftool', to: 'https://www.conftool.net/dhd2023/', reloadDocument: true },
  {
    title: 'DHConvalidator',
    to: 'https://dh-convalidator.dhd2023.dig-hum.de/',
    reloadDocument: true,
  },
  { title: 'FAQ', to: '#/' },
  { title: 'Location', to: LocationRoute.to },
]

export const dataSecondaryMenu = [
  { title: 'Postersession', link: '#/' },
  { title: 'Behind the Scenes', link: '#/' },
  { title: 'BLOG', link: '#/' },
  { title: 'Kontakt', link: '#/' },
]

export const dataFooterMenu = [
  { title: 'Impressum', to: ImpressumRoute.to },
  { title: 'Datenschutz', to: 'https://dig-hum.de/datenschutz', reloadDocument: true },
]

export const dataLocation = [
  { location: '/' },
  { location: '/page/cfp' },
  { location: '/page/zeitschiene' },
  { location: '/page/keynotes' },
  { location: '/page/impressum' },
  { location: '/page/location' },
]
