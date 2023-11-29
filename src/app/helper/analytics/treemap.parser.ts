import { getMultiColorsChart } from '@app/config/charts/chart-colors.config';
import { replaceAll } from '../string.helper';

export const hashTagParser = (datas: any) => {
  const data = datas?.data;
  const legend = data?.map((c: any) => c?.name);
  const colors = getMultiColorsChart(Math.floor(data?.length / 5) + 1);

  const series = data?.map((d: any, i: number) => {
    return {
      name: replaceAll(d?.name, { _: ' ' }),
      value: d?.value,
      itemStyle: {
        // borderRadius: 5,
        color: colors[i],
      },
    };
  });
  return {
    zlevel: 5,
    legend: {
      show: false,
      data: legend,
    },
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        type: 'treemap',
        breadcrumb: { show: true },
        width: { width: '100%' },
        height: { height: '100%' },
        label: { fontWeight: 'bold' },
        data: series,
      },
    ],
  };
};
