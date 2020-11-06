<template>
  <v-col justify="center">
    <v-data-table
      v-if="!isLoading && users.length"
      :headers="headers"
      :items="users"
      sort-by="name"
      class="elevation-1"
    >
      <template
        v-slot:item.name="{ item }"
      >
        <router-link :to="{ path: 'user/' + item._id, params: { id: item._id }}">
          {{ item.name }}
        </router-link>
      </template>

      <template
        v-slot:item.phone="{ item }"
      >
        {{ '+' + item.phone }}
      </template>

      <template
        v-slot:item.img="{ item }"
      >
        <v-avatar size="36">
          <img
            :src="item.img"
            alt="AVATAR"
          >
        </v-avatar>
      </template>
      <template
        v-slot:item.birth="{ item }"
      >
        {{ parseDate(item.birth) }}
      </template>
    </v-data-table>

    <v-row
      v-else-if="isLoading"
      justify="center"
      class="mt-10"
    >
      <v-progress-circular
        :size="130"
        :width="8"
        color="purple"
        indeterminate
      />
    </v-row>
    <v-row
      v-else
      justify="center"
    >
      <h4>
        {{ 'Please click a button the Search' }}
      </h4>
    </v-row>
  </v-col>
</template>

<script>
import DayJs from 'dayjs';

export default {
  props: {
    users: {
      type: Array,
      default: () => {},
    },
    isLoading: {
      type: Boolean,
      default: () => true,
    },
  },
  data() {
    return {
      headers: [
        { text: '', value: 'img', sortable: false },
        {
          text: 'Name',
          value: 'name',
        },
        { text: 'Phone', value: 'phone', sortable: false },
        { text: 'E-Mail', value: 'email', sortable: false },
        { text: 'Birthday M/D/Y', value: 'birth' },
      ],
    };
  },
  methods: {
    parseDate(timestamp) {
      return DayJs.unix(timestamp / 1000).format('MM/DD/YYYY');
    },
  },
};
</script>
