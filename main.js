 show = () => { 
        let   second = 1000 , 
            minutes = second * 60 , 
            hours = minutes * 60 , 
            days = hours * 24 ;
        let name = document.getElementById('main').value ;
        let dat = document.getElementById('datetime').value ;
        let countDown = new Date(`${dat}`).getTime() ;
      if(dat == "" || name == ""){
          alert (`Enter Event's information`);
      }else{
       x = setInterval(() => {
        let now = new Date();
        let resul = countDown - now ;
        let day = Math.floor(resul / (days)),
        hour=  Math.floor((resul % (days)) / (hours)),
        min = Math.floor((resul % (hours)) / (minutes)),
        sec =  Math.floor((resul % (minutes)) / second);
        if(hour < 0 || min < 0 || sec < 0 ){
          alert(`please Enter a Date bigger than  ${now.toLocaleDateString()}`)
        } else{
        document.getElementById("h1").innerHTML = name;
        document.getElementById("days").innerHTML = day < 10 ? `0${day}` : day ,
        document.getElementById("hours").innerHTML = hour < 10 ? `0${hour}` : hour,
        document.getElementById("minutes").innerHTML = min < 10 ? `0${min}` : min,
        document.getElementById("seconds").innerHTML = sec < 10 ? `0${sec}` : sec;
      }
        if (resul < 0) {
            clearInterval(x);
          }
       }, 1000)
       document.getElementById('main').value = ""   ;
      }   
  }
document.getElementById("btn").addEventListener("click", function(event){
    event.preventDefault()
  });
