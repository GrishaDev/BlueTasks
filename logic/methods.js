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
        // res.render(path.join(__dirname,'../client/index.html'));
        res.send(req.user);
    }

    async authData(req,res)
    {
        console.log(req.user);
        let user = req.user.displayName;
        let id = await this.mongoer.getUser(req.user.displayName);
        res.json({user:user,id:id});
    }
    async showData(req,res)
    {
        let id = req.params.id;
        if(id != undefined && id === req.user.id)
        {
            let data = await this.mongoer.parseData(id);
            res.json(data);
        }
        else
        {
            res.json({error:"stop hacking"});
        }
    }

    async CheckUser(req,res)
    {
        let id = await this.mongoer.getUser(req.body.name);
        if(id!=undefined)
            res.json({status:true,id:id});
        else
            res.json({status:false});
    }

    async deleteTask(req,res)
    {
        let id = req.body.id;
        let status = await this.mongoer.deleteCard(id);

        res.json({status:status});
    }
}

module.exports = methods;