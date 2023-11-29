import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import * as echarts from 'echarts';

import langDE from 'echarts/i18n/langDE';

import { debounce, isEmpty } from 'lodash';
import { DARK_THEME, LIGHT_THEME } from '@app/config/charts/echarts-theme.config';
import { JSONtoString } from '@app/helper/data.helper';
// import Loader from '@app/components/Loader/Loader';

interface IEchartsVisualization{
  options?:any;
  isLoading?:boolean;
  isNoData?:boolean;
}
const defaultOption = {};

function EchartsVisualization({options={}, isLoading=false, isNoData=false}:IEchartsVisualization) {
  const { themeMode } = useSelector((state: any) => state.ui);
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [noData, setNoData] = useState(true);

  const [Chart, setChart] = useState<any>();
  const [chartOptions, setChartOptions] = useState(defaultOption);
  const chartRef: any = useRef<HTMLDivElement>(null);

  /** First init Chart element */
  function initChart() {
    if (Chart !== undefined) return;

    echarts.registerTheme('light', LIGHT_THEME);
    echarts.registerTheme('dark', DARK_THEME);

    const mode = themeMode || 'light';
    const ch: any = echarts.init(chartRef.current, mode);
    setChart(ch);
  }

  function changeChartTheme() {
    const mode = themeMode || 'light';
    Chart.dispose();

    const ech = echarts;
    const ch: any = ech.init(chartRef.current, mode);
    ch.registerLocale('DE', langDE);
    ch.setOption({...chartOptions, locale:'DE'}, { notMerge: true, lazyUpdate: true, locale:'de-DE' });
    setChart(ch);
  }

  useEffect(() => {
    if(options && JSONtoString(options)!=JSONtoString(chartOptions)){
      setChartOptions(options)
    }
  }, [options]);

  useEffect(() => {
    setLoading(isLoading)
    setNoData(isNoData)
  }, [isLoading, isNoData])
  

  /** INITIALIZE */
  useEffect(() => {
    if (chartRef?.current) initChart();
  }, [chartRef]);

  useEffect(() => {
    if (Chart && Object.keys(chartOptions).length > 0) changeChartTheme();
  }, [themeMode]);

  /** DETECT AND RENDER SET TO CHART ON CHART OPTIONS CHANGED */
  useEffect(() => {
    if (Chart === undefined) return;
    Chart.setOption(chartOptions, { notMerge: true, lazyUpdate: true });

    if (!isEmpty(chartOptions)) {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 1000);
    }
  }, [chartOptions]);

  /** RESIZE LISTENER */
  const handleResize = debounce(() => {
    if (Chart) {
      // console.log('resize')
      Chart.resize();
    }
  }, 50)
  
  React.useEffect(() => {
    if (Chart === undefined) return;

    window.addEventListener('resize', handleResize)
  
    return () => window.removeEventListener('resize', handleResize)
  }, [Chart])

  useEffect(() => {
    return () => {
      setChart(undefined);
      setChartOptions(defaultOption);
    };
  }, []);

  return (
    <>
      {/* {noData ? <div className="loading-data"> <Loader Loading={loading} NoData={noData} /> </div> : null} */}
      {/* className={noData ? "visibility-hidden" : ""}  */}
      <div ref={chartRef} style={{ width: '100%', height: '100%' }}></div>
    </>
  );
}

export default React.memo(EchartsVisualization);
