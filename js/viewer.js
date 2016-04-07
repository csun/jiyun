function startViewer(containerId, storyFile) {
  var containerElement = document.getElementById(containerId);
  var windowWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

  var multiplier = Math.round((windowWidth * 0.8) / 16);
  var size = { width: multiplier * 16, height: multiplier * 9 };

  scarry.init({
    size: size,
    containerElement: containerElement,
    
    storyFile: storyFile
  });
}
