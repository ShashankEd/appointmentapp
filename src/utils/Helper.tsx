export const getDay =(day:number) => {
    return day === 1 ? 'Today' : ( day === 2 ? 'Tomorrow' : 'Day After Tomorrow')
}

export const getTime = (day:number) => {
    let i =10;
    let result = '';
    while(i <=18) {
        if(i < 12) {
            if(day === i) {
                result = `${i} AM-${i + 2} PM`;
                break;
            }
        } else {
            if(day === i) {
                result = `${i > 12 ? i - 12 : i} PM-${(i + 2 - 12)} PM`;
                break;
            }
        }
        i = i+2;
    }
    return result;
}

/**
 * 
 * @param day 
 * @param time 
 * @param username 
 * @param email 
 * @param phonenumber 
 * @returns disabled or not
 */
export const keepBookDisabled = (
    day: number,
    time: number,
    username: string,
    email: string,
    phonenumber: string
) => {
    let result = false;
    if(day > 0 && time > 0 && username.length && email.length && phonenumber.length) {
        result = true;
    }
    return result;
}