function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function httpPost(theUrl,data)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", theUrl,true);
    xmlHttp.setRequestHeader("Content-Type","application/json");

    xmlHttp.send(JSON.stringify(data));

    xmlHttp.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            console.log("ok");
            setTimeout(function(){
                clearSystems();
                getSystems();
            }, 100);
        }
    }
}

function renderData()
{
    let len = data.length;

    let systems = document.getElementById('tasks');
    // let system = document.getElementById('system');

    
    for(let i=0; i<len; i++)
    {
        // item = document.createElement('li');
        // item.innerHTML = JSON.stringify(data[i]);
        let item = document.createElement('div');
        item.classList.add("task");
        let title = document.createElement('h2');
        let card = document.createElement('div');
        card.classList.add("card");
        title.innerHTML = data[i].text;
        
        // let img = document.createElement('div');
        let list = document.createElement('div');
        let board = document.createElement('div');
        let listtxt = document.createElement('p');
        let boardtxt = document.createElement('p');

        let labels = document.createElement('div');
        let date = document.createElement('div');
        let labelstxt = document.createElement('p');
        let datetxt = document.createElement('p');
        // let delicon = document.createElement('img');
        // img.classList.add("pic");
        // delicon.classList.add("delicon");
        // delicon.onclick = deleteSystem(i);
        // delicon.addEventListener("click",function(){ deleteSystem(i )});
        list.classList.add("list");
        board.classList.add("board");

        labels.classList.add("labels");
        date.classList.add("date");

        listtxt.innerHTML = data[i].list+" list";
        boardtxt.innerHTML = data[i].board+" board";

        let str = data[i].date;
        labelstxt.innerHTML = "Labels: "+data[i].labels;
        datetxt.innerHTML = "Date: "+str;

        listtxt.classList.add("about");
        boardtxt.classList.add("about");
        labelstxt.classList.add("about");
        datetxt.classList.add("about");

        card.appendChild(title);
        list.appendChild(listtxt);
        board.appendChild(boardtxt);
        labels.appendChild(labelstxt);
        date.appendChild(datetxt);
        // card.appendChild(img);
        card.appendChild(list);
        card.appendChild(board);
        card.appendChild(labels);
        card.appendChild(date);
        // card.appendChild(delicon);
        

        // item.appendChild(title);
        item.appendChild(card);
        systems.appendChild(item);
    }
    // let first = document.getElementById('first');
    // first.remove();
}

function getTasks()
{
    let datastr = httpGet('/api/data/2');
    data = JSON.parse(datastr);

    console.log(data);

    renderData();
}

getTasks();