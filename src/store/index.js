import { EventEmitter } from 'events'
import { Promise } from 'es6-promise'

const itemsCache = Object.create(null)
const store = new EventEmitter()

let topStoryIds = []
let sessionResponse = Object.create(null)

store._responses = sessionResponse

export default store

store.fetchResponses = () => {
  return store._responses
}

store.setResponse = (step, val) => {
  sessionResponse[step] = val
  store._responses = sessionResponse
  return Promise.resolve(sessionResponse)
}

store.clearSession = () => {
  sessionResponse = Object.create(null)
  return Promise.resolve(sessionResponse)
}

store.getDestination = () => {
  const categories = ['movie', 'item', 'todo', 'duration'];
  let key = '';
  let destination;
  for (let i of categories) {
    if (typeof i === 'undefined') {
      throw new Error ('Response for ' + i + ' is undefined');
      return
    }
  }

  const matches = {
    indiana: 'a',
    '50first': 'b',
    eatpray: 'c',
    roman: 'd',
    swim: 'e',
    cam: 'f',
    boot: 'g',
    hat: 'h',
    '2': 'i',
    '4': 'j',
    '3': 'k',
    '6': 'l',
    scuba: 'm',
    sunrise: 'n',
    '4x4': 'o',
    paragl: 'p'
  }

  for (let prop in store._responses) {
    const value = store._responses[prop]
    if (matches[value]) {
      key = key + matches[value]
    }
  }
  key = Array.from(key).sort().join('');
  // Africa
  if (key === 'aeio' || key === 'bein' || key === 'cgin' || key === 'cfko') {
    destination = 'africa'
  }

  // Central America
  if (key === 'afjm' || key === 'bgjm' || key === 'dekn' || key === 'chjp') {
    destination = 'central'
  }

  // Europe
  if (key === 'agkp' || key === 'bflp' || key === 'dfio') {
    destination = 'europe'
  }

  // Australia
  if (key === 'ahln' || key === 'bhko' || key === 'dglm') {
    destination = 'australia'
  }

  // USA
  if (key === 'dhjp') {
    destination = 'usa'
  }
  // SE Asia
  if (key === 'celm') {
    destination = 'asia'
  }

  if (!destination) {
    destination = store.getOthers(key)
  }
  return {
    destination: destination,
    msg: store.getMsg(key)
  }
}

store.getOthers = (key) => {
  let destination;

  if (key.includes('aei') || key.includes('cgi')) {
    destination = 'europe'
  }

  if (key.includes('afj') || key.includes('bei') || key.includes('dfi') || key.includes('dgl')) {
    destination = 'africa'
  }

  if (key.includes('agk') || key.includes('bgj') || key.includes('bfl') || key.includes('chj')) {
    destination = 'usa'
  }

  if (key.includes('ahl') || key.includes('bhk') || key.includes('dek')) {
    destination = 'asia'
  }

  if (key.includes('dhj')) {
    destination = 'central'
  }

  if (key.includes('cfk') || key.includes('cel')) {
    destination = 'australia'
  }

  if (!destination) {
    if (key.includes('j') || key.includes('i')) {
      // short term, Africa or Europe
      destination = Math.random() >= 0.5 ? 'europe' : 'africa'
    } else {
      const longterm = ['africa', 'europe', 'usa', 'australia', 'asia', 'central']
      const picker = Math.floor(Math.random() * longterm.length)
      destination = longterm[picker]
    }
  }

  return destination;
}

store.getMsg = (key) => {
  const msgs = {
    'a': 'Igazi kalandok várnak majd ránk, ha ',
    'b': 'Garantált a móka és a lebarnulás, ha ',
    'c': 'Testileg-lelkileg feltöltődünk, ha ',
    'd': 'Csak győzzünk felfedezni mindent, ha ',
    'e': 'a tenger partja mellett pihenünk ',
    'f': 'az aktív pihenés során a kultúrára is szánunk időt ',
    'g': 'főként a természetet járjuk majd ',
    'h': 'napsütéses tájakon barangolunk együtt ',
    'i': '2 hétig. ',
    'j': '4 hétig. ',
    'k': '3 hónapig. ',
    'l': '6 hónapig. ',
    'm': 'Ígérjük, szakítunk időt a búvárkodásra is, és igyekszünk vízalatti képeket is csinálni!',
    'n': 'Ha nem is minden reggel, de egyszer megnézzük a napfelkeltét is, már csak helyetted is!',
    'o': 'Az adottságok függvényében biztos, hogy sokat túrázunk majd, akár terepjáró autóval is!',
    'p': 'A tájat igyekszünk madártávlatból is megvizsgálni, akár siklóernyővel vagy repülővel!'
  }

  const keyArr = Array.from(key);
  let msg = '';
  for (let i of keyArr) {
    msg = msg + msgs[i];
  }

  return msg;
}
