<template>
  <v-row>
    <v-col class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <v-btn to="/"> Go Back</v-btn>

            <v-btn @click="changes">Add count</v-btn>
            <v-btn>{{ num }}</v-btn>
            <v-btn>{{ count }}</v-btn>

            <v-text-field
              label="input number"
              outlined
              v-model="inputNumber"
              class="mt-5"
            ></v-text-field>

            {{ inputNumber }}
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "InspirePage",
  data() {
    return {
      count: 0,
      inputNumber: "",
    };
  },
  computed: {
    num() {
      return this.$store.state.user.number;
    },
  },
  methods: {
    changes() {
      this.$store.commit("user/changeNumber", this.inputNumber);
    },
  },
};
</script>
