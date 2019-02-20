export default {
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
