function startViewer(storyFile) {
  var containerElement = document.getElementById('viewer-container');
  containerElement.style.visibility = 'hidden';

  var windowWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
  var pxRatio = window.devicePixelRatio = window.devicePixelRatio ||
                window.screen.deviceXDPI / window.screen.logicalXDPI;

  var multiplier = Math.round((windowWidth * 0.88) / 16);
  // We probably want an even multiplier? Might make things less jagged.
  multiplier = (multiplier % 2 == 0) ? multiplier : multiplier + 1;

  // We scale our stage size to match the device pixel ratio, but the
  // CSS styles the actual canvas to be 88% of the screen, which makes
  // things look sharper on retina devices while still being the proper
  // size.
  var width = multiplier * pxRatio * 16;
  var height = multiplier * pxRatio * 9;

  var loadingBar = document.getElementById('loading-bar');
  function loadingCallback(percentage){
    if(percentage == 1) {
      var loadingBarContainer = document.getElementById(
          'loading-bar-container');
      containerElement.style.visibility = 'visible';
      loadingBarContainer.style.visibility = 'hidden';
    }
    else {
      loadingBar.style.width = (percentage * 100) + '%';
    }
  }

  scarry.init({
    size: {width: width, height: height},
    containerElement: containerElement,
    loadingCallback: loadingCallback,

    storyFile: storyFile
  });
}
