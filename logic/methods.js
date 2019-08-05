let mongo = require('./mongologic.js');
let config = require('../jsons/config.json')

class methods
{
    constructor()
    {
        this.mongoer = new mongo(config.mongopath);
    }

    home(req,res)
    {
        res.render(path.join(__dirname,'../client/index.html'));
    }

    async showData(req,res)
    {
        let data = await this.mongoer.parseData(req.params.id);
        res.json(data);
    }
}

module.exports = methods;