// const {createApp} = Vue;

// createApp({
//     data(){
//         return{
//             temp:"",
//             humedad:"",
//             viento: "",
//             fechaHora:""
//         }
//     },
//     created(){
//         fetch("http://api.weatherunlocked.com/api/current/-34.60,-58.45?app_id=06dc939e&app_key=c7370ac7471b950011a7b18335ec9d2a")
//         .then(res => res.json())
//         .then (data =>{
//             console.log(data);
//             this.temp=data.temp_c;
//             this.humedad=data.humid_pct;
//             this.viento=data.vis_km;

//         })
//         }
// }).mount("#app")
