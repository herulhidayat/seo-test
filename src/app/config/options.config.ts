export const OPTIONS_ICON_LIBRARY = () => {
  return [{ label: 'Font Awesome', value: 'fontawesome' }];
};

export const OPTIONS_ICON_TYPE = () => {
  return [
    { label: 'Solid', value: 'solid' },
    { label: 'Regular', value: 'regular' },
    { label: 'Light', value: 'light' },
    { label: 'Duotone', value: 'duotone' },
  ];
};

export const OPTIONS_COLOR_THEME = () => [
  { label: 'Enamel Blue', name: 'enamel-blue', color: '#5E5CE6' },
  { label: 'Red', name: 'red', color: '#F1416C' },
  { label: 'Orange', name: 'orange', color: '#F37916' },
  { label: 'Green', name: 'green', color: '#60BC57' },
  { label: 'Blue', name: 'blue', color: '#6F51FF' },
];

export const OPTIONS_GENDER = () => [
  { label: 'Laki-Laki', value: 'Laki-Laki' },
  { label: 'Perempuan', value: 'Perempuan' },
];

export const OPTIONS_ZONA_WAKTU = () => [
  { label: 'WIB', value: 'WIB' },
  { label: 'WITA', value: 'WITA' },
  { label: 'WIT', value: 'WIT' },
];

export const OPTIONS_HARI = () => [
  { label: 'Senin', value: 'Senin' },
  { label: 'Selasa', value: 'Selasa' },
  { label: 'Rabu', value: 'Rabu' },
  { label: 'Kamis', value: 'Kamis' },
  { label: 'Jumat', value: 'Jumat' },
  { label: 'Sabtu', value: 'Sabtu' },
  { label: 'Minggu', value: 'Minggu' },
];

export const OPTIONS_AGE_GROUP = () => [
  {
    label: '<17 tahun',
    value: JSON.stringify({
      range: {
        end: 17,
        field: 'umur',
        start: 0,
      },
    }),
  },
  {
    label: '17 - 21 tahun',
    value: JSON.stringify({
      range: {
        end: 21,
        field: 'umur',
        start: 17,
      },
    }),
  },
  {
    label: '22 - 30 tahun',
    value: JSON.stringify({
      range: {
        end: 30,
        field: 'umur',
        start: 22,
      },
    }),
  },
  {
    label: '31 - 40 tahun',
    value: JSON.stringify({
      range: {
        end: 40,
        field: 'umur',
        start: 31,
      },
    }),
  },

  {
    label: '41 - 55 tahun',
    value: JSON.stringify({
      range: {
        end: 45,
        field: 'umur',
        start: 41,
      },
    }),
  },
  {
    label: '56 - 64 tahun',
    value: JSON.stringify({
      range: {
        end: 64,
        field: 'umur',
        start: 56,
      },
    }),
  },
  {
    label: '>65 tahun',
    value: JSON.stringify({
      range: {
        end: 1000,
        field: 'umur',
        start: 65,
      },
    }),
  },
];

export const OPTION_PAGING_LIMIT = () => [
  { label: "10", value: 10 },
  { label: "15", value: 15 },
  { label: "20", value: 20 },
  { label: "25", value: 25 },
  { label: "50", value: 50 },
]