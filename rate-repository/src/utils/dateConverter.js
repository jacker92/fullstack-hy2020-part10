export const dateToFinnishFormat = (date) => {
    const newDate = new Date(date);
    console.log("newdate", newDate);
    return `${addZ(newDate.getDay())}.${addZ(newDate.getMonth() + 1)}.${addZ(newDate.getFullYear())}`;
};

const addZ = (n) => { return n < 10 ? '0' + n : '' + n; };