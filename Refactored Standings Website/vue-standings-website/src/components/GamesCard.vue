<template>
<div class="card text-dark bg-white mb-3">
    <div class="card-body">
        <h6 class="card-header">{{cardTitle}}</h6>
        <div class="container p-4">
            <div class="row p-3">
                <div class="col-sm">
                    <div class="card float-left d-inline p-2 font-weight-bold">
                        <img :src = hTeamImg alt="" class="card-img-top">
                        <div class="card-body">{{hTeam}}</div>
                    </div>
                </div>
                <div class="col-sm">
                    <h1 class="card-title text-center pt-lg-5">{{hTeamScore}} - {{aTeamScore}}</h1>
                </div>
                <div class="col-sm">
                    <div class="card float-right d-inline p-2 font-weight-bold">
                        <img :src = aTeamImg alt="" class="card-img-top">
                        <div class="card-body">{{aTeam}}</div>
                    </div>    
                </div>
            </div>
            <table class="table text-dark table-bordered table-striped text-center">
                <thead>
                    <tr class="font-weight-bold">
                        <th>Team</th>
                        <th>Q1</th>
                        <th>Q2</th>
                        <th>Q3</th>
                        <th>Q4</th>
                        <th>OT</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{{hTeam}}</td>
                    <td>{{hq1}}</td>
                    <td>{{hq2}}</td>
                    <td>{{hq3}}</td>
                    <td>{{hq4}}</td>
                    <td>{{hOT}}</td>
                    <td>{{hTeamScore}}</td>
                    </tr>
                    <tr>
                    <td>{{aTeam}}</td>
                    <td>{{aq1}}</td>
                    <td>{{aq2}}</td>
                    <td>{{aq3}}</td>
                    <td>{{aq4}}</td>
                    <td>{{aOT}}</td>
                    <td>{{aTeamScore}}</td> 
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

</template>

<script>
export default {
    components: {

    },
    props:{
        cardTitle:String,
        hTeamImg:String,
        hTeam:String,
        aTeamImg:String,
        aTeam:String,
        hTeamScore:Number,
        aTeamScore:Number,
        hq1:Number,
        hq2:Number,
        hq3:Number,
        hq4:Number,
        hOT:Number,
        aq1:Number,
        aq2:Number,
        aq3:Number,
        aq4:Number,
        aOT:Number,

       

    },

    method: {

      
    }
}
</script>
<style>

</style>