import { simulatePrintMedia, restoreScreenMedia } from 'print-css-toggle';

(function () {
  let mockedPrintMedia = false;

  document.querySelector('[data-toggle-css]').addEventListener('click',
    function(e) {
      e.preventDefault();

      if(mockedPrintMedia) {
        mockedPrintMedia = false;
        restoreScreenMedia()
      } else {
        mockedPrintMedia = true;
        simulatePrintMedia();
      }
    }
  );
}());
