let i = 0;
let tulisan = "Muhammad Rahman";
let kecepatan = 50; //satuan milisecond

function tulis(){
    if(i<tulisan.length){
        document.getElementById("lokasiTulisan").innerHTML += tulisan.charAt(i);
        i++;
        setTimeout(tulis, kecepatan);
    }
}