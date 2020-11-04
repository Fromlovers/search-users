<template>
  <v-col>
    <v-card class="py-2">
      <v-row>
        <v-col>
          <v-row justify="end">
            <v-avatar size="250">
              <img
                :src="user.img"
                alt="John"
              >
            </v-avatar>
          </v-row>
        </v-col>
        <v-col align-self="center">
          <v-row justify="start">
            <h4 class="mr-3">
              Name:
            </h4>
            <span>{{ user.name }}</span>
          </v-row>
          <v-row>
            <h4 class="mr-3">
              Phone:
            </h4>
            <span>{{ '+' + user.phone }}</span>
          </v-row>
          <v-row>
            <h4 class="mr-3">
              E-Mail:
            </h4>
            <span>{{ user.email }}</span>
          </v-row>
          <v-row>
            <h4 class="mr-3">
              Birthday:
            </h4>
            <span>{{ parseDate(user.birth) }}</span>
          </v-row>
        </v-col>
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
      return {
        name: 'Катя',
        phone: '71112223344',
        email: 'katusha@email.ru',
        birth: '878850000000',
        img: 'https://avatarko.ru/img/avatar/15/kot_Minecraft_Endermen_pechene_14559.jpg',
      };
    },
  },
  methods: {
    parseDate(timestamp) {
      return DayJs.unix(timestamp / 1000).format('MM/DD/YYYY');
    },
  },
};
</script>
