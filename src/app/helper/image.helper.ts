/** CHECKING IS IMAGE */
export const isImageFile = (image: string) => {
  let isImg;
  const imgExt = getExtension(image);
  switch (imgExt) {
    case 'png':
    case 'jpg':
    case 'jpeg':
    case 'svg+xml':
    case 'webp':
      isImg = true;
      break;
    default:
      isImg = false;
      break;
  }

  return isImg;
};

function getExtension(filename: string) {
  return filename?.split('.').pop();
}
