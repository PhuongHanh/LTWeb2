import React, { Component } from 'react';
import axios from 'axios'
import { stringify } from 'querystring';
import $ from 'jquery';
import { ok } from 'assert';
class Login extends Component {
  constructor(props)
  { 
      super(props);
      this.Dangnhap=this.Dangnhap.bind(this);
      this.state={temp_remember:0,checkLogin:1}
  }
  
   componentDidMount(){
   axios.get('/users/login')
    .then(res=>{
      if(res.data.id)
      {
        window.location.href="/";
      }
      document.getElementById("username").value=res.data.username;
      document.getElementById("password").value=res.data.password;
    })
    .catch(err=>console.log("Error"));
   }
   checkRemember(){
      if($('.ghinho').prop('checked')===true)
      {
      return 1;
      }
      return 0;
   }
   
    Dangnhap()
    {
      var temp=0;
      var body= {
        username: this.refs.username.value,
        password: this.refs.password.value,
        status:this.checkRemember()
     }
      axios({
        method: 'post',
        url: "/users/login",
        data:stringify(body),
    }).then((res)=>{
      if(res.data===1)
      {
      window.location.href="/";
      }
      else{
        this.setState({checkLogin:0})
        this.refs.password.value="";
      }
    });
    }

  }
}

export default Login;






















