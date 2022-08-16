import { getRandomNum } from './randomNum'
import { user } from './../index'

const qouteContainer = document.querySelector('.quote-container')
const changeQuoteBtn = document.querySelector('.quote-change')
const quote = document.querySelector('.quote')
const quoteText = document.querySelector('.quote-text')
const quoteAuthor = document.querySelector('.quote-author')

let quoteId

function showQuote(qouteData) {
  if (quote.classList.contains('show')) {
    quote.classList.remove('show')
    setTimeout(() => showQuote(qouteData), 300)
  } else {
    quoteText.textContent = `"${qouteData.text}"`
    quoteAuthor.textContent = qouteData.author

    quote.classList.add('show')
    qouteContainer.classList.add('show')
  }
}

async function getQuote(locale, id) {
  // fetching quotes
  const quotes = '../assets/quotes/quotes.json'
  const res = await fetch(quotes)
  const data = await res.json()
  const quotesLength = data[locale].length
  // if id argument exist use it, else use random id
  quoteId = id ? id : getRandomNum(0, quotesLength)

  // get quote data
  const qouteData = data[locale][quoteId]

  showQuote(qouteData)
}

changeQuoteBtn.addEventListener('click', () => getQuote(user.options.locale))

export { getQuote }
