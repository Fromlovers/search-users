<template>
  <v-col>
    <v-row>
      <SearchForm @on-click="getdData" />
    </v-row>
    <v-row>
      <UserList
        :users="users"
        :is-loading="isLoading"
      />
    </v-row>
  </v-col>
</template>

<script>
import { mapActions } from 'vuex';
// import DayJs from 'dayjs';
import SearchForm from '../components/SearchForm.vue';
import UserList from '../components/UserList.vue';

export default {
  components: { SearchForm, UserList },
  data() {
    return {
      users: [],
      isLoading: false,
    };
  },
  async created() {
    await this.getdData();
  },
  methods: {
    ...mapActions('users', ['getAll']),
    async getdData(params = {}) {
      if (Object.keys(params).length) {
        this.prepandParams(params);
      }

      this.isLoading = true;

      try {
        this.users = await this.getAll(params);
      } catch (e) {
        console.log(e);
      }

      this.isLoading = false;
    },
    prepandParams(params) {
      if (Object.prototype.hasOwnProperty.call(params, 'phone') && params.phone[0] === '+') {
        // eslint-disable-next-line no-param-reassign
        params.phone = params.phone.slice(1);
      }

      if (Object.prototype.hasOwnProperty.call(params, 'name')) {
        // eslint-disable-next-line no-param-reassign
        params.name = params.name.replace(/\s+/g, '');
      }
    },
  },
};
</script>
