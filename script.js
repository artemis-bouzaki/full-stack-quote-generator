// async function is a function that allows await to be used within the function

async function fetchNewQuote() {

    const quoteText = document.getElementById('quote-text');
    const newQuoteButton = document.getElementById('new-quote-button');

    // we want a function that 
    newQuoteButton.disabled = true;
    try {
        // this is a generic placeholder for multiple data formats
        const response = await fetch('http://localhost:3000/quote');
        // extract json object from fetch response
        const data = await response.json();

        // display quote as text inside the quote button
        quoteText.textContent = data.quote;

    } catch (error) {
        console.log("Error fertching quote ", error);
    } finally {
        //enable button again
        newQuoteButton.disabled = false;
    }
}
