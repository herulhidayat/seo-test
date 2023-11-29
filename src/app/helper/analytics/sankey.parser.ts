import { getMultiColorsChart } from '@app/config/charts/chart-colors.config';
import { startCase, toLower, sortedUniq } from 'lodash';
import { replaceAll } from '../string.helper';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getChartOptionSankey = ({ response }: any) => {
  const info: any = sortedUniq(response?.info || []);
  console.log(info);
  const colors = getMultiColorsChart(Math.floor(info?.length / 5) + 1);

  const data: any = info?.map((d: any, i: number) => {
    return {
      name: startCase(toLower(replaceAll(d, { 'source.': 'source . ' }))),
      itemStyle: {
        color: colors[i],
      },
    };
  });

  const links = response?.data?.map((d: any) => {
    return {
      source: startCase(
        toLower(replaceAll(d?.source, { 'source.': 'source . ' }))
      ),
      target: startCase(d?.target),
      value: d?.value,
    };
  });

  return data && links
    ? {
        series: {
          type: 'sankey',
          layout: 'none',
          emphasis: {
            focus: 'adjacency',
          },
          data: data,
          lineStyle: {
            color: 'source',
            curveness: 0.5,
          },
          links: links,
        },
      }
    : {};
};
