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


export { formatDateMMDDYYYY, formatDateMMDDYYYYWithSlash };
