const form = document.querySelector("form")
const input = document.getElementById("amount")
const result = document.getElementById("result")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const currencySelector = document.getElementById("currency")

const dolarCurrency = 6.19
const euroCurrency = 6.23
const libraCurrency = 7.79

amount.addEventListener("input", () => {
  const hasCharcters = /\D+/g
  amount.value = amount.value.replace(hasCharcters, '')
})

form.onsubmit = (event) => {
  event.preventDefault()

  const totalValue = input.value
  const symbol = getCurrencySymbol(currencySelector.value)
  const currencyValue = getCurrencyValue(currencySelector.value)

  convertCurrency(totalValue, currencyValue, symbol)
}

function getCurrencyValue(symbol) {
  switch (symbol) {
    case "USD": return dolarCurrency
    case "EUR": return euroCurrency
    case "GBP": return libraCurrency
    default: return 1
  }
}

function getCurrencySymbol(symbol) {
  switch (symbol) {
    case "USD": return 'US$'
    case "EUR": return '€'
    case "GBP": return '£'
    default: return 1
  }
}

function formatBRCurrency(value) {
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}

function convertCurrency(totalValue, price, symbol) {

  try {
    const convertedValue = Number(totalValue) * price
    description.textContent = `${symbol} 1 = ${formatBRCurrency(price)}`
    result.textContent = formatBRCurrency(convertedValue)
    footer.classList.add("show-result")

  } catch (error) {
    footer.classList.remove("show-result")

    console.error("Error: ", error)

    alert("Não foi possível converter a moeda, tente novamente.")
  }
}