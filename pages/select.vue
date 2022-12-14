<template>
  <div>
    {{ $test(1234567, { useVedic: false }).format() }}
    {{ currency(1000) }}
    <!-- loading tage -->
    <div v-if="loading" class="text-center">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>

    <!-- show dialog -->
    <div>
      <v-btn v-if="!dialog" @click="showDailog">Show</v-btn>
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-text-field></v-text-field>
          <v-card-title> Hello world App</v-card-title>
          <v-card-subtitle>welcome to our progress</v-card-subtitle>
          <v-card-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            officiis, dolor mollitia sed nam sapiente, assumenda delectus
            voluptatum enim voluptatibus harum autem cumque officia natus
            distinctio temporibus, eum quam similique!
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              elevation="10"
              color="primary"
              class="white--text"
              @click="closeDialog"
              >OK</v-btn
            >
            <v-btn elevation="10" color="red" class="white--text">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <v-row>
      <v-col
        v-for="(item, i) in userdata"
        :key="i"
        cols="12"
        sm="6"
        md="6"
        lg="3"
      >
        <v-card>
          <v-card-text>
            <v-img
              :src="`https://robohash.org/${i}?size=200x200`"
              alt="photos"
              contain
              width="100%"
            />
          </v-card-text>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-subtitle>welcome to our media</v-card-subtitle>
          <v-card-text>
            {{ item.body }}
          </v-card-text>
          <v-card-actions> </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ProjectNameSelect",
  data() {
    return {
      loading: false,
      dialog: false,
    };
  },
  computed: {
    userdata() {
      return this.$store.state.user.users;
    },
  },

  async mounted() {
    this.loading = true;
    await this.$store.dispatch("user/select");
    this.loading = true;
    console.log(this.$test);
  },
  methods: {
    showDailog() {
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>
