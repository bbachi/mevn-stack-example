<template>
    <div>
        <b-button class="btn btn-warning" @click="modalShow = !modalShow">Edit</b-button>

        <b-modal id="modal-1" v-model="modalShow" ok-variant="danger" @ok="handleOk" title="Task Edit">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="row">
                    <div class="form-group col-md-6">
                    <label for="taskId">Id</label>
                    <input type="text" class="form-control" v-model="id" name="_id" id="id" disabled />
                    </div>

                </div>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="task">Task</label>
                        <input type="text" class="form-control" v-model="task" name="task" id="task" placeholder="Create a Task" />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="assignee">Assignee</label>
                        <input type="text" class="form-control" v-model="assignee" name="assignee" id="assignee" placeholder="Assignee" />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="status">Status:</label>
                        <select name="status" v-model="status" class="form-control" id="status">
                            <option>To Be Done</option>
                            <option>In Progress</option>
                            <option>Completed</option>
                        </select>
                    </div>
                </div>
            </form>
        </b-modal>
    </div>
</template>

<script>
  import { BModal, BButton } from 'bootstrap-vue'

  export default {
    name: 'EditModal',
    components: {
        'b-modal': BModal,
        'b-button': BButton
    },
    props: ["edittask"],
    data() {
      return {
        modalShow: false,
        id: this.edittask._id,
        task: this.edittask.task,
        assignee: this.edittask.assignee,
        status: this.edittask.status
      }
    },
    methods: {
        handleOk() {
            const payload = {
              id: this.id,
              task: this.task,
              assignee: this.assignee,
              status: this.status
            }
            this.$emit('editTask', payload)
        }
    }
  }
</script>