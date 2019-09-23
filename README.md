# Blue Tasks

include config.json  file in jsons folder(create the folder too) with following syntax:

```json
    {
        "mongopath": "path to your mongo",
        "db": "db name",
        "usersCollection": "users collection",
        "boardsCollection": "boards collection"
    }
```


```Shraga docker
    cd ./compositor 
    docker-compose -f "docker-compose.yml" up -d --build
```


```For my self(to copy paste config)
  https://www.codedpad.com/
```