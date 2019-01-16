# my-Taskeverydayeverynight
## สวัสดี วันนี้ทำอะไรกันดี

### List Task
`GET` /task/list

#### Response body
```json
{
    "status": 200,
    "message": "success",
    "data": [
        {
            "_id": "id",
            "task": "doing hapi",
            "description": "doing by yourself very easy",
            "status": "done",
            "expire": "2019-01-16",
            "name": "ingunzamak"
        },
        {
            "_id": "id",
            "task": "doing hapi",
            "description": "doing by yourself very easy",
            "status": "done",
            "expire": "2019-01-17",
            "name": "ingunzamak"
        }
    ]
}
```

### Add Task
`POST` /task/add
#### Request body
```json
{
        "task": "doing hapi",
        "description": "doing by yourself very easy",
        "status": "done",
        "expire": "2019-01-17",
        "name": "ingunzamak"
        
}
```
#### Response body 
```json
{
   "status": 200,
   "message": "เพิ่มได้",
   "data": {
       "task": "work",
       "description": "description",
       "status": "doing",
       "expire": "24/01/2019",
       "name": "gunn",
       "_id": "5c3f0b9ea9076d3228ca495d"
   }
}
```
### Delete Task
`GET` /task/delete/{id}

#### Response body
```json
{
   "status": 200,
   "message": "ลบได้แล้ว",
   "data": {}
}
```

### Update Task
`GET` /task/update/{id}
### Request body
```json
{
   "task": "work1",
   "description": "ddescription",
   "status": "doing",
   "expire": "24/01/2019",
   "name": "gunn"
}
```

#### Response body
```json
{
   "status": 200,
   "message": "แก้ไขได้แล้ว",
   "data": {}
}
```




