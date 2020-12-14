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
                                    <th>Phone</th>
                                    <th>Toatl Ride</th>
                                    <th>Total Earn</th>
                                    <th>Wallet</th>
                                    <th>Rating</th>
                                    <th>Action</th>
                                  </template>

                                  <template slot-scope="{row}">
                                   
                                    <td>
                                      {{ row.firstName }}
                                    </td>
                                    <td>
                                      {{ row.phone }}
                                    </td>
                                    <td>
                                      {{ row.totalRide }}
                                    </td>
                                    <td>
                                      {{ row.totalEarn }}
                                    </td>
                                    <td>
                                      {{ row.wallet }}
                                    </td>
                                    <td>
                                      {{ row.rating / row.ratingUserCount }}
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
                <b-list-group-item><strong>Driver First Name</strong> : {{ showDetais.firstName }}</b-list-group-item>
                <b-list-group-item><strong>Driver Last Name</strong> : {{ showDetais.lastName }}</b-list-group-item>
                <b-list-group-item><strong>Wallet</strong> : {{ showDetais.wallet }}</b-list-group-item>
                <b-list-group-item><strong>Total Ride</strong> : {{ showDetais.totalRide }}</b-list-group-item>
                <b-list-group-item><strong>Total Earn</strong> : {{ showDetais.totalEarn }}</b-list-group-item>
                <b-list-group-item><strong>Joinig Bonus</strong> : {{ showDetais.bonus }}</b-list-group-item>
                <b-list-group-item><strong>Rateing</strong> : {{ showDetais.rating / showDetais.ratingUserCount }}</b-list-group-item>
                <b-list-group-item><strong>Totak Rate User</strong> : {{ showDetais.ratingUserCount }}</b-list-group-item>
                <b-list-group-item><strong>Created At</strong> : {{ showDetais.createdAt | mydate}}</b-list-group-item>
               
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
        this.axios.get(`${values.BASE_URL}/api/v1/all_driver_eran_info`,
        {headers:{'auth-token':localStorage.getItem('auth-token')}})
          .then(res=>{
            console.log(res.data.AllDriverEarnInfo)
            this.tableData = res.data.AllDriverEarnInfo
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
