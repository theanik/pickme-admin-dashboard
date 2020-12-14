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
                                    <th>Complain</th>
                                    <th>Complain Types</th>
                                    <th>Action</th>
                                  </template>

                                  <template slot-scope="{row}">
                                    
                                    <td class="budget" style="">
                                      <a @click.prevent="showDriverDetails(row.Driver.id)"
                                        class="text-primary" style="cursor:pointer">
                                          {{ row.Driver.firstName}}
                                      </a>
                                      
                                    </td>
                                    <td>
                                      <a @click.prevent="showUserDetails(row.User.id)"
                                        class="text-primary" style="cursor:pointer">
                                         {{ row.User.firstName }}
                                      </a>
                                      
                                    </td>
                                    <td>
                                      {{ row.complain }}
                                    </td>
                                    <td>
                                      {{ row.complainType }}
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
          <b-modal ref="my-modal1" hide-footer :title="modalTitle1">
            <div class="d-block">
              <b-list-group>
                <b-list-group-item><strong>First Name</strong> : {{ showDetais.firstName }}</b-list-group-item>
                <b-list-group-item><strong>User Name</strong> : {{ showDetais.lastName }}</b-list-group-item>
                <b-list-group-item><strong>Email</strong> : {{ showDetais.email }}</b-list-group-item>
                <b-list-group-item><strong>Gander</strong> : {{ showDetais.gander }}</b-list-group-item>
                <b-list-group-item><strong>Date of Birth</strong> : {{ showDetais.dob }}</b-list-group-item>
                <b-list-group-item><strong>City</strong> : {{ showDetais.city }}</b-list-group-item>
                <b-list-group-item><strong>Image</strong> : <img height="250px" width="250px" :src="showDetais.image"></b-list-group-item>
                <b-list-group-item><strong>Driving Licence</strong> :  <img height="250px" width="250px" :src="showDetais.drivingLicence"></b-list-group-item>
                <b-list-group-item><strong>Insurance Image</strong> : <img height="250px" width="250px" :src="showDetais.insuranceImg"></b-list-group-item>
                <b-list-group-item><strong>Pan card Image</strong> : <img height="250px" width="250px" :src="showDetais.pancardImg"></b-list-group-item>
                <b-list-group-item><strong>vehicleName</strong> : {{ showDetais.vehicleName }}</b-list-group-item>
                <b-list-group-item><strong>vehicleReg</strong> :  {{ showDetais.vehicleReg }}</b-list-group-item>
                <b-list-group-item><strong>vehicleRegImg</strong> : <img height="250px" width="250px" :src="showDetais.vehicleRegImg"></b-list-group-item>
                <b-list-group-item><strong>vehicleImg</strong> : <img height="250px" width="250px" :src="showDetais.vehicleImg"></b-list-group-item>
                <b-list-group-item><strong>vehicleType</strong> : {{ showDetais.vehicleType }}</b-list-group-item>
                <b-list-group-item><strong>Is Approve</strong> : <p v-if="showDetais.isApprove == 1">Approved</p>
                                                                <p v-if="showDetais.isApprove == 0"> Not Approved</p></b-list-group-item>
                
                <b-list-group-item><strong>Time</strong> : {{ showDetais.createdAt | mydate}}</b-list-group-item>
               
              </b-list-group>
            </div>
          </b-modal>

          <!--  -->
        <b-modal ref="my-modal3" hide-footer :title="modalTitle3">
            <div class="d-block">
              <b-list-group>
                <b-list-group-item><strong>First Name</strong> : {{ showDetais.firstName }}</b-list-group-item>
                <b-list-group-item><strong>User Name</strong> : {{ showDetais.lastName }}</b-list-group-item>
                <b-list-group-item><strong>Email</strong> : {{ showDetais.email }}</b-list-group-item>
                <b-list-group-item><strong>Gander</strong> : {{ showDetais.gander }}</b-list-group-item>
                <b-list-group-item><strong>Date of Birth</strong> : {{ showDetais.dob }}</b-list-group-item>
                <b-list-group-item><strong>Image</strong> : <img height="250px" width="250px" :src="showDetais.image"></b-list-group-item>
                
                <b-list-group-item><strong>Time</strong> : {{ showDetais.createdAt | mydate}}</b-list-group-item>
               
              </b-list-group>
            </div>
          </b-modal>
             <!-- show modal -->
            <b-modal ref="my-modal2" hide-footer :title="modalTitle">
            <div class="d-block">
              <b-list-group>
                <b-list-group-item><strong>Driver Name</strong> : {{ showDetais.driverId }}</b-list-group-item>
                <b-list-group-item><strong>User Name</strong> : {{ showDetais.userId }}</b-list-group-item>
                <b-list-group-item><strong>Complain Type</strong> : {{ showDetais.complainType }}</b-list-group-item>
                <b-list-group-item><strong>Complain</strong> : {{ showDetais.complain }}</b-list-group-item>
                
                <b-list-group-item><strong>Time</strong> : {{ showDetais.createdAt | mydate}}</b-list-group-item>
               
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
      getData(){
        this.axios.get(`${values.BASE_URL}/api/v1/all_user_complain`,
        {headers:{'auth-token':localStorage.getItem('auth-token')}})
          .then(res=>{
            console.log(res.data.AllUserComplain)
            this.tableData = res.data.AllUserComplain
          }).catch(e=>{
            console.log(e)
          })
      },
        show(row){
          this.$refs['my-modal2'].show()
          this.modalTitle = "Show Details for" +row.name;
          this.showDetais = row
        },
        showUserDetails(id){
          this.$refs['my-modal3'].show()
          this.axios.get(`${values.BASE_URL}/api/v1/user_by_id/`+id)
            .then(res=>{
              this.showDetais = res.data
            }).catch(e => console.log(e))
        },
        showDriverDetails(id){
          this.$refs['my-modal1'].show()
          this.axios.get(`${values.BASE_URL}/api/v1/driver_by_id/`+id)
            .then(res=>{
              this.showDetais = res.data
            }).catch(e => console.log(e))
        },









    },
    
  };

</script>

<style></style>
