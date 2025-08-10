"use strict";


(async () => {

    const getData = url => fetch(url).then(response => response.json())


    document.getElementById('all').addEventListener('click', async (event) => {
        const fetchItems = () => getData('https://restcountries.com/v3.1/all?fields=name,population,currencies,region')
        event.preventDefault()
        const generateCountriesStatisticsHTML = countries => {
            let totalCountries = countries.length
            const totalPopulation = countries
                .reduce((cumulative, { population }) => cumulative + population, 0)
            const averagePopulation = totalPopulation / totalCountries;
            return `<p id="total-countries">Total Countries Result: ${totalCountries}</p>
        <p id="total-population">Total Countries Population:${totalPopulation}</p>
        <p id="average-population">Average Population:${averagePopulation}</p>`
        }

        const generateCitizensHTML = countries => {
            const html = countries
                .map(({ name: { common }, population }) => `
                <tr>
                    <td>${common}</td>
                    <td>${population}</td>
                </tr>`)
                .join('')
            return html
        }

        const generateRegionHTML = countries => {
            const html = countries
                .map(({ region }) => `
                <tr>
                    <td>${region}</td>
                    <td>${region.length}</td>
                </tr>`)
                .join('')
            return html
        }

        const generateCurrencyHTML = countries => {
            const html = countries
                .map(({ currencies }) => `
                <tr>
                    <td>${currencies}</td>
                    <td>${currencies.length}</td>
                </tr>`)
                .join('')
            return html
        }

        const countries = await fetchItems()

        const countriesHTML = generateCountriesStatisticsHTML(countries)
        const citizenHTML = generateCitizensHTML(countries)
        const regionHTML = generateRegionHTML(countries)
        const currencyHTML = generateCurrencyHTML(countries)

        const renderHTML = (html, target) => document.getElementById(target).innerHTML = html
        const renderCountriesStatisticsHTML = html => renderHTML(html, 'the-statistics')
        const renderCitizenHTML = html => renderHTML(html, 'citizens-body')
        const renderRegionHTML = html => renderHTML(html, 'region-body')
        const renderCurrencyHTML = html => renderHTML(html, 'currency-body')

        renderCountriesStatisticsHTML(countriesHTML)
        renderCitizenHTML(citizenHTML)
        renderRegionHTML(regionHTML)
        renderCurrencyHTML(currencyHTML)
    })

    document.getElementById('one-country').addEventListener('click', async (event) => {
        const fetchItems = () => getData('https://restcountries.com/v3.1/name/' + document.getElementById('country').value)
        event.preventDefault()
        const generateCountriesStatisticsHTML = countries => {
            let totalCountries = countries.length
            const totalPopulation = countries
                .reduce((cumulative, { population }) => cumulative + population, 0)
            const averagePopulation = totalPopulation / totalCountries;
            return `<p id="total-countries">Total Countries Result: ${totalCountries}</p>
        <p id="total-population">Total Countries Population:${totalPopulation}</p>
        <p id="average-population">Average Population:${averagePopulation}</p>`
        }

        const generateCitizensHTML = countries => {
            const html = countries
                .map(({ name: { common }, population }) => `
                <tr>
                    <td>${common}</td>
                    <td>${population}</td>
                </tr>`)
                .join('')
            return html
        }

        const generateRegionHTML = countries => {
            const html = countries
                .map(({ region }) => `
                <tr>
                    <td>${region}</td>
                    <td>${region.length}</td>
                </tr>`)
                .join('')
            return html
        }

        const generateCurrencyHTML = countries => {
            const html = countries
                .map(({ currencies }) => `
                <tr>
                    <td>${currencies}</td>
                    <td>${currencies.length}</td>
                </tr>`)
                .join('')
            return html
        }

        const countries = await fetchItems()

        const countriesHTML = generateCountriesStatisticsHTML(countries)
        const citizenHTML = generateCitizensHTML(countries)
        const regionHTML = generateRegionHTML(countries)
        const currencyHTML = generateCurrencyHTML(countries)

        const renderHTML = (html, target) => document.getElementById(target).innerHTML = html
        const renderCountriesStatisticsHTML = html => renderHTML(html, 'the-statistics')
        const renderCitizenHTML = html => renderHTML(html, 'citizens-body')
        const renderRegionHTML = html => renderHTML(html, 'region-body')
        const renderCurrencyHTML = html => renderHTML(html, 'currency-body')

        renderCountriesStatisticsHTML(countriesHTML)
        renderCitizenHTML(citizenHTML)
        renderRegionHTML(regionHTML)
        renderCurrencyHTML(currencyHTML)
    })

})();

