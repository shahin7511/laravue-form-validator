export var FormValidator = {
  data () {
    return {
      errors: {
        'name': [
          'name is required',
          'name can\'t contain numbers'
        ],
        'email': [
          'email is required'
        ],
        'mobile': [
          'mobile na dile cholbe na'
        ],
      }
    }
  },
  methods: {
    hasError: function (field) {
      for (var key in this.$store.state.errors) {
        if (key === field) {
          return true
        }
      }
      return false
    },
    first: function (field) {
      return this.$store.state.errors[field][0]
    }
  }
}
