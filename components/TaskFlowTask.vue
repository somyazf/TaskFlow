<script setup lang="ts">
import type { Task, ID } from '~/types';

const focused = ref(false);
const props = defineProps<{
    task: Task;
}>();
const emit = defineEmits<{
  (e: "delete", payload: ID): void;
}>();

onKeyStroke("Backspace", (e) => {
  if (focused.value) emit("delete", props.task.id);
});
</script>
<template>
    <div 
        :title="task.createdAt.toLocaleDateString()"
        class="task bg-white p-2 mb-2 rounded shadow-sm max-w-[250px] flex"
        @focus="focused = true"
        @blur="focused = false"
        tabindex="0"
    >
        <DragHandle class="pr-2" />
        <span>{{ task.title }}</span>
    </div>
</template>
<style scoped>
 /* For the chosen task */
.sortable-chosen .task {
    border-left: 2px solid #8939ad;
}

/* For the dragging task */
.sortable-drag .task {
    transform: rotate(5deg);
}

/* For the drop placeholder */
.sortable-ghost .task {
    position: relative;
    border-left: none;
}

.sortable-ghost .task::after {
    content: "";
    @apply absolute top-0 bottom-0 left-0 right-0 bg-slate-200 rounded;
}

.task:focus,
.task:focus-visible {
  @apply outline-gray-400 !important;
  outline: gray auto 1px;
}
</style>