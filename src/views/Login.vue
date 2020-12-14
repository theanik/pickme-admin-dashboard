
<template>
        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-header bg-transparent pb-5">
                        <div class="text-muted text-center mt-2 mb-3">Sign in Rajdut Cab Admin</div>
                        <div class="btn-wrapper text-center">
                            
                        </div>
                    </div>
                    <div class="card-body px-lg-5 py-lg-5">
                        <div class="text-center text-muted mb-4">
                        </div>
                        <form role="form" @submit.prevent="login">
                            <b-form-input class="input-group-alternative mb-3"
                                        placeholder="Email"
                                        addon-left-icon="ni ni-email-83"
                                        v-model="userName"></b-form-input>
                            <b-form-input class="input-group-alternative"
                                        placeholder="Password"
                                        type="password"
                                        addon-left-icon="ni ni-lock-circle-open"
                                        v-model="password"></b-form-input>

                            <div class="text-center">
                                <b-button type="primary" class="my-4" variant="primary">Sign In</b-button>
                                <!-- <button type="primary" class="my-4">Sign in</button> -->
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-6">
                        <a href="#" class="text-light"><small>Forgot password?</small></a>
                    </div>
                    <div class="col-6 text-right">
                        <router-link to="/register" class="text-light"><small>Create new account</small></router-link>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import values from '../value'
import axios from 'axios';
  export default {
    data() {
      return {
          userName: '',
          password: '',
          submit : false,
      }
    },
    mounted(){
        if(localStorage.getItem('auth-token')){
            this.$router.replace(this.$route.query.redirect || '/dashboard')
        }
    },
    methods :{
        login(){
            this.submit = true
            if(this.userName && this.password){
                axios.post(`${values.BASE_URL}/api/v1/login_admin`,{userName:this.userName,password:this.password})
                .then((data)=>{
                    if(data.data.error == false){
                        localStorage.setItem('auth-token',data.data.token)
                        localStorage.setItem('admin-data',JSON.stringify(data.data.admin_info))
                        this.$snotify.success('Lonin Successfull','Loged In')
                       // console.log(data.data.admin_info)
                        this.$router.replace(this.$route.query.redirect || '/dashboard')
                    }
                    
                }).catch(e=>{
                    console.log(e)
                })
            console.log(this.userName)
            console.log(this.password)
            }else{
                console.log('some miss')
                this.$snotify.error('Some things are missing','Error')
            }
            
        }
    }
  }
</script>
<style>
</style>
