import { get, isObject } from 'lodash';

export const generateFilter = (data: any) => {
  console.log(data);
  let filters: any = [];
  Object.keys(data)
    ?.filter((f: any) => data[f])
    .map((field: any) => {
      const value = data[field];
      if (isObject(value)) {
        const p = isObject(value) ? toDotList({ [field]: value }) : value;

        Object.keys(p)?.map((key: any) => {
          filters = [
            ...filters,
            {
              value: get(data, key),
              field: key,
            },
          ];
        });
      } else {
        filters = [
          ...filters,
          {
            value: value,
            field: field,
          },
        ];
      }
    });
  return filters?.filter((f: any) => f?.value);
};

function toDotList(obj: any) {
  function walk(into: any, obj: any, prefix: any = []) {
    Object.entries(obj).forEach((item) => {
      const key = item[0];
      const val = item[1] ? item[1] : '';
      if (typeof val === 'object' && !Array.isArray(val))
        walk(into, val, [...prefix, key]);
      else into[[...prefix, key].join('.')] = val;
    });
  }
  const out = {};
  walk(out, obj);
  return out;
}
