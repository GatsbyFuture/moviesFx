const searchHandler = (data, term) => {
    if (term.length === 0) return data;
    return data.filter(item => (
        item.name.toLowerCase().includes(term.toLowerCase())
    ))
}

const filterHandler = (data, term) => {
    switch (term) {
        case "popular":
            return data.filter(item => item.like);
        case "mostViewers":
            return data.filter(item => item.viewers > 500)
        default:
            return data;
    }
}

export {searchHandler, filterHandler};