export function cdnUrl(str: any) {
  return str ? process.env.CDN + str : '#';
}
