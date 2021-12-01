export function getMedia() {
  const screenWidth = window.innerWidth;
  if (screenWidth > 1000) {
    return "desktop";
  } else if (screenWidth > 750) {
    return "tablet";
  } else {
    return "phone";
  }
}
