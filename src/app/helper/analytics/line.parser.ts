import { replaceAll } from '../string.helper';
import { decimalNumberFormat } from '@app/helper/number.helper';
import { getMultiColorsChart } from '@app/config/charts/chart-colors.config';
import { getColorVarCss } from '../color.helper';
import { IChartParser } from '@app/interface/chart/chart-parser.interface';
import size from 'lodash/size';
import { capitalize, startCase, toLower } from 'lodash';

export const getChartOptionsAreaSeries = (datas: any) => {
  const data = datas?.data;
  const legend = data?.map((c: any) => c?.name);
  const categories = datas?.info;

  const series = data?.map((l: any) => {
    return {
      name: replaceAll(l?.name, { _: ' ' }),
      type: 'line',
      barGap: 0,
      smooth: true,
      emphasis: {
        focus: 'series',
      },
      itemStyle: { barBorderRadius: [10, 10, 0, 0] }, // color: '#0A84FF',
      data: l?.data?.map((d: any) => decimalNumberFormat(d)),
      // areaStyle: {
      //   opacity: 0.4,
      //   color: new echarts.graphic.LinearGradient(0, 0, 0, 0.9, [
      //     {
      //       offset: 0,
      //       color: 'rgba(10,132,255, 0.01)',
      //     },
      //     {
      //       offset: 1,
      //       color: 'rgb(255,255,255)',
      //     },
      //   ]),
      // },
    };
  });

  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      top: '12%',
      left: '2%',
      right: '2%',
      bottom: 0,
      containLabel: true,
    },
    legend: {
      data: legend,
      type: 'scroll',
    },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: categories,
        // axisLabel: {
        //   rotate: 60,
        // },
        axisLine: {
          show: true,
        },
        splitLine: { show: false },
      },
    ],
    yAxis: [
      {
        type: 'value',
        splitLine: { show: true },
        axisLine: {
          show: false,
        },
      },
    ],
    series: series,
  };
};

export const getChartOptionsLineChartData = ({
  series,
  customOptions = { grid: {}, legend: {}, tooltip: {}, xAxis: {}, yAxis: {} },
}: any) => {
  const data = series?.data;
  const legend = series?.info;
  const color = getMultiColorsChart(Math.floor(legend?.length / 5) + 1);
  const dataSeries = data?.map((l: any, i: number) => {
    return {
      name: capitalize(replaceAll(l?.name, { _: ' ' })),
      data: l?.data?.map((d: any) => decimalNumberFormat(d, 0)),
      type: 'line',
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
      ...customOptions?.tooltip,
    },
    legend: { show: false, ...customOptions?.legend },
    grid: {
      left: '3%',
      right: '3%',
      bottom: '3%',
      top: customOptions?.legend?.show ? '20%' : '3%',
      containLabel: true,
      ...customOptions?.grid,
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: true },
      splitLine: {
        lineStyle: { type: 'dotted', color: getColorVarCss('--black-100') },
      },
      ...customOptions?.yAxis,
    },
    xAxis: {
      type: 'category',
      data: legend,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        width: 99,
      },
      splitLine: {
        lineStyle: { type: 'dotted', color: getColorVarCss('--black-100') },
      },
      ...customOptions?.xAxis,
    },
    series: dataSeries,
  };
};

/** CHART DATA MULTILINE */
export const getChartOptionsLineMultiChartData = ({
  series,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  const data = series?.data;
  const colors =
    color == 'repeat'
      ? getMultiColorsChart(Math.floor(data?.length / 5) + 1)
      : getColorVarCss('--primary');
  const categories = series?.info;

  const seriesData = data?.map((l: any, i: number) => {
    return {
      name: startCase(toLower(replaceAll(l?.name, { _: ' ' }))),
      data: l?.data?.map((v: any) => decimalNumberFormat(v, 2)),
      type: 'line',
      smooth: false,
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
    inverse: orientation == 'vertical' ? true : false,
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
          trigger: 'axis',
          show: true,
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
          right: '0%',
          bottom: customOptions?.legend?.show ? '15%' : '3%',
          containLabel: true,
          ...customOptions?.grid,
        },
        yAxis: orientation == 'vertical' ? categoryAxis : valueAxis,
        xAxis: orientation == 'vertical' ? valueAxis : categoryAxis,
        series: seriesData,
      }
    : {};
};
