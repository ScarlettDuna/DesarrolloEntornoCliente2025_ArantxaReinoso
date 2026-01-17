function incrementar(obj, prop, n){
    if (obj.stats?.[prop] !== undefined &&
        typeof obj.stats[prop] === 'number' && 
        typeof n === 'number') {
        obj.stats[prop] += n;
    }
}