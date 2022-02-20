<template>
  <div id="app" class="App">
      <Header></Header>
      <div class="container mrgnbtm">
        <div class="row">
          <div class="col-md-12">
              <CreateTask @createTask="taskCreate($event)"></CreateTask>
          </div>
        </div>
      </div>
      <div class="row mrgnbtm">
        <Tasks v-if="tasks.length > 0" :tasks="tasks" @deleteTask="taskDelete($event)" @editTask='taskEdit($event)'></Tasks>
      </div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Header from './Header.vue'
import CreateTask from './CreateTask.vue'
import Tasks from './Tasks.vue'

import { getAllTasks, createTask, deleteTask, editTask } from '../services/TodoService'

console.log('Home')

export default {
  name: 'App',
  components: {
    Header,
    CreateTask,
    Tasks
  },
  data() {
      return {
          tasks: [],
          settings: false
      }
  },
  methods: {
    taskCreate(data) {
      console.log('data:::', data)
      createTask(data).then(response => {
        console.log(response)
        this.getAllTasks();      
      });
    },
    getAllTasks() {
      getAllTasks().then(response => {
        console.log(response)
        this.tasks = response
      })
    },
    taskDelete(taskId) {
       deleteTask(taskId).then(response => {
        console.log(response)
        this.getAllTasks();
      });
    },
    taskEdit(task) {
      editTask(task).then(res => {
        console.log(res);
        this.getAllTasks();
      })
    }
  },
  mounted () {
    this.getAllTasks();
  }
}
</script>

<style>
  @import '../assets/styles/global.css'; 
</style>
