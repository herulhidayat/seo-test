export const stripTags = (string: any) => {
  return string?.replace(/(<([^>]+)>)/gi, '');
};
