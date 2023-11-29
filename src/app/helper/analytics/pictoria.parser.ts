import { getColorVarCss } from '@app/helper/color.helper';
import { get } from 'lodash';
import { formatThousand } from '../number.helper';

export const pathSymbols = {
  islam: 'image:///static/img/religion/islam.svg',
  kristen: 'image:///static/img/religion/christian.svg',
  katholik: 'image:///static/img/religion/christian.svg',
  hindu: 'image:///static/img/religion/hindu.svg',
  budha: 'image:///static/img/religion/budha.svg',
  konghucu: 'image:///static/img/religion/konghuchu.svg',
};

export const getChartOptionPictoriaBar = ({ series }: any) => {
  const sd = series?.data?.sort(function (a: any, b: any) {
    return parseFloat(b.value) - parseFloat(a.value);
  });
  const categories = sd?.map((sd: any) => sd?.name);
  const seriesData = sd?.map((s: any) => {
    return {
      value: s?.value,
      symbol: get(pathSymbols, s?.name?.toLowerCase()),
      symbolSize: [32, 32],
    };
  });

  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none',
      },
      formatter: function (params: any) {
        return params[0].name + ': ' + formatThousand(params[0].value);
      },
    },
    xAxis: {
      data: categories,
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: {
        color: getColorVarCss('--primary'),
      },
    },
    yAxis: {
      splitLine: { show: false },
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: { show: false },
    },
    color: [getColorVarCss('--primary')],
    series: [
      {
        name: 'hill',
        type: 'pictorialBar',
        barCategoryGap: '-130%',
        // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        itemStyle: {
          opacity: 0.5,
        },
        emphasis: {
          itemStyle: {
            opacity: 1,
          },
        },
        data: seriesData?.map((s: any) => s?.value),
        z: 10,
      },
      {
        name: 'glyph',
        type: 'pictorialBar',
        barGap: '-100%',
        symbolPosition: 'end',
        symbolSize: 50,
        symbolOffset: [0, '-120%'],
        data: seriesData,
      },
    ],
  };
};
