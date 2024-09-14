<script setup lang="ts">
import { nanoid } from 'nanoid';
import type { Column, Task } from '~/types';
import draggable from 'vuedraggable';

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
const alt = useKeyModifier("Alt")
</script>
<template>
    <div>
        <draggable 
            v-model="columns"
            group="columns"
            item-key="id"
            handle=".drag-handle"
            :animation="150"
            class="flex items-start overflow-x-auto gap-4"
        >
            <template #item="{ element: column }: { element: Column }">
                <div class="column bg-gray-200 p-5 rounded min-w-[250px]">
                    <header class="font-bold mb-4">
                        <DragHandle />
                        {{ column.title }}
                    </header>
                    <draggable
                        v-model="column.tasks"
                        :group="{name: 'tasks', pull: alt ? 'clone' : true}"
                        handle=".drag-handle"
                        :animation="150"
                        item-key="id"
                    >
                    <template #item="{ element: task }: { element: Task }">
                    <div>
                        <TaskFlowTask
                        :task="task"
                        />
                    </div>
                    </template>
                </draggable>
                    <footer>
                        <button> Add a card</button>
                    </footer>
                </div>
            </template>
        </draggable>
    </div>
</template>