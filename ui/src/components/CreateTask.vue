<template>
  <div class="container">
    <div class="row">
        <div class="col-md-12 mrgnbtm">
        <h2>ToDo List</h2>
        <form>
            <div class="row">
                <div class="form-group col-md-6">
                    <label htmlFor="exampleInputEmail1">Task</label>
                    <input type="text" class="form-control" v-model="task" name="task" id="task" aria-describedby="emailHelp" placeholder="Create a Task" />
                </div>
                <div class="form-group col-md-6">
                    <label htmlFor="exampleInputPassword1">Assignee</label>
                    <input type="text" class="form-control" v-model="assignee" name="assignee" id="assignee" placeholder="Assignee" />
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-12">
                    <label htmlFor="exampleInputEmail1">Status:</label>
                    <select class="form-control" v-model="status" name="status" id="sel1">
                        <option>To Be Done</option>
                        <option>In Progress</option>
                        <option>Completed</option>
                    </select>
                </div>
            </div>
            <button type="button" @click='createTask()' class="btn btn-danger">Create</button>
        </form>
        </div>
    </div>
   </div>
</template>

<script>
export default {
  name: 'CreateTask',
  data() {
    return {
      task: '',
      assignee: '',
      status: ''
    }
  },
  methods: {
      createTask() {
          const payload = {
              task: this.task,
              assignee: this.assignee,
              status: this.status
          }
          this.$emit('createTask', payload)
          this.clearForm();
      },
      clearForm() {
          this.task = "";
          this.assignee = "";
          this.status = "";
      }
  }
}
</script>