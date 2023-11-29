export function initialName(words: string) {
  const result = words
    ? words?.replace(/\-/g, ' ').replace(/\_/g, ' ').replace(/\./g, ' ')
        .replace(/\b(\w)\w+/g, '$1')
        .replace(/\s/g, '')
        .replace(/\.$/, '')
        .toUpperCase()
    : '';
  return result?.slice(0,2);
}
