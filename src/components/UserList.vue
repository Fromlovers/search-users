<template>
  <v-col justify="center">
    <v-data-table
      v-if="true"
      :headers="headers"
      :items="users"
      sort-by="name"
      class="elevation-1"
    >
      <template
        v-slot:item.name="{ item }"
      >
        <router-link :to="{ path: 'user', query: { id: item.id }}">
          {{ item.name }}
        </router-link>
      </template>

      <template
        v-slot:item.img="{ item }"
      >
        <v-avatar size="36">
          <img
            :src="item.img"
            alt="John"
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
      v-else-if="isNoteLoad = false"
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
  data() {
    return {
      isNoteLoad: true,
      headers: [
        { text: '', value: 'img', sortable: false },
        {
          text: 'Name',
          align: 'start',
          value: 'name',
        },
        { text: 'Phone', value: 'phone', sortable: false },
        { text: 'E-Mail', value: 'email', sortable: false },
        { text: 'Birthday M/D/Y', value: 'birth' },
      ],
    };
  },
  computed: {
    users() {
      return [{
        name: 'Катя',
        phone: '71112223344',
        email: 'katusha@email.ru',
        birth: '878850000000',
        img: 'https://avatarko.ru/img/avatar/15/kot_Minecraft_Endermen_pechene_14559.jpg',
      },
      {
        name: 'Саша',
        phone: '72223334455',
        email: 'sasha@email.ru',
        birth: '902865600000',
        img: 'https://avatarko.ru/img/avatar/11/zhivotnye_ptica_popugaj_10183.jpg',
      }];
    },
  },
  methods: {
    parseDate(timestamp) {
      return DayJs.unix(timestamp / 1000).format('MM/DD/YYYY');
    },
  },
};
</script>

<style>

</style>
