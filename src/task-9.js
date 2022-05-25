
export default function merge(data) {
    let result = {};
for (let i = 0; i < data.length; i++) {
    let item = data[i];
    for (let key in item) {
        if (!(key in result)){
            result[key] = [];
        }
        result[key].push(item[key]);
    }
}
    return result;
}
