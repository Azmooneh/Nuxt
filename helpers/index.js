export const numberWithCommas = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const getHoursPast = (publishTime) => {
    // Convert publishTime string to a Date object
    const publishDate = new Date(publishTime);

    // Get the current date and time
    const now = new Date();

    // Calculate the difference in hours
    const differenceInHours = (now - publishDate) / 1000 / 60 / 60;

    if (differenceInHours < 1) {
        return 'کمتر از 1 ساعت قبل';
    } else if (differenceInHours >= 1 && differenceInHours < 24) {
        return `${Math.floor(differenceInHours)} ساعت قبل`;
    } else {
        const daysPast = Math.floor(differenceInHours / 24);
        return `${daysPast} روز قبل`;
    }
}

export const renderCurrentDate = () => {
    return new Intl.DateTimeFormat('fa-IR', { dateStyle: 'medium' }).format(new Date())
}