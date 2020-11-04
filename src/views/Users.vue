<template>
  <v-col>
    <v-row>
      <SearchForm />
    </v-row>
    <v-row>
      <UserList />
    </v-row>
  </v-col>
</template>

<script>
import SearchForm from '../components/SearchForm.vue';
import UserList from '../components/UserList.vue';

export default {
  components: { SearchForm, UserList },
  created() {
    console.log('created');
  },
};
</script>

<style>

</style>
