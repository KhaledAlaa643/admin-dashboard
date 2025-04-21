import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,
  production: true,
  useFakeData: true,
  apiUrl : 'http://localhost:3000'

};
