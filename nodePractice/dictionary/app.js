const https = require('https');

// Print data
function printData(term, definition){
    const message = `Definition for ${term}: ${definition}`
    console.log(message);
}


// Request data
function getData(word){
    try{
        const request = https.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=d225915d-010c-45a6-8a1e-9730e36b0570`,
         (response) => {
            // console.dir(response)
            if (response.statusCode === 200){
                let body = '';
                // Read data
                response.on('data', (data)=> {
                    body += data.toString();
                });
                response.on('end', () => {
                    try {
                        // Parse data
                        let definition = JSON.parse(body);
                        // console.dir(definition[0].shortdef)
                        printData(word, definition[0].shortdef)
                    } catch (error){
                        console.error(error.message)
                    }
                });                 
            } else {
                const message = `There was an error getting the definition for ${word} (${http.STATUS_CODES[response.statusCode]})`;
                const statusCodeError = new Error(message);
                console.error(statusCodeError)
            }
            request.on('error', (error) => {
                console.error(error.message);
            });
        });
    } catch (error){
        console.error(error.message);
    }
};


const words = process.argv.slice(2)

words.forEach(getData);