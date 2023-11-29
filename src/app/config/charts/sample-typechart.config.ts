export const CHART_SAMPLE = [
  {
    name: 'bar-horizontal-multiseries',
    data: '/static/json/multiseries.json',
    options: {
      legend: {},
      tooltip: {},
      dataset: {
        dimensions: [],
        source: [],
      },
      xAxis: {},
      yAxis: { type: 'category' },
      series: [{ type: 'bar' }, { type: 'bar' }],
      animation: false,
    },
  },
  {
    name: 'bar-column-multiseries',
    data: '/static/json/multiseries.json',
    options: {
      legend: {},
      tooltip: {},
      dataset: {
        dimensions: [],
        source: [],
      },
      xAxis: { type: 'category' },
      yAxis: {},
      series: [{ type: 'bar' }, { type: 'bar' }],
      animation: false,
    },
  },
  {
    name: 'line',
    data: '/static/json/multiseries.json',
    options: {
      legend: {},
      tooltip: {},
      dataset: {
        dimensions: [],
        source: [],
      },
      xAxis: { type: 'category' },
      yAxis: {},
      series: [{ type: 'line' }, { type: 'line' }],
      animation: false,
    },
  },
  {
    name: 'area',
    data: '/static/json/multiseries.json',
    options: {
      legend: {},
      tooltip: {},
      dataset: {
        dimensions: [],
        source: [],
      },
      xAxis: { type: 'category' },
      yAxis: {},
      series: [
        { type: 'line', areaStyle: {} },
        { type: 'line', areaStyle: {} },
      ],
      animation: false,
    },
  },
  {
    name: 'pie',
    data: '/static/json/singleseries.json',
    options: {
      legend: {},
      tooltip: {},
      dataset: {
        dimensions: [],
        source: [],
      },
      series: [{ type: 'pie' }],
      animation: false,
    },
  },
  {
    name: 'treemap',
    data: '',
    options: {},
  },
]
