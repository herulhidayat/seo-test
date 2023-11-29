import { IProgressbarParser } from '@app/interface/chart/progress-bar.chart.interface';
import { decimalNumberFormat, formatThousand } from '../number.helper';
import { replaceAll } from '../string.helper';

export const progressNumberKParser = (
  items: any,
  name = 'name',
  value = 'value'
) => {
  const percentage = (v: any) => {
    const total = items?.reduce(
      (acc: any, array: any) => acc + array[value],
      0
    );
    return (v / total) * 100;
  };

  return items
    ?.map((i: any) => {
      return {
        ...i,
        name: nameFormatter(i[name]),
        percentage: decimalNumberFormat(percentage(i[value]), 1),
        value: formatThousand(i[value]),
        value2: i[value] ? i[value] : 0,
      };
    })
    .sort(function (a: any, b: any) {
      return parseFloat(b.value2) - parseFloat(a.value2);
    });
};

export const progressPercentageKeyVoteParser = (items: any) => {
  const percentage = (vote: any) => {
    const total = items?.reduce((acc: any, array: any) => acc + array.vote, 0);
    return (vote / total) * 100;
  };

  return items
    ?.map((i: any) => {
      const percent = decimalNumberFormat(percentage(i?.vote), 1);
      return {
        ...i,
        name: nameFormatter(i?.key),
        value: `${percent}%`,
        percentage: percent,
        value2: i?.vote ? i?.vote : 0,
      };
    })
    .sort(function (a: any, b: any) {
      return parseFloat(b.value2) - parseFloat(a.value2);
    });
};

const nameFormatter = (name: any) => {
  return replaceAll(name, { total_: '', _: ' ' });
};

export const progressbarParser = ({
  items,
  formatter = undefined, // custom formatter
  name = 'name',
  value = 'value',
  suffix = '',
  isPercentageValue = false,
}: IProgressbarParser) => {
  const percentage = (v: any) => {
    const total = items?.reduce(
      (acc: any, array: any) => acc + array[value],
      0
    );
    return (v / total) * 100;
  };

  return items
    ?.map((i: any) => {
      const percent = decimalNumberFormat(percentage(i[value]), 1);

      return {
        ...i,
        name: nameFormatter(i[name]),
        percentage: percent,
        value: isPercentageValue
          ? percent + '%'
          : (formatter ? formatter(i[value]) : formatThousand(i[value])) +
            suffix,
        value2: i[value] ? i[value] : 0,
      };
    })
    .sort(function (a: any, b: any) {
      return parseFloat(b.value2) - parseFloat(a.value2);
    });
};
