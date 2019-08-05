let MongoClient = require('mongodb').MongoClient;
let config = require('../jsons/config.json')

class mongologic
{
    constructor(path)
    {
        this.init(path);
    }

    async init(path)
    {
        let mongo;
        try
        {
            mongo = await MongoClient.connect(path,{ useNewUrlParser: true },{
                autoReconnect: true,
                reconnectTries: 1000000,
                reconnectInterval: 3000
            });
        }
        catch(err)
        {
            console.log("Error connecting to mongo , "+err);
        }
        
        this.db = mongo.db(config.db);
        this.users = this.db.collection(config.usersCollection);
        this.boards = this.db.collection(config.boardsCollection);

        console.log("done");
        // this.getUser("user2@example.com");
        // this.getData();
    }


    async getUser(name)
    {
        try
        {
            let result = await this.users.findOne({displayName:name});
            console.log(result._id);
        }
        catch(err)
        {
            console.log("Error finding user , "+err);
        }
    }

    async getData(id)
    {
        console.log("wawaw "+id);
        //{assignedUserId:"1"}
        let alldata = [];
        try
        {
            let result = await this.boards.find();
            let data = await result.toArray();
            console.log(data.length);
            console.log(data[0].lists.length);
            console.log(data[0].lists[0].cards.length);
            // console.log(data);
            for(let i=0; i<data.length; i++)
            {
                if(data[i]._id != null)
                {
                    for(let j=0; j<data[i].lists.length; j++)
                    {
                        for(let k=0; k<data[i].lists[j].cards.length; k++)
                        {
                            let user = data[i].lists[j].cards[k].assignedUserId;

                            if(user == id)
                            {
                                let card = data[i].lists[j].cards[k].text;
                                alldata.push(card);
                                console.log("card "+card+ " contains user user1");
                            }
                        }
                    }
                }
            }
            return alldata;
        }
        catch(err)
        {
            console.log("Error reading data , "+err);
        }
    }
}

module.exports = mongologic;