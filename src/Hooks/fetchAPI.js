import useAxios from "./useAxios";

export const fetchStats = async () => {
    const { data } = await useAxios.get('/application/showstats')
    return data 
}

export const fetchGoals = async () => {
    try{
        const { data } = await useAxios.get('/goal')
        return data
    } catch (error){
        throw error
    }
}

export const fetchUser = async () => {
    try{
        const { data } = await useAxios.get('/auth')
    } catch (error){
        throw error
    }
}