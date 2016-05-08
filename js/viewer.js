function startViewer(containerId, storyFile) {
  var containerElement = document.getElementById(containerId);

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

  scarry.init({
    size: {width: width, height: height},
    containerElement: containerElement,
    
    storyFile: storyFile
  });
}
