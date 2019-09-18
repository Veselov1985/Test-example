/*
По первому тестовому исправил все  вот так лучше наверное будет
@params s{string}
@params a{string}
@params b{string}
@return number
 */
const  findIndex = (s, a, b) => {
    return s.length ?  s.split("").reduceRight((acc, next, i) => {
        if ((next === a || next === b) && acc === -1) {
            return i;
        } else {
            return acc;
        }
    }, -1) : -1 ;
};

// Please usage findIndex()
