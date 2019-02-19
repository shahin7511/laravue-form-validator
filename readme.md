## Laravel error validation in VueJS

> A reactive laravel errors handling library

### Build Setup

```
#to install 
$npm install laravue-form-validator --save 
```

#####Required dependency Vuex
```
 state: {
    ...
    errors:[]
  }
``` 


```
 mutations: {
    ...
    mute_errors(state,errors){
      state.errors = errors;
    }
  }
```

``` 
//example component
export default {
    name: 'HelloWorld',
    data: function () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      submitForm: function () {
        // 'errors' is received from laravel serverside errors
        //on response received
        ...
        this.$store.commit('mute_errors', data.errors)
        ...
      }
    }
  }
```
