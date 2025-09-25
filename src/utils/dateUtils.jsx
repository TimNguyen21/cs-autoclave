const formatDateMMDDYYYY = (dateStr) => {
    // dateStr is in the format of "YYYY-MM-DD"
    const [year, month, day] = dateStr.split("-");

    return `${month}${day}${year}`;
}

const formatDateMMDDYYYYWithSlash = (dateStr) => {
    // dateStr is in the format of "YYYY-MM-DD"
    const [year, month, day] = dateStr.split("-");

    return `${month}/${day}/${year}`;
}

const currentDateYYYYMMDD = () => {
    //return current date format of "YYYY-MM-DD"
    const today = new Date().toISOString().split('T')[0];
    return today;
}


export { formatDateMMDDYYYY, formatDateMMDDYYYYWithSlash, currentDateYYYYMMDD };
