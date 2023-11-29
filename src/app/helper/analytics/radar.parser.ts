import { get, head, maxBy, size, startCase } from 'lodash';
import { getColorVarCss } from '../color.helper';

export const getChartOptionsRadar = (datas: any) => {
  const data = datas?.data;
  const info = head(datas?.info)
  const max: any = maxBy(data, 'value');

  const indicator = data?.map((d: any) => {
    return { name: startCase(d?.name), max: get(max, 'value') };
  });

  const value = data?.map((d: any) => d?.value);

  return size(indicator) > 0 && size(value) > 0
    ? {
      tooltip: {
        trigger: 'item',
      },
      grid: {
        top: '7',
        left: '2%',
        right: '0%',
        bottom: '3%',
        containLabel: true,
      },
      radar: {
        indicator: indicator,
        radius: 85,
      },
      series: [
        {
          name: 'JAWA BARAT',
          type: 'radar',
          data: [
            {
              value: value,
              name: info || '',
              itemStyle: { color: '#0A84FF' },
            },
          ],
        },
      ],
    }
    : {};
};

function titleCase(string: any) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
export const getChartOptionsRadarPerception = (datas: any) => {
  const data = datas?.data;
  const max: any = maxBy(data, 'value');

  const indicator = data?.map((d: any) => {
    return {
      name: titleCase(d?.name),
      max: get(max, 'value'),
      color: getColorVarCss('--black'),
    };
  });

  const value = data?.map((d: any) => d?.value);

  return size(indicator) > 0 && size(value) > 0
    ? {
      tooltip: { trigger: 'item' },
      radar: {
        // shape: 'circle',
        indicator: indicator,
        radius: '75%',
        center: ['50%', '52%'],
      },
      grid: {
        top: '7',
        left: '2%',
        right: '0%',
        bottom: '3%',
        containLabel: true,
      },
      series: [
        {
          name: 'Perception  Proportion',
          type: 'radar',
          data: [
            {
              value: value,
              name: 'Perception  Proportion',
              areaStyle: {
                color: getColorVarCss('--primary'),
              },
              lineStyle: {
                color: getColorVarCss('--primary'),
                borderWidth: '2px',
              },
            },
          ],
        },
      ],
    }
    : {};
};
