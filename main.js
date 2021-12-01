const {body} = document
const img = body.querySelector('img')
const main = body.querySelector('main')
const amount = body.querySelector('input')
const [from, to] = body.querySelectorAll('select')
const [{}, result] = body.querySelectorAll('p')
const url = new URL(location)
const instance = new URL('https://api.frankfurter.app/currencies')
const currencies = {}
const numberFormatOptions = {style: 'currency'}

const convert = () =>
{
  url.searchParams.set('from', from.value)
  url.searchParams.set('to', to.value)

  if (amount.value)
  {
    result.textContent = ''

    let span = document.createElement('span')
    numberFormatOptions.currency = from.value
    span.textContent = Intl.NumberFormat({}, numberFormatOptions).format(amount.value)
    result.append(span)
    result.append(' is equal to ')

    const converted = amount.value * currencies[from.value][to.value]
    span = document.createElement('span')
    numberFormatOptions.currency = to.value
    span.textContent = Intl.NumberFormat({}, numberFormatOptions).format(converted)
    result.append(span)

    url.searchParams.set('amount', amount.value)
    history.pushState({}, '', url)
  }
  else
  {
    result.textContent = 'The result will appear here.'
    url.searchParams.delete('amount')
    history.pushState({}, '', url)
  }
}

fetch(instance)
  .then(response => response.json())
    .then(async data =>
    {
      instance.pathname = 'latest'

      for (const currency in data)
      {
        const text = data[currency] + ' (' + currency + ')'
        let option = document.createElement('option')
        option.value = currency
        option.textContent = text
        from.append(option)

        option = document.createElement('option')
        option.value = currency
        option.textContent = text
        to.append(option)

        instance.searchParams.set('from', currency)
        const response = await fetch(instance)
        const {rates} = await response.json()
        currencies[currency] = rates
      }

      img.remove()
      main.style.display = 'block'
      main.animate([
        {opacity: 0},
        {opacity: 1}
      ], {
        duration: 1000
      })
      amount.focus()

      const fromParam = url.searchParams.get('from')

      if (fromParam) from.value = fromParam.toUpperCase()
      else from.value = 'USD'

      const toParam = url.searchParams.get('to')

      if (toParam) to.value = toParam.toUpperCase()
      else to.value = 'EUR'

      url.searchParams.set('from', from.value)
      url.searchParams.set('to', to.value)
      history.pushState({}, '', url)

      const amountParam = url.searchParams.get('amount')

      if (Number(amountParam))
      {
        amount.value = amountParam
        convert()
      }

      amount.addEventListener('input', convert)

      from.addEventListener('change', () =>
      {
        if (from.value === to.value) to.value = url.searchParams.get('from')
        convert()
      })

      to.addEventListener('change', () =>
      {
        if (to.value === from.value) from.value = url.searchParams.get('to')
        convert()
      })
    })
