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
            },
            {
                id: nanoid(),
                title: "Develop new feature",
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
    <div class="flex items-start overflow-x-auto gap-4">
        <div v-for="column in columns" :key="column.id" class="column bg-gray-200 p-5 rounded min-w-[250px]">
            <header class="font-bold mb-4">
                {{ column.title }}
            </header>
            <TaskFlowTask v-for="task in column.tasks" :task="task" />
            <footer>
                <button> Add a card</button>
            </footer>
        </div>
    </div>
</template>