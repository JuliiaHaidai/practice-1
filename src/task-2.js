
export default function getNthItem(a, n) {
    let s = [];
    if (n===0){
        return s=[];
    }
    for(let i=1; i<=n; i++){
      s[0]=0;
      s[i] = a-2*s[i-1];
    }
    return s[n];
}
