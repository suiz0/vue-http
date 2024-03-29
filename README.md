# vue-http

## About
vuejs jQuery-like ajax facade plugin for axios library 

## Usage
---
The library can be used as a vuejs plugin:

```javascript
import vHttp from  'vue-http';
Vue.use(vHttp);
```
## API
---

### $ajaxSetup(config)
Set global configuration values that will be applied to every request

```javascript
$ajaxSetup({
    headers: {
        'Authorization': 'bearer hello-world'
    },
    responseType: 'stream'
});
```

### $get(url: string, config): Promise
Executes a GET request to the specific resource

### $post(url: string, data, config): Promise
Executes a POST request to the specific resource

### $del(url: string, config): Promise
Executes a DELETE request 

### $put(url: string, data, config): Promise
Executes a PUT request to the specific resource