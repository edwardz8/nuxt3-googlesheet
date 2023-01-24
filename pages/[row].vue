<script setup>
import { singleRow } from '@/composables/useSheet'

const route = useRoute()

/* 
route.params.id returns a string, so to convert that to number we use +
The ids start from 0, but we get rows by row and colums.
if first row isn't id -- it's titles in this case -- so +1 is added to row id
*/

const { data } = await singleRow(+route.params.row + 1)
</script>

<template>
    <h6>ID: {{ data.values[0][0] }}</h6>
    <h4>Title: {{ data.values[0][1] }}</h4>
    <p>Content: <span v-html="data.values[0][2]"></span></p>
    <img :src="data.values[0][3]" alt="">

    <br><br>
    <NuxtLink to="/">back</NuxtLink>
</template>