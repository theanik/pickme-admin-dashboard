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
                                    <th>User Name</th>
                                    <th>Recharce Amount</th>
                                    <th>Transaction Id</th>
                                    <th>Transaction Type</th>
                                    <th>Action</th>
                                  </template>

                                  <template slot-scope="{row}">
                                   
                                    <td>
                                      {{ row.firstName }}
                                    </td>
                                    <td>
                                      {{ row.rechargeAmount }}
                                    </td>
                                    <td>
                                      {{ row.transactionId }}
                                    </td>
                                    <td>
                                      {{ row.transactionType }}
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
                <b-list-group-item><strong>User Name</strong> : {{ showDetais.firstName }}</b-list-group-item>
                <b-list-group-item><strong>Recharce Amount</strong> : {{ showDetais.rechargeAmount }}</b-list-group-item>
                <b-list-group-item><strong>Transaction Id</strong> : {{ showDetais.transactionId }}</b-list-group-item>
                <b-list-group-item><strong>Transaction Type</strong> : {{ showDetais.transactionType }}</b-list-group-item>
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
      onFileSelected(event){
        console.log(event)
        this.selectedFile = event.target.files[0]
      },
      getData(){
        this.axios.get(`${values.BASE_URL}/api/v1/all_user_wallet_recharge_log`,
        {headers:{'auth-token':localStorage.getItem('auth-token')}})
          .then(res=>{
            console.log(res.data.AllUserWalletRechargeLog)
            this.tableData = res.data.AllUserWalletRechargeLog
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
