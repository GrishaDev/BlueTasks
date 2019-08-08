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
        let id = req.params.id;
        if(id != undefined)
        {
            let data = await this.mongoer.parseData(id);
            res.json(data);
        }
    }

    async CheckUser(req,res)
    {
        console.log("jdsjfsfd");
        console.log(req.body.name);
        let id = await this.mongoer.getUser(req.body.name);
        if(id!=undefined)
            res.json({status:true,id:id});
        else
            res.json({status:false});
    }
}

module.exports = methods;