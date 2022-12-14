import Vue from "vue";

// Make sure to pick a unique name for the flag
// so it won't conflict with any other mixin.
if (!Vue.__my_mixin__) {
  Vue.__my_mixin__ = true;
  Vue.mixin({
    data() {
      return {};
    },
    computed: {},
    methods: {
      currency(data) {
        return this.$test(data, { precision: 0, symbol: "₭" }).format();
      },
    },
  }); // Set up your mixin then
}
