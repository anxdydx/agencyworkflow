export const allPostQueries  =()=>{
    const query = `*[_type == "assetvideo"] | order(_createdAt desc) {
        
    }`
    return query
}