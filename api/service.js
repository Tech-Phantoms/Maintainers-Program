const Airtable = require('airtable');

class AirtableBase {
    constructor(apikey, baseKey) {
        this.base = new Airtable({apiKey: apikey}).base(baseKey);
    }
}

class AirtableAdapter extends AirtableBase {
    constructor(){
        super(process.env.API_KEY, process.env.BASE_KEY);
    }
}

module.exports = AirtableAdapter