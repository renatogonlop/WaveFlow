export function getCurrentDate(separator = '/') {

    let newDate = new Date()
    console.log(newDate.toLocaleDateString());
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${date}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${year}`
}
