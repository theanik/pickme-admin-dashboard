<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
            <div class="row mb">
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Total traffic"
                                type="gradient-red"
                                icon="ni ni-active-40"
                                class="mb-4 mb-xl-0"
                    >
                      Total User : {{this.total_user}}
                       
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Total traffic"
                                type="gradient-orange"
                                icon="ni ni-chart-pie-35"
                                class="mb-4 mb-xl-0"
                    >
                    Total Driver : {{this.total_driver}}
                        
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Sales"
                                type="gradient-green"
                                icon="ni ni-money-coins"
                                class="mb-4 mb-xl-0"
                    >
                    Total Active Driver Now : {{this.total_active_driver}}
                   
                    </stats-card>

                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Performance"
                                type="gradient-info"
                                icon="ni ni-chart-bar-32"
                                class="mb-4 mb-xl-0"
                    >

                  Total Admin : {{this.total_admin}}
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6 mt-2">
                    <stats-card title="Performance"
                                type="gradient-info"
                                icon="ni ni-chart-bar-32"
                                class="mb-4 mb-xl-0"
                    >

                  Total ride : {{this.total_ride}}
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6 mt-2">
                    <stats-card title="Performance"
                                type="gradient-info"
                                icon="ni ni-chart-bar-32"
                                class="mb-4 mb-xl-0"
                    >

                  Total Income : {{this.total_admin}}
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6 mt-2">
                    <stats-card title="Performance"
                                type="gradient-info"
                                icon="ni ni-chart-bar-32"
                                class="mb-4 mb-xl-0"
                    >

                  Total Admin : {{this.total_admin}}
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6 mt-2">
                    <stats-card title="Performance"
                                type="gradient-info"
                                icon="ni ni-chart-bar-32"
                                class="mb-4 mb-xl-0"
                    >

                  Total Admin : {{this.total_admin}}
                    </stats-card>
                </div>

            </div>
        </base-header>

        <!--Charts-->
        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-xl-8 mb-5 mb-xl-0">
                    <card type="default" header-classes="bg-transparent">
                        <div slot="header" class="row align-items-center">
                            <div class="col">
                                <h6 class="text-light text-uppercase ls-1 mb-1">Overview</h6>
                                <h5 class="h3 text-white mb-0">Sales value</h5>
                            </div>
                            <div class="col">
                                <ul class="nav nav-pills justify-content-end">
                                    <li class="nav-item mr-2 mr-md-0">
                                        <a class="nav-link py-2 px-3"
                                           href="#"
                                           :class="{active: bigLineChart.activeIndex === 0}"
                                           @click.prevent="initBigChart(0)">
                                            <span class="d-none d-md-block">Month</span>
                                            <span class="d-md-none">M</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link py-2 px-3"
                                           href="#"
                                           :class="{active: bigLineChart.activeIndex === 1}"
                                           @click.prevent="initBigChart(1)">
                                            <span class="d-none d-md-block">Week</span>
                                            <span class="d-md-none">W</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <line-chart
                                :height="350"
                                ref="bigChart"
                                :chart-data="bigLineChart.chartData"
                                :extra-options="bigLineChart.extraOptions"
                        >
                        </line-chart>

                    </card>
                </div>

                <div class="col-xl-4">
                    <card header-classes="bg-transparent">
                        <div slot="header" class="row align-items-center">
                            <div class="col">
                                <h6 class="text-uppercase text-muted ls-1 mb-1">Performance</h6>
                                <h5 class="h3 mb-0">Total orders</h5>
                            </div>
                        </div>

                        <bar-chart
                                :height="350"
                                ref="barChart"
                                :chart-data="redBarChart.chartData"
                        >
                        </bar-chart>
                    </card>
                </div>
            </div>
            <!-- End charts-->

            <!--Tables-->
            <!-- <div class="row mt-5">
                <div class="col-xl-8 mb-5 mb-xl-0">
                    <page-visits-table></page-visits-table>
                </div>
                <div class="col-xl-4">
                    <social-traffic-table></social-traffic-table>
                </div>
            </div> -->
            <!--End tables-->
        </div>

    </div>
</template>
<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart';

  // Tables
  import SocialTrafficTable from './Dashboard/SocialTrafficTable';
  import PageVisitsTable from './Dashboard/PageVisitsTable';
  import values from '../value'
  export default {
    components: {
      LineChart,
      BarChart,
      PageVisitsTable,
      SocialTrafficTable,
    },
    data() {
      return {
        bigLineChart: {
          allData: [
            [0, 20, 10, 30, 15, 40, 20, 60, 60],
            [0, 20, 5, 25, 10, 30, 15, 40, 40]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [],
            labels: [],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        redBarChart: {
          chartData: {
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Sales',
              data: [25, 20, 30, 22, 17, 29]
            }]
          }
        },
        total_driver : '',
        total_user : '',
        total_active_driver :'',
        total_admin : '',
        total_ride : '',


      };
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Performance',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      },

      countDriver(){
         this.axios.get(`${values.BASE_URL}/api/v1/count_driver`)
            .then(res=>{
              console.log(res.data.countDriver)
             this.total_driver = res.data.countDriver
            }).catch(e=>{
              console.log(e)
            })
      },
      countUser(){
         this.axios.get(`${values.BASE_URL}/api/v1/count_user`)
            .then(res=>{
              console.log(res.data.countUser)
             this.total_user = res.data.countUser
            }).catch(e=>{
              console.log(e)
            })
      },
      countActiveDriver(){
        this.axios.get(`${values.BASE_URL}/api/v1/count_actice_driver`)
            .then(res=>{
              console.log(res.data.countActiveDriver)
             this.total_active_driver = res.data.countActiveDriver
            }).catch(e=>{
              console.log(e)
            })
      },

      countAdmin(){
        this.axios.get(`${values.BASE_URL}/api/v1/count_admin`)
            .then(res=>{
              console.log(res.data.countAdmin)
             this.total_admin = res.data.countAdmin
            }).catch(e=>{
              console.log(e)
            })
      },
      countTotalRide(){
        this.axios.get(`${values.BASE_URL}/api/v1/total_complite_ride`)
            .then(res=>{
              console.log(res.data)
             this.total_ride = res.data
            }).catch(e=>{
              console.log(e)
            })
      }
    },
    mounted() {
      if(!localStorage.getItem('auth-token')){
            this.$router.replace(this.$route.query.redirect || '/login')
        }
      this.initBigChart(0);
      this.countDriver()
      this.countUser()
      this.countActiveDriver()
      this.countAdmin()
      this.countTotalRide()

    }
  };
</script>
<style></style>
