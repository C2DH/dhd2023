import {
  ZeitschieneRoute,
  // AboutRoute,
  KeynoteRoute,
  ImpressumRoute,
  LocationRoute,
  ProgrammubersichtRoute,
  RegisterRoute,
  // FaqRoute,
} from './constants'

export const dataDropdown = [
  { title: 'REGISTRIEREN', to: RegisterRoute.to },
  { title: 'Zeitschiene', to: ZeitschieneRoute.to },
  { title: 'Keynotes', to: KeynoteRoute.to },
  { title: 'Programmübersicht', to: ProgrammubersichtRoute.to },
  { title: 'Anmeldung Conftool', to: 'https://www.conftool.net/dhd2023/', reloadDocument: true },
  {
    title: 'DHConvalidator',
    to: 'https://dh-convalidator.dhd2023.dig-hum.de/',
    reloadDocument: true,
  },
  // { title: 'FAQ', to: FaqRoute.to },
  { title: 'Location', to: LocationRoute.to },
]

export const dataSecondaryMenu = [
  // { title: 'Postersession', to: '#/' },
  // { title: 'Behind the Scenes', to: '#/' },
  // { title: 'BLOG', to: '#/' },
  { title: 'Kontakt' },
]

export const dataFooterMenu = [
  { title: 'Impressum', to: ImpressumRoute.to },
  { title: 'Datenschutz', to: 'https://dig-hum.de/datenschutz', reloadDocument: true },
]

export const dataPageMenu = [
  { title: 'Montag', subTitle: '13/03' },
  { title: 'Dienstag', subTitle: '14/03' },
  { title: 'Mittwoch', subTitle: '15/03' },
  { title: 'Donnerstag', subTitle: '16/03' },
  { title: 'Freitag', subTitle: '17/03' },
]

export const dataLocationMenu = [
  { title: 'German', subTitle: 'version' },
  { title: 'English', subTitle: 'version' },
]

export const dataLocation = [
  { location: '/' },
  { location: '/page/cfp' },
  { location: '/page/zeitschiene' },
  { location: '/page/keynotes' },
  { location: '/page/impressum' },
  { location: '/page/location' },
  { location: '/page/programmubersicht' },
]
