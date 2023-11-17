const formateDate = (date, config) => {
    const defaultOptions = { day: 'numeric', month: 'long', year: 'numeric' }
    const options = config ? config.options : defaultOptions;
    return new Date(date).toLocaleDateString("en-US", options)
};

export default formateDate;