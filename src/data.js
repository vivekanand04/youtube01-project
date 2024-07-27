//export const API_KEY='AIzaSyC3SbM0KC6J3yP1-P_KjegrxdhE1uF-VFc';
export const API_KEY = 'AIzaSyDbB3LiwboUcLXU3aGBKI05sg_jxnceYpQ';
export const value_converter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M";
    }
    else if (value >= 1000)
        return Math.floor(value / 1000) + "K";
    else return value;
}
 