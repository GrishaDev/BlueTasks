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

        this.alldata = [];
        await this.getData();

        this.boards.watch().on('change', ()=> {
            this.getData();
        });
    }


    async getUser(name)
    {
        try
        {
            let result = await this.users.findOne({displayName:name});
            console.log(result._id);
            return result._id;
        }
        catch(err)
        {
            console.log("Error finding user , "+err);
        }
    }

    async getData()
    {
        console.log("collecting data..");
        this.alldata = [];
        try
        {
            let result = await this.boards.find();
            let data = await result.toArray();
            
            for(let i=0; i<data.length; i++)
            {
                if(data[i]._id != null)
                {
                    for(let j=0; j<data[i].lists.length; j++)
                    {
                        for(let k=0; k<data[i].lists[j].cards.length; k++)
                        {
                            let card_data = data[i].lists[j].cards[k];
                            let card;
                            // let parseddate = carddata.date.substring(0,16);
                            let parsed_date = card_data.date;
                            console.log(parsed_date);
                            // let user = data[i].lists[j].cards[k].assignedUserId;
                            card = {text:card_data.text,list:data[i].lists[j].title,board:data[i].title,labels:card_data.labels,date:"none",userid:card_data.assignedUserId};
                            this.alldata.push(card);
                            // if(user == id)
                            // {
                            //     let card = data[i].lists[j].cards[k].text;
                            //     alldata.push(card);
                            //     console.log("card "+card+ " contains user user1");
                            // }
                            
                        }
                    }
                }
            }
            console.log("Done collecting data, "+this.alldata.length+ " cards were collected");

        }
        catch(err)
        {
            console.log("Error reading data , "+err);
        }
    }

    async parseData(id)
    {
        let data = [];

        if(this.alldata != undefined)
        {
            console.log("Parsing data..");

            for(let i=0; i<this.alldata.length; i++)
            {
                if(this.alldata[i].userid == id)
                {
                    data.push(this.alldata[i]);
                }
            }
        }
        return data;
    }
}

module.exports = mongologic;