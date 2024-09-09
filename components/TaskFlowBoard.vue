<script setup lang="ts">
import { nanoid } from 'nanoid';
import type { Column } from '~/types';
const columns = ref<Column[]>([
    {
        id: nanoid(),
        title: "Backlog",
        tasks: [
            {
                id: nanoid(),
                title: "Create marketing landing page",
                createdAt: new Date()
            }
        ],
    },
    {
        id: nanoid(),
        title: "In Progress",
        tasks: [
            {
                id: nanoid(),
                title: "Create marketing landing page",
                createdAt: new Date()
            }
        ],
    },
    {
        id: nanoid(),
        title: "Complete",
        tasks: [
            {
                id: nanoid(),
                title: "Create marketing landing page",
                createdAt: new Date()
            }
        ],
    },
]);
</script>
<template>
    <div>
        <div v-for="column in columns" :key="column.id">
            <header>
                {{ column.title }}
            </header>
            <p v-for="task in column.tasks" :key="task.id">
                {{ task.title }}
            </p>
        </div>
    </div>
</template>