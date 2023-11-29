import { getColorVarCss } from '@app/helper/color.helper';
import { replaceAll } from '@app/helper/string.helper';

export const CHART_COLORS = [
  getColorVarCss('--primary'),
  getColorVarCss('--c1'),
  getColorVarCss('--c2'),
  getColorVarCss('--c3'),
  getColorVarCss('--c4'),
  getColorVarCss('--c5'),
];
export const getMultiColorsChart = (times = 2) => {
  const colors = times ? [].concat(...Array(times).fill(CHART_COLORS)) : [];
  return colors?.map((c: any) => replaceAll(c, { ' ': '' }));
};
