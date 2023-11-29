import { getMultiColorsChart } from '@app/config/charts/chart-colors.config';
import { IChartParser } from '@app/interface/chart/chart-parser.interface';
import {
  capitalize,
  get,
  reverse,
  size,
  startCase,
  take,
  toLower,
  upperCase,
} from 'lodash';
import { getColorVarCss } from '../color.helper';
import { decimalNumberFormat } from '../number.helper';
import { replaceAll } from '../string.helper';

const tooltip: any = {
  axis: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  item: {
    trigger: 'item',
  },
};

export const getChartOptionsBarSeries = (datas: any, tooltipType = 'axis') => {
  const data = datas?.data;
  const legend = data?.map((c: any) => c?.name);
  const categories = datas?.info;

  const series = data?.map((l: any) => {
    return {
      name: l?.name,
      data: l?.data,
      type: 'bar',
      smooth: true,
      symbol: 'none',
      itemStyle: { barBorderRadius: [10, 10, 10, 10] }, //  color: '#0A84FF',
      // lineStyle: {
      //   color: '#0A84FF',
      //   width: 3,
      // },
    };
  });

  return {
    tooltip: tooltip[tooltipType],
    grid: {
      top: '7',
      left: '2%',
      right: '5%',
      bottom: '15%',
      containLabel: true,
    },
    legend: {
      data: legend,
      bottom: '0%',
      type: 'scroll',
    },
    xAxis: {
      type: 'category',
      data: categories,
      splitLine: { show: false },
      axisLine: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          dashOffset: 10,
          type: 'dotted',
        },
      },
    },
    series: series,
  };
};

export const getBarChartOptionsHashtags = (
  datas: any,
  tooltipType = 'axis'
) => {
  const data = datas?.data;
  const legend = data?.map((c: any) => c?.name);
  const dataSeries = data?.map((c: any) => c?.value);
  return {
    tooltip: tooltip[tooltipType],
    grid: {
      top: '7',
      left: '2%',
      right: '0%',
      bottom: '5%',
      containLabel: true,
    },
    legend: {
      show: false,
    },
    xAxis: {
      type: 'category',
      data: legend,
      splitLine: { show: false },
      axisLine: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          dashOffset: 10,
          type: 'dotted',
        },
      },
    },
    series: [
      {
        data: dataSeries,
        type: 'bar',
        itemStyle: {
          color: getColorVarCss('--primary'),
        },
      },
    ],
  };
};

export const getChartOptionsBarHorizontalAnySeries = (datas: any) => {
  const data = datas?.data;
  const legend = data?.map((c: any) => c?.name);
  const categories = datas?.info;

  const series = data?.map((l: any, i: number) => {
    const color = getMultiColorsChart(Math.floor(data?.length / 5) + 1);

    return {
      name: l?.name,
      data: l?.data,
      type: 'bar',
      stack: 'total',
      label: {
        show: false,
      },
      emphasis: {
        focus: 'series',
      },
      itemStyle: {
        color: color[i],
      },
    };
  });

  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
      },
    },
    legend: {
      data: legend,
      bottom: '0%',
      type: 'scroll',
    },
    grid: {
      top: '7',
      left: '2%',
      right: '5%',
      bottom: '10%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
    },
    yAxis: {
      type: 'category',
      axisLine: { show: false },
      data: categories,
      splitLine: {
        show: false,
      },
      axisTick: { show: false },
    },
    series: series,
  };
};

export const getChartOptionsBarStackedHorizontalSentimentSeries = (
  datas: any
) => {
  const data = datas?.data;
  const legend = data?.map((c: any) => startCase(c?.name)) || [];

  const categories = datas?.info?.map((item: any) =>
    startCase(toLower(replaceAll(item, { _: ' ' })))
  );

  const series = data?.map((l: any) => {
    const color = {
      Negative: getColorVarCss('--negative'),
      Positive: getColorVarCss('--positive'),
      Neutral: getColorVarCss('--neutral'),
    };

    return {
      name: startCase(l?.name),
      data: reverse(l?.data),
      type: 'bar',
      stack: 'total',
      label: {
        show: false,
      },
      emphasis: {
        focus: 'series',
      },
      itemStyle: {
        color: get(color, l?.name),
      },
    };
  });

  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
      },
    },
    legend: {
      data: reverse(legend),
      bottom: '0%',
      type: 'scroll',
    },
    grid: {
      top: '7',
      left: '2%',
      right: '2%',
      bottom: '15%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
    },
    yAxis: {
      type: 'category',
      axisLine: { show: false },
      data: reverse(categories),
      splitLine: {
        show: false,
      },
      axisTick: { show: false },
    },
    series: reverse(series),
  };
};

export const getChartOptionsBarHorizontalPartySwitching = (datas: any) => {
  const data = datas?.data;
  const categories = data?.map((c: any) => c?.name);
  const legend = datas?.info;
  const color = getMultiColorsChart(Math.floor(legend?.length / 5) + 1);
  const series = legend?.map((l: any, i: number) => {
    const datas = data?.map((ds: any) => ds?.data[i]);
    return {
      name: l,
      data: reverse(datas),
      type: 'bar',
      label: {
        show: false,
      },
      emphasis: {
        focus: 'series',
      },
      itemStyle: {
        color: color[i],
      },
    };
  });

  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: { show: true },
    grid: {
      left: '3%',
      right: '3%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
      splitLine: {
        lineStyle: { type: 'dotted', color: getColorVarCss('--black-100') },
      },
    },
    yAxis: {
      type: 'category',
      data: reverse(categories),
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        width: 99,
      },
      splitLine: {
        lineStyle: { type: 'dotted', color: getColorVarCss('--black-100') },
      },
    },
    series: reverse(series),
  };
};

/** CHART DATA */
export const getChartOptionsBarChartData = ({
  series,
  name = 'Data',
  color = 'repeat',
  orientation = 'horizontal',
  customOptions = {
    grid: {},
    legend: {},
    tooltip: {},
    valueAxis: {},
    categoryAxis: {},
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
  const categories = data?.map((c: any) => c?.name);
  const colors = getMultiColorsChart(Math.floor(data?.length / 5) + 1);
  const value = data?.map((d: any, i: number) => {
    return {
      value: d?.value,
      name: capitalize(replaceAll(d?.name, { total_: '' })),
      itemStyle: {
        color: color == 'single' ? getColorVarCss('--primary') : colors[i],
      },
      label: {
        show: false,
      },
    };
  });
  const categoryAxis = {
    type: 'category',
    data: categories,
    splitLine: { show: false },
    axisLine: {
      show: false,
    },
    inverse: orientation == 'horizontal' ? true : false,
    ...customOptions?.categoryAxis,
  };

  const valueAxis = {
    type: 'value',
    axisLine: {
      show: false,
    },
    axisLabel: {
      show: true,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: true,
      lineStyle: {
        dashOffset: 10,
        type: 'dotted',
      },
    },
    ...customOptions?.valueAxis,
  };

  return size(value) > 0
    ? {
        tooltip: {
          trigger: 'item',
          ...customOptions?.tooltip,
        },
        legend: {
          show: false,
          bottom: '0',
          type: 'scroll',
          ...customOptions?.legend,
        },
        grid: {
          top: '7',
          left: '2%',
          right: '5%',
          bottom: customOptions?.legend?.show ? '15%' : '3%',
          containLabel: true,
          ...customOptions?.grid,
        },
        yAxis: orientation == 'horizontal' ? categoryAxis : valueAxis,
        xAxis: orientation == 'horizontal' ? valueAxis : categoryAxis,
        series: [
          {
            name: name,
            type: 'bar',
            radius: ['45%', '70%'],
            center: [
              '50%',
              customOptions?.legend?.show ? '40%' : '50%',
              '50%',
              '50%',
            ],
            avoidLabelOverlap: false,
            label: {
              show: false,
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

/** CHART DATA MULTILINE */
export const getChartOptionsBarMultiChartData = ({
  series,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  name = 'Data',
  limit,
  color = 'repeat',
  orientation = 'horizontal',
  stack = '',
  customOptions = {
    grid: {},
    legend: {},
    tooltip: {},
    valueAxis: {},
    categoryAxis: {},
  },
}: IChartParser) => {
  const data = limit ? take(series?.data, limit) : series?.data;
  const colors =
    color == 'repeat'
      ? getMultiColorsChart(Math.floor(data?.length / 5) + 1)
      : getColorVarCss('--primary');
  const categories = limit ? take(series?.info, limit) : series?.info;
  const seriesData = data?.map((l: any, i: number) => {
    return {
      name: capitalize(replaceAll(l?.name, { _: ' ' })),
      data: l?.data?.map((v: any) => decimalNumberFormat(v, 2)),
      type: 'bar',
      stack: stack,
      smooth: true,
      symbol: 'none',
      // itemStyle: { barBorderRadius: [10, 10, 10, 10] },
      color: colors[i],
    };
  });

  const categoryAxis = {
    type: 'category',
    data: categories,
    splitLine: { show: false },
    axisLine: {
      show: false,
    },
    inverse: orientation == 'horizontal' ? true : false,
    ...customOptions?.categoryAxis,
  };

  const valueAxis = {
    type: 'value',
    axisLine: {
      show: false,
    },
    axisLabel: {
      show: true,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: true,
      lineStyle: {
        dashOffset: 10,
        type: 'dotted',
      },
    },
    ...customOptions?.valueAxis,
  };

  return size(seriesData) > 0
    ? {
        tooltip: {
          trigger: 'item',
          ...customOptions?.tooltip,
        },
        legend: {
          show: false,
          bottom: '0',
          type: 'scroll',
          ...customOptions?.legend,
        },
        grid: {
          top: '7',
          left: '2%',
          right: '3%',
          bottom: customOptions?.legend?.show ? '15%' : '3%',
          containLabel: true,
          ...customOptions?.grid,
        },
        yAxis: orientation == 'horizontal' ? categoryAxis : valueAxis,
        xAxis: orientation == 'horizontal' ? valueAxis : categoryAxis,
        series: seriesData,
      }
    : {};
};
