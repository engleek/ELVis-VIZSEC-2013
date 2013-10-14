(function () {

  bespoke.plugins.progress = function(deck) {
  	var progressBar = document.createElement('span'),
  	    progressWrapper = document.createElement('div');

  	progressWrapper.className = 'bespoke-progress';
  	progressWrapper.appendChild(progressBar);
  	deck.parent.appendChild(progressWrapper);

  	deck.on('activate', function(e) {
  		progressBar.style.width = ((e.index * 100) / (deck.slides.length - 1)) + '%';
  	});
  };

})();


(function () {
  
  bespoke.plugins.qtimer = function(deck) {
    var qtimer = document.getElementById('qtimer');
    
    deck.on('activate', function(e) {
      //if (e.index == (deck.slides.length - 1)) {
      if (false) {
        console.log('go');
        var time = 310;
        var msg = '';
        setInterval(function () {

          time -= 1;
         
          if (time < 0) {
            msg = 'Oh no!<br>Run away!'
          } else {
            var minutes = Math.floor(time / 60);
            var seconds = time - minutes * 60;
            msg =  minutes + ':' + ((seconds < 10) ? '0' + seconds : seconds);
          }
          
          qtimer.innerHTML = msg;

        }, 1000);

      }
    });
  };
  
})();


bespoke.horizontal.from('article', {
  bullets: '.bullet',
  progress: true,
  qtimer: true,
  hash: true,
  state: true
});
