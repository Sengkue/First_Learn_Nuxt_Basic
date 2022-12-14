<template>
  <div>
    

    <v-card>
        <div class="text-center">
      <!-- {{ currency(100000) }} -->
      {{ currency(number) }}
    </div>
      <v-text-field label="Enter Number" placeholder="enter number" outlined v-model="number">
      </v-text-field>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ProjectNameCurrency",

  data() {
    return {
        number:''
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
