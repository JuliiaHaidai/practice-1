export default function formatTime(seconds) {
    let hours = Math.trunc(seconds/3600);
    let minutes = Math.trunc((seconds-hours*3600)/60);
    let sec = seconds-(hours*3600)-(minutes*60);
    if (hours > 12){
        hours = hours - 12;
    }
    if (hours==0){
      hours = hours+12
    }
    if (hours < 10){
      hours = "0"+hours;
    }
    if (minutes < 10){
      minutes = "0"+minutes;
    }
    if (sec < 10){
      sec = "0"+sec;
    }
    let result = hours+":"+minutes+":"+sec;
    if (seconds<43200 || seconds===86400){
      return result+" AM";
    }
    else{
      return result+" PM";
    }
}
