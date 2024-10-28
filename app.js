let home = 0


let away = 0




function sum() {

  home += 1
  console.log('Home + 1', home)
  let displayElm = document.getElementById('home-score')
  console.log(displayElm)
  displayElm.innerText = home
}

function sum3() {

  home += 3
  console.log('Home + 3', home)
  let displayElm = document.getElementById('home-score')
  console.log(displayElm)
  displayElm.innerText = home
}

function awaySum() {

  away += 1
  console.log('Away + 1', away)
  let displayElm = document.getElementById('away-score')
  console.log(displayElm)
  displayElm.innerText = away
}

function awaySum3() {

  away += 3
  console.log('Away + 3', away)
  let displayElm = document.getElementById('away-score')
  console.log(displayElm)
  displayElm.innerText = away
}


function homeClear() {

  home -= home
  console.log('clear', home)
  let displayElm = document.getElementById('home-score')
  console.log(displayElm)
  displayElm.innerText = home
}

function awayClear() {

  away -= away
  console.log('clear', away)
  let displayElm = document.getElementById('away-score')
  console.log(displayElm)
  displayElm.innerText = away
}