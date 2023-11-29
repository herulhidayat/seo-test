import React, { useState } from 'react';
import Echart from '@app/components/Visualization/Echart';
import {
  getChartOptionsBarChartData,
  getChartOptionsBarMultiChartData,
} from '@app/helper/analytics/bar.parser';
import {
  getChartOptionsLineChartData,
  getChartOptionsLineMultiChartData,
} from '@app/helper/analytics/line.parser';
import { IEchartOptions } from '@app/interface/chart/echart-options.interface';
import useApiRequest from '@app/services/useApiRequest.hooks';
import { getChartOptionsPieChartData } from '@app/helper/analytics/pie.parser';
import { getChartOptionsRadar } from '@app/helper/analytics/radar.parser';
import { get } from 'lodash';

const parserType: any = {
  line: {
    flat: getChartOptionsLineChartData,
    multiSeries: getChartOptionsLineMultiChartData,
  },
  bar: {
    flat: getChartOptionsBarChartData,
    multiSeries: getChartOptionsBarMultiChartData,
  },
  pie:{
    default: getChartOptionsPieChartData
  },
  radar:{
    default: getChartOptionsRadar
  }
};

export default function ChartData({
  name = 'Chart Title',
  url,
  params = {},
  options = {},
  parser,
  orientation = 'horizontal',
  color = 'repeat',
  limit
}: IChartData) {

  /** REQ DATA */
  const [reqParams, ] = useState<any>({
    ...params,
  });

  const apiRequest = useApiRequest({
    url: url || '',
    method: 'POST',
    params: reqParams,
  });

  return (
    <Echart
      options={get(parserType, parser)({ 
        series: apiRequest?.response,
        name: name,
        color: color,
        orientation: orientation,
        limit:limit,
        customOptions: { legend: { show: false }, ...options },
      })}
      isLoading={apiRequest.loading}
      isNoData={apiRequest.noData}
    ></Echart>
  );
}

interface IChartData {
  name?: string;
  isLocationFilter?: boolean;
  url: string | '';
  parser: 'line.flat' | 'line.multiSeries' | 'bar.flat' | 'bar.multiSeries' | 'pie.default' | 'radar.default';
  orientation?: 'vertical' | 'horizontal';
  params?: any;
  limit?: number;
  color?: 'repeat' | 'single';
  options?: IEchartOptions;
}
