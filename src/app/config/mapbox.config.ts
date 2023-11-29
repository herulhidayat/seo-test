export const AUTH_TOKENS = {
  MAPBOX_TOKEN: process.env.REACT_APP_MapboxAccessToken, // eslint-disable-line
  DROPBOX_CLIENT_ID: process.env.DropboxClientId, // eslint-disable-line
  EXPORT_MAPBOX_TOKEN: process.env.MapboxExportToken, // eslint-disable-line
  CARTO_CLIENT_ID: process.env.CartoClientId // eslint-disable-line
};

export const MAP_STYLE_OPTIONS = [
  {
    id: 'dark',
    label: 'Dark',
    app_theme: 'dark',
    url: 'mapbox://styles/uberdata/cjoqbbf6l9k302sl96tyvka09',
    style_id: 'cjoqbbf6l9k302sl96tyvka09'
  },
  {
    id: 'light',
    label: 'Light',
    app_theme: 'light',
    url: 'mapbox://styles/uberdata/cjoqb9j339k1f2sl9t5ic5bn4',
    style_id: 'cjoqb9j339k1f2sl9t5ic5bn4'
  }
];