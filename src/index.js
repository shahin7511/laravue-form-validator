export var FormValidator = {
  methods: {
    hasError: function (field) {
      if (!this.$store === undefined) {
        for (var key in this.$store.state.errors) {
          if (key === field) {
            return true
          }
        }
      }
      return false
    },
    first: function (field) {
      return this.$store.state.errors[field][0]
    }
  }
}
