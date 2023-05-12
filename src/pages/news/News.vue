<template>
  <div>
    <router-view></router-view>
  </div>

  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            id:1,
            name:"学工部",
            datetime:"2010-01-01 12:00:00"
          },{
            id:2,
            name:"教研部",
            datetime:"2010-01-01 12:00:00"
          },{
            id:3,
            name:"就业部",
            datetime:"2010-01-01 12:00:00"
          },{
            id:4,
            name:"人事部",
            datetime:"2010-01-01 12:00:00"
          },{
            id:5,
            name:"行政部",
            datetime:"2010-01-01 12:00:00"
          }]
        }
      },
      methods: {

      }
    }
  </script>

  <style scoped >
/*  router-link的颜色*/
  .router-link-active {
    background-color: #42b943;
  }
  </style>
