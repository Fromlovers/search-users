<template>
  <v-col>
    <v-card class="py-2 px-5">
      <v-card-title>Search users</v-card-title>
      <v-row justify="space-between">
        <v-col>
          <v-text-field
            v-model="searchParams.name"
            class="mx-2"
            label="Name"
            dense
            outlined
          />
        </v-col>
        <v-col>
          <DatePicker @change="getDate" />
        </v-col>
        <v-col>
          <v-text-field
            v-model="searchParams.phone"
            class="mx-2"
            label="Phone"
            dense
            outlined
          />
        </v-col>
        <v-col>
          <v-text-field
            v-model="searchParams.email"
            class="mx-2"
            label="E-mail"
            dense
            outlined
          />
        </v-col>
        <v-col>
          <v-btn
            class="px-6"
            color="success"
            @click="onClick"
          >
            Search
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>

<script>
import DatePicker from './DatePicker.vue';

export default {
  components: { DatePicker },
  props: {
    searchParams: {
      type: Object,
      default: () => ({
        name: '',
        phone: '',
        email: '',
      }),
    },
  },
  data() {
    return {
      bday: '',
    };
  },
  computed: {
    items() {
      return {};
    },
  },
  created() {
  },
  methods: {
    onClick() {
      const prepandParams = { ...this.searchParams, bday: this?.bday };
      console.log(prepandParams);
      this.$emit('on-click', prepandParams);
    },
    getDate(val) {
      this.bday = val;
    },
  },
};
</script>

<style></style>
