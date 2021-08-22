var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Recep AB",
assets : {
large_image : "recep",
large_text : "Recep in the house",
small_image : "nene",
small_text : "Ekinler baş vermeden kör buzağı topallamazmış"

},
buttons : [{label : "31" , url : "https://www.ozcan.info"},{label : "Mutlaka İzle",url : "https://www.youtube.com/watch?v=Ei3HaqPCIWA"}] //kendinize göre yazın
}
})
})
client.login({ clientId : "818627795596869654" }).catch(console.error);




client.on('ready', () => {
    console.log("Önden giriş yapıldı");

  });               //ozcancore      Stingyboss#8164
