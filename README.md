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
            "task": "doing hapi",
            "description": "doing by yourself very easy",
            "status": "done",
            "expire": "2019-01-16",
            "name": "ingunzamak"
        },
        {
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
    "status": "do, doing, done" 
}
```




