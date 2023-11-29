import { getColorVarCss } from '@app/helper/color.helper';
import { decimalNumberFormat } from '../number.helper';

const labelRight = {
  position: 'right',
};

interface IChartParams {
  series: any;
  name?: string;
}

export const getChartOptionsSingle = ({
  series,
  name = 'Volatility',
}: IChartParams) => {
  const categories = series?.map((item: any) => item?.name);
  const seriesData = series?.map((item: any) => {
    return { value: decimalNumberFormat(item?.value), label: labelRight };
  });

  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      top: '7',
      left: '2%',
      right: '5%',
      bottom: '5%',
      containLabel: true,
    },
    yAxis: {
      type: 'value',
      position: 'top',
      splitLine: {
        lineStyle: {
          type: 'dashed',
        },
      },
      axisLine: { show: false },
    },
    xAxis: {
      type: 'category',
      axisLine: { show: true },
      axisLabel: { show: true },
      axisTick: { show: false },
      splitLine: { show: false },
      data: categories,
    },
    series: [
      {
        name: name,
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          formatter: '{b}',
        },
        data: seriesData,
        itemStyle: {
          color: getColorVarCss('--primary'),
        },
      },
    ],
  };
};
