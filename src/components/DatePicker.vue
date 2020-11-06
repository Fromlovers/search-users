<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        :value="dateFormatted"
        persistent-hint
        prepend-icon="mdi-calendar"
        v-bind="attrs"
        dense
        label="Birthday"
        outlined
        full-width
        @blur="date = parseDate(dateFormatted)"
        v-on="on"
        @keydown="(ev) => ev.preventDefault()"
      />
    </template>

    <v-date-picker
      v-model="date"
      no-title
      @input="menu = false"
    />
  </v-menu>
</template>

<script>
export default {
  props: {
    dateFormatted: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
    };
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },
  watch: {
    date() {
      this.$emit('change', this.formatDate(this.date));
    },
  },
  methods: {
    parseDate(date) {
      if (!date) {
        return null;
      }

      const [month, day, year] = date.split('/');
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    },
    formatDate(date) {
      if (!date) {
        return null;
      }

      const [year, month, day] = date.split('-');
      return `${month}/${day}/${year}`;
    },
  },
};
</script>
