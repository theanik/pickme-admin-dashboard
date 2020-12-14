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
                                    <th>Driver Name</th>
                                    <th>User Name</th>
                                    <th>Car Type</th>
                                    <th>Start Ponin</th>
                                    <th>Fare</th>
                                    <th>Ride Status</th>
                                    <th>Action</th>
                                  </template>

                                  <template slot-scope="{row}">
                                    
                                    <td class="budget">
                                      {{ row.driverName}}
                                    </td>
                                    <td>
                                      {{ row.userName }}
                                    </td>
                                    <td>
                                      {{ row.carType }}
                                    </td>
                                    <td>
                                      {{ row.startPoint }}
                                    </td>
                                    <td>
                                      {{ row.fare }}
                                    </td>
                                    <td>
                                      {{ row.rideStatus }}
                                    </td>
                                  

                                    <td class="text-right">
                                      <b-button @click.prevent="show(row)" class="btn btn-info btn-sm"><i class="fa fa-eye"></i></b-button>
                                      
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
          

             <!-- show modal -->
            <b-modal ref="my-modal2" hide-footer :title="modalTitle">
            <div class="d-block">
              <b-list-group>
                <b-list-group-item><strong>Driver Name</strong> : {{ showDetais.driverName }}</b-list-group-item>
                <b-list-group-item><strong>User Name</strong> : {{ showDetais.userName }}</b-list-group-item>
                <b-list-group-item><strong>Car Type</strong> : {{ showDetais.carType }}</b-list-group-item>
                <b-list-group-item><strong>Start Point</strong> : {{ showDetais.startPoint }}</b-list-group-item>
                <b-list-group-item><strong>Fare</strong> : {{ showDetais.fare }}</b-list-group-item>
                <b-list-group-item><strong>Destination Point</strong> : {{ showDetais.destinationPoint }}</b-list-group-item>
                <b-list-group-item><strong>Ride Status</strong> : {{ showDetais.rideStatus }}</b-list-group-item>
                <b-list-group-item><strong>Ride Time</strong> : {{ showDetais.createdAt | mydate}}</b-list-group-item>
               
              </b-list-group>
            </div>
          </b-modal>
          <!-- end show modal -->

        </div>

    </div>
</template>
<script>
  import ProjectsTable from './Tables/ProjectsTable'
  import values from '../value'
  export default {
    data(){
      return{
         
        editMode : false,
        tableData: [],
        modalTitle : '',
        showDetais : {},
        showMode : false,
        selected: null,
      }
    },
    mounted(){
      if(!localStorage.getItem('auth-token')){
            this.$router.replace(this.$route.query.redirect || '/login')
        }
      console.log('employee mounted')
      this.getData();
      this.getVehicle()
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
        this.modalTitle = "ADD REGION"
        this.form.reset()
        this.$refs['modal'].show()
        console.log('cl')
      },getData(){
        this.axios.get(`${values.BASE_URL}/admin_api/v1/all_ride_request_log`,
        {headers:{'auth-token':localStorage.getItem('auth-token')}})
          .then(res=>{
            console.log(res.data.AllRideReqLog)
            this.tableData = res.data.AllRideReqLog
          }).catch(e=>{
            console.log(e)
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
