import useAxios from "./useAxios";


export const fetchStats = async () => {
    try {
        const { data } = await useAxios.get('/application/showstats')
        return(data)
    } catch (error) {
        console.log(error)
        throw error
    }
}