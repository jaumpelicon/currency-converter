const form = document.querySelector("form")
const inputValue = document.getElementById("amount")
const currencySelector = document.getElementById("currency")

const dolarCurrency = 6.1921
const euroCurrency = 6.23
const libraCurrency = 7.7887

amount.addEventListener("input", () => {
  const hasCharcters = /\D+/g
  amount.value = amount.value.replace(hasCharcters, '')
})

form.onsubmit = (event) => {
  event.preventDefault()

  const totalValue = inputValue.value
  const currencyValue = getCurrencyValue(currencySelector.value)

  convertCurrency(totalValue, currencyValue)
}

function getCurrencyValue(symbol) {
  switch (symbol) {
    case "USD": return dolarCurrency
    case "EUR": return euroCurrency
    case "GBP": return libraCurrency
    default: return 1
  }
}

function convertCurrency(totalValue, price) {
  const convertedValue = Number(totalValue) / price
  alert(`Valor convertido: ${convertedValue.toFixed(2)}`)
}