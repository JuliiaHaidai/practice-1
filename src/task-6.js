export default function getStats(data) {
    if (data.length === 0){
        return{
            min: null, 
            max: null,
            avg: null
        };
    }
    let min = Math.min(...data);
    let max = Math.max(...data);
    let avg = 0;
    for (let i = 0; i < data.length; i++){
        avg += data[i]/data.length
    }
    return{
        min: min, 
        max: max,
        avg: +avg.toFixed(2)
    }
}
