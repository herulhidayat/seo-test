import { getMultiColorsChart } from '@app/config/charts/chart-colors.config';
import { IChartParser } from '@app/interface/chart/chart-parser.interface';
import { capitalize, get, size, startCase, toLower, upperCase } from 'lodash';
import { getColorVarCss } from '../color.helper';
import { replaceAll } from '../string.helper';

const color = {
  negative: getColorVarCss('--negative'),
  positive: getColorVarCss('--positive'),
  neutral: getColorVarCss('--neutral'),
};

export const getChartOptionsPie = (datas: any, name = 'Pie Chart') => {
  const data = datas?.data;
  const value = data?.map((d: any) => {
    const c = get(color, d?.name);
    return {
      value: d?.value,
      name: d?.name,
      itemStyle: { color: c ? c : undefined },
    };
  });

  return size(value) > 0
    ? {
        tooltip: {
          trigger: 'item',
          formatter: function (params: any) {
            return `${params.seriesName}<br />
              ${params.name}: ${params.percent}%`;
          },
        },
        legend: {
          align: 'left',
          orient: 'vertical',
          left: '40%',
          top: '14%',
        },
        series: [
          {
            name: name,
            type: 'pie',
            radius: ['60%', '85%'],
            center: ['20%', '50%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: false,
                // fontSize: '40',
                // fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: value,
          },
        ],
      }
    : {};
};

export const getChartOptionsPie2 = ({
  series,
  name = 'Data',
  legend = {},
}: any) => {
  const seriesData = series?.data;
  const data = seriesData
    ?.map((d: any) => {
      return { ...d, name: upperCase(d?.name) };
    })
    .sort(function (a: any, b: any) {
      return parseFloat(b.value) - parseFloat(a.value);
    });
  const colors = getMultiColorsChart(Math.floor(data?.length / 5) + 1);
  const value = data?.map((d: any, i: number) => {
    return {
      value: d?.value,
      name: capitalize(replaceAll(d?.name, { total_: '' })),
      itemStyle: { color: colors[i] },
      label: {
        show: i > 10 ? false : true,
      },
    };
  });

  return size(value) > 0
    ? {
        tooltip: {
          trigger: 'item',
          formatter: function (params: any) {
            return `${params.seriesName}<br />
              ${params.name}: ${params.percent}%`;
          },
        },
        legend: {
          show: false,
          // align: 'left',
          // orient: 'vertical',
          // left: '40%',
          // top: '14%',
          bottom: '0',
          type: 'scroll',
          ...legend,
        },
        series: [
          {
            name: name,
            type: 'pie',
            radius: ['45%', '70%'],
            center: ['50%', legend?.show ? '40%' : '50%', '50%', '50%'],
            avoidLabelOverlap: false,
            label: {
              show: true,
            },
            labelLine: {
              show: true,
              length: 5,
            },
            data: value,
          },
        ],
      }
    : {};
};

export const getChartOptionsPieSentiment = ({
  series = [],
  name = 'Sentiment',
}: any) => {
  const data = series?.data;
  const value = data?.map((d: any) => {
    const c = get(color, d?.name);
    return {
      value: d?.value,
      name: startCase(d?.name),
      itemStyle: { color: c ? c : undefined },
    };
  });
  return size(value) > 0
    ? {
        tooltip: {
          trigger: 'item',
          formatter: function (params: any) {
            return `${params.seriesName}<br />
              ${params.name}: ${params.percent}%`;
          },
        },
        legend: {
          show: false,
        },
        series: [
          {
            name: name,
            type: 'pie',
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            label: {
              overflow: 'breakAll',
              lineHeight: 12,
              color: getColorVarCss('--black-800'),
            },
            labelLine: {
              show: true,
              length: 3,
            },
            data: value,
          },
        ],
      }
    : {};
};

/** CHART DATA */
export const getChartOptionsPieChartData = ({
  series,
  name = 'Data',
  customOptions = {
    grid: {},
    legend: {},
    tooltip: {},
    xAxis: {},
    yAxis: {},
    label: {},
  },
}: IChartParser) => {
  const seriesData = series?.data;
  const data = seriesData
    ?.map((d: any) => {
      return { ...d, name: upperCase(d?.name) };
    })
    .sort(function (a: any, b: any) {
      return parseFloat(b.value) - parseFloat(a.value);
    });
  const colors = getMultiColorsChart(Math.floor(data?.length / 5) + 1);
  const value = data?.map((d: any, i: number) => {
    return {
      value: d?.value,
      name: startCase(toLower(replaceAll(d?.name, { total_: '' }))),
      itemStyle: { color: colors[i] },
      // label: {
      //   show: i > 10 ? false : true,
      // },
    };
  });

  return size(value) > 0
    ? {
        tooltip: {
          trigger: 'item',
          formatter: function (params: any) {
            return `${params.seriesName}<br />
              ${params?.marker} ${params.name}: (${params?.value}) ${params.percent}%`;
          },
          ...customOptions?.tooltip,
        },
        legend: {
          show: false,
          bottom: '0',
          type: 'scroll',
          ...customOptions?.legend,
        },
        series: [
          {
            name: name,
            type: 'pie',
            radius: ['45%', '70%'],
            center: [
              '50%',
              customOptions?.legend?.show ? '40%' : '50%',
              '50%',
              '50%',
            ],
            avoidLabelOverlap: true,
            label: {
              overflow: 'truncate',
              lineHeight: 12,
              color: getColorVarCss('--black-600'),
              ...customOptions?.label,
            },
            labelLine: {
              show: true,
              length: 5,
            },
            itemStyle: {
              borderColor: getColorVarCss('--white'),
              borderWidth: 3,
            },
            data: value,
          },
        ],
      }
    : {};
};
