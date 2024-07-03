<script setup>
    import { ref } from 'vue'

    const props = defineProps({
        student: {
            type: Object,
            required: true
        }
    })
</script>


<template>
    <div class="student-card">
        <div class="student-info">
            <div class="info-item heading-secondary">
                <font-awesome-icon icon="user" class="icon" />
                <p class="name">{{ student.name }}</p>
            </div>
            <div class="info-item heading-tertiary">
                <font-awesome-icon icon="envelope" class="icon" />
                <p class="email">{{ student.email }}</p>
            </div>
        </div>
        <div class="student-details body-text">
            <p>Curso: {{ student.course }}</p>
            <p>CRAA: {{ student.craa }}</p>
            <p>Status: {{ student.status }}</p>
        </div>
    </div>
</template>

<style scoped>
    .student-card{
        display: flex;
        flex-wrap: wrap;
        background-color: #f0f0f0;
        padding: 2rem 7rem;
        justify-content: space-between;
        width: 100%;
        box-sizing: border-box;
        border-radius: 8px;
    }

    .student-details{
        color: var(--color-variant-background);
        width: 30%;
    }

    .info-item{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--color-variant-background);
    }

    p{
        margin: 0;
        margin-bottom: 10px;
    }

    .icon{
        margin-bottom: 10px;
    }

</style>

