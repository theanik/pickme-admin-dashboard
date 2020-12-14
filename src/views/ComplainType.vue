<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
          
           
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                      <div class="card shadow"
                            :class="type === 'dark' ? 'bg-default': ''">
                          <div class="card-header border-0"
                              :class="type === 'dark' ? 'bg-transparent': ''">
                            <div class="row align-items-center">
                              <div class="col">
                                <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
                                
                                </h3>
                              </div>
                              <div class="col text-right">
                                
                                 <b-button @click.prevent="create" class="btn btn-success">ADD NEW COMPLAIN TYPE</b-button>
                              </div>
                            </div>
                          </div>

                              <div class="table-responsive">
                                <base-table class="table align-items-center table-flush"
                                            :class="type === 'dark' ? 'table-dark': ''"
                                            :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
                                            tbody-classes="list"
                                            :data="tableData">
                                  <template slot="columns">
                                    <th>Complain Type</th>
                                    <th>Action</th>
                                  </template>

                                  <template slot-scope="{row}">
                                    
                                    <td class="budget">
                                      {{ row.complainType}}
                                    </td>
                                  

                                    <td class="text-right">
                                     
                                      <b-button @click.prevent="destroy(row)" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></b-button>
                                    </td>

                                  </template>

                                </base-table>
                              </div>

                          <div class="card-footer d-flex justify-content-end"
                              :class="type === 'dark' ? 'bg-transparent': ''">
                            <base-pagination total="{row}"></base-pagination>
                          </div>

                        </div>
                </div>
            </div>


            <!-- Modal -->
          <b-modal ref="modal" hide-footer :title="modalTitle">
              <div class="d-block">
                <b-form  @submit.prevent="editMode ? update() : storeData()" method="post">

                  <b-form-group label="Enter Complain Type" >
                    <b-form-input v-model="form.complainType" type="text" required placeholder="Enter Name" ></b-form-input>
                  </b-form-group>


                  <b-button type="submit" variant="primary">Submit</b-button>
                  <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>
              </div>
              
            </b-modal>

            

        </div>

    </div>
</template>
<script>
  import ProjectsTable from './Tables/ProjectsTable'
  import values from '../value'
  export default {
    data(){
      return{
         form : new Form({
            id : '',
            complainType : ''
          }),
        editMode : false,
        tableData: [],
        modalTitle : '',
        showDetais : {},
        showMode : false,
      }
    },
    mounted(){
      if(!localStorage.getItem('auth-token')){
            this.$router.replace(this.$route.query.redirect || '/login')
        }
      console.log('employee mounted')
      this.getData();
    },
    name: 'tables',
    components: {
      ProjectsTable
    },
    methods :{
      onFileSelected(event){
        console.log(event)
        this.selectedFile = event.target.files[0]
      },
      create(){
        this.editMode = false,
        this.modalTitle = "ADD VEHICLE TYPE"
        this.form.reset()
        this.$refs['modal'].show()
        console.log('cl')
      },getData(){
        this.axios.get(`${values.BASE_URL}/api/v1/all_complain`,
        {headers:{'auth-token':localStorage.getItem('auth-token')}})
          .then(res=>{
            console.log(res.data.AllComplain)
            this.tableData = res.data.AllComplain
          }).catch(e=>{
            console.log(e)
          })
      },
      storeData(){
        this.form.post(`${values.BASE_URL}/admin_api/v1/create_complain_type`,{
          headers:{'auth-token':localStorage.getItem('auth-token')}
        }).then(res=>{
          this.getData()
          if(this.form.successful){
                this.form.clear()
                this.$refs['modal'].hide()
                this.$snotify.success('Complain Type Add Successfully','Success')
            }else{
                this.$snotify.error('Something wend wrong. Try aging','Error')
            }
        }).catch(e=>{
          this.$snotify.error('Something went wrong..try again','Error')
            console.log(e)
        })

    },
    destroy(row){
          this.$snotify.clear()
          this.$snotify.confirm("You will not be able to recover this data!","Are you sure?", {
                  showProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true,
                  buttons:[
                      {
                          text : "Yes",
                          action : toast => {
                              this.$snotify.remove(toast.id)
                              this.axios.delete(`${values.BASE_URL}/admin_api/v1/delete_complain/`+row.id,{headers:{
                              'auth-token':localStorage.getItem('auth-token'),
                              }})
                              .then(res=>{
                                  this.getData()
                                  this.$snotify.success('Vehicle Delete','Success')
                              })
                              .catch(e=>{
                                this.$snotify.error('Something wend wrong','Error')
                                  console.log(e)
                              })
                          },
                          bold : true
                      },
                      {
                          text : "No",
                          action : toast => {
                              this.$snotify.remove(toast.id)
                          },
                          bold : true
                      }
                      
                  ]
              })
            },
            show(row){
              this.$refs['my-modal2'].show()
              this.modalTitle = "Show Details for" +row.name;
              this.showDetais = row
            }








    },
    
  };

</script>

<style></style>
