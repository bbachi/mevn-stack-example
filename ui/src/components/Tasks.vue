<template>
    <div class="container">
        <h2>Tasks</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Task Id</th>
                <th>Task Name</th>
                <th>Assignee</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="task in tasks" :key="task._id">
                  <td>{{ task._id }}</td>
                  <td>{{ task.task }}</td>
                  <td>{{ task.assignee }}</td>
                  <td>
                    <div class="row">
                        <div class="col-md-6">
                        {{ task.status }}
                        </div>
                        <div class="col-md-3">
                            <EditModal @editTask='taskEdit($event)' :edittask="task"/>
                        </div>
                        <div class="col-md-3">
                            <button type="button" @click='deleteTask(task._id)' class="btn btn-danger right">Delete</button>
                        </div>
                    </div>
                  </td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import EditModal from './EditModal.vue'
    import router from '../routes'

    export default {
        name: 'Tasks',
        components: {
            EditModal
        },
        props: ['tasks'],
        methods: {
            deleteTask(taskId) {
               this.$emit('deleteTask', taskId)
            },
            taskEdit(data) {
                this.$emit('editTask', data)
            },
            gotoDetail(task) {
                localStorage.setItem('task', JSON.stringify(task))
                router.push('detail');
            }
        }
     }
</script>