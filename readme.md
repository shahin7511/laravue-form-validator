## Laravel error validation in VueJS

> A reactive laravel errors handling library

### To install

```
$ npm install @shahin7511/laravue-form-validator --save 
```

#### How to use


```
import {FormValidator} from '@shahin7511/laravue-form-validator'
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
//in vue template

<div class="form-group" v-bind:class="{'has-error':hasError('email')}">
    <label for="name">Name</label>
    <input type="text" name="name" id="name" class="form-control">
    <p class="text-danger" v-if="hasError('name')" v-html="first('name')"></p>
</div>

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
