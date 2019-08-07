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
        // let id = await this.mongoer.getUser(req.params.name);
        let data = await this.mongoer.parseData(req.params.id);
        console.log("=====================");
        console.log(data);
        // data[0].date="none;
        res.json(data);
    }
}

module.exports = methods;