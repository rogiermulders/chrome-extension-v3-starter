// This script gets injected into any opened page
// whose URL matches the pattern defined in the manifest
// (see "content_script" key).
// Several foreground scripts can be declared
// and injected into the same or different pages.

console.log("This prints to the console of the page (injected only if the page url matched)")

const chesscomfixer = setInterval(() => {
  const query = document.querySelectorAll('.game-arc-chart .game-arc-arc')

  if(query.length > 0) {
    const node = query[0]
    node.style.filter = 'none'
    node.style.pointerEvents = 'auto'
    clearInterval(chesscomfixer)
  }
}, 1000)

window.onbeforeunload = function() {

}