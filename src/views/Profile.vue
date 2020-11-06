<template>
  <v-col>
    <v-card class="py-2">
      <v-row v-if="user && Object.keys(user).length && user.img">
        <v-col>
          <v-row
            justify="end"
            class="mx-2"
          >
            <v-avatar size="250">
              <img
                :src="user && user.img ? user.img : ''"
                alt="Picture"
              >
            </v-avatar>
          </v-row>
        </v-col>
        <v-col align-self="center">
          <v-row justify="start">
            <h4 class="mr-3">
              Name:
            </h4>
            <span>{{ user && user.name ? user.name : '' }}</span>
          </v-row>
          <v-row>
            <h4 class="mr-3">
              Phone:
            </h4>
            <span>{{ user && user.phone ?'+' + user.phone : '' }}</span>
          </v-row>
          <v-row>
            <h4 class="mr-3">
              E-Mail:
            </h4>
            <span>{{ user && user.email ? user.email : '' }}</span>
          </v-row>
          <v-row>
            <h4 class="mr-3">
              Birthday:
            </h4>
            <span>{{ user && user.birth ? parseDate(user.birth) : '' }}</span>
          </v-row>
        </v-col>
      </v-row>
      <v-row v-else justify="center">
        <v-progress-circular
          :size="200"
          :width="10"
          color="purple"
          indeterminate
        />
      </v-row>
      <v-card-actions>
        <v-btn
          class="px-7"
          :to="{name: 'user-list'}"
          color="primary"
        >
          Back
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import DayJs from 'dayjs';

export default {
  computed: {
    user() {
      const userId = this.$route.params.id;
      // eslint-disable-next-line no-underscore-dangle
      return this.users.find((el) => el._id === userId);
    },
    users() {
      return this.$store.state.users.users;
    },
  },
  methods: {
    parseDate(timestamp) {
      return DayJs.unix(timestamp / 1000).format('MM/DD/YYYY');
    },
  },
  beforeRouteEnter: (to, from, next) => {
    if (from.name !== 'user-list') {
      next((vm) => {
        vm.$store.dispatch('users/get', { id: vm.$route.params.id });
      });
    }

    next();
  },
};
</script>
