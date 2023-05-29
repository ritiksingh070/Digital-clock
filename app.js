function updateClock(){
    let hours=document.getElementById("hours");
    let minutes=document.getElementById("minutes");
    let seconds=document.getElementById("seconds");
    let ampm=document.getElementById("ampm");

    let hrs=new Date().getHours();
    let min=new Date().getMinutes();
    let sec=new Date().getSeconds();

    hrs=hrs<10?"0"+hrs:hrs;
    min=min<10?"0"+min:min;
    sec=sec<10?"0"+sec:sec;

    if(hrs>12){
        hrs=hrs-12;
        ampm.innerHTML="Pm"
    }
    hours.innerHTML=hrs;
    minutes.innerHTML=min;
    seconds.innerHTML=sec;
    

    setTimeout(()=>{
        updateClock();
    },1000)
       
}
updateClock();


