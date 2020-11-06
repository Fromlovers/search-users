<template>
  <v-col>
    <v-card class="py-2 px-5">
      <v-card-title>Filter users</v-card-title>
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
          <DatePicker
            :date-formatted="searchParams.birth"
            @change="getDate"
          />
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
            :rules="[emailRule]"
            class="mx-2"
            label="E-mail"
            dense
            outlined
          />
        </v-col>
        <v-col class="text-lg-center">
          <v-btn
            class="mb-lg-3 mb-xl-0"
            color="primary"
            @click="clearFilterData"
          >
            Clear Filter
          </v-btn>

          <v-btn
            class="px-6 ml-xl-3"
            color="success"
            @click="onClick"
          >
            Filter
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
  data() {
    return {
      searchParams: {
        name: '',
        phone: '',
        email: '',
        birth: '',
      },
      emailRule: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || 'Invalid e-mail.';
      },
    };
  },
  methods: {
    onClick() {
      Object.keys(this.searchParams)
        .forEach((key) => {
          if (!this.searchParams[key]) {
            delete this.searchParams[key];
          }
        });

      this.$emit('on-click', this.searchParams);
    },
    getDate(val) {
      this.searchParams.birth = val;
    },
    clearFilterData() {
      this.searchParams = {};
      this.$emit('on-click', this.searchParams);
    },
  },
};
</script>
