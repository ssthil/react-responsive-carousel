// var imageDistance_bigDevice = 15;
// var imageDistance_smallDevice = 5;
// var sliderDistance;

export const sliderPosition = ({ imageDistance_bigDevice = 15, imageDistance_smallDevice = 5, sliderDistance }) => {
  if (screen.width === 320) {
    sliderDistance = 350 + imageDistance_smallDevice
  } else if (screen.width === 375) {
    sliderDistance = 370 + imageDistance_smallDevice
  } else if (screen.width === 568 || screen.width === 667 || screen.width === 812) {
    sliderDistance = 650 + imageDistance_smallDevice
  } else {
    sliderDistance = 206 + imageDistance_bigDevice
  }
}