//引入express、http-proxy-middleware中间件
const express = require('express');
const app = express();
//引入axios
const axios = require('axios');
//引入配置信息
const untils = require('../untils');

app.use('/getCountries',(req,res)=>{
  axios.get(untils.host+'/site/dropDownLaender').then(function (response) {
    let data = [...response.data.split('</option>').map(item=>{
      return item.split('>')
    }).filter(item=>{
      return item[1];
    })];
    let result = data.map(item=>{
      return {
        id: parseInt(item[0].split('<option value=')[1].split('"')[1]),
        country: item[1],
        imgUrl: untils.countryFlag+item[0].split('<option value=')[1].split('"')[1]+'.png'
      }
    });
    res.send({success:true,msg:'',data:result});
  }).catch(function (error) {
    console.error(error);
  })
});

app.listen(8060);
