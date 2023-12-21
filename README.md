<div align='center'>
<img src='icon.svg' alt='icon' height='100' />

# [icy](https://often.github.io/icy/)
An icy currency converter.
</div>

## About
**icy** is a lightweight currency converter.

It has almost everything to offer that you would expect from a currency converter, and it works in your web browser.

## Features
- [x] Everything that you would expect from a currency converter.
- [x] The `amount` URL search parameter, which is the amount of money that you want to convert.
- [x] The `from` URL search parameter, which is the currency that you want to convert money from.
- [x] The `to` URL search parameter, which is the currency that you want to convert money to.

> Note that the `from` and `to` URL search parameters should be any valid currency code ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)) listed on the [Euro foreign exchange reference rates](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html) page.

The URL search parameters support is there to make **icy** more flexible and accessible via direct URLs.

So, for example, you have got a friend and you send them this URL: https://often.github.io/icy/?amount=1337&from=EUR&to=USD

Once they visit that URL, no further interaction with the website is required. **icy** will convert **1337 EUR** to **USD**.

## How does it work?
**icy** fetches the **latest** currency rates from the [European Central Bank](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html).

> Note that **icy** uses [Frankfurter](https://github.com/hakanensari/frankfurter)'s API made by [Hakan Ensari](https://github.com/hakanensari) to simplify fetching of the latest currency rates. By default, it uses the [public Frankfurter instance](). To self-host your own instance, [click here](https://github.com/hakanensari/frankfurter#deployment). It is licensed under [MIT](https://github.com/hakanensari/frankfurter/blob/master/LICENSE).

> If you decide to self-host Frankfurter, you will have to edit [this line of code](https://github.com/often/icy/blob/main/main.js#L8).

Everything else is handled locally, via client-side.

## Self-hosting
Sure! Get the source code from the [releases](https://github.com/often/icy/releases) page and place it in your public website directory.

## License
The entire project is licensed under [GPL-3.0](LICENSE).

[Fonts](fonts) that were used ([Outfit](fonts/Outfit) and [Comforter](fonts/Comforter)) are licensed under **OFL-1.1**.

The [icon](icon.svg) is a part of [Twemoji](https://github.com/twitter/twemoji). It is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
