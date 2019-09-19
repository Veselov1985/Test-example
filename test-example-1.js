/*
Код после рефакторинга
 */
function func(s, a, b) {
    let i = s.length - 1;
    let index = -1;
    while (index == -1 && i >= 0) {
        const  letter = s.charAt(i);
        if (letter == a || letter == b) {
            index = i;
        }
        i = i - 1;
    }
    return index;
}



/*
Если задача стояла с 0 я б написал как то так
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
