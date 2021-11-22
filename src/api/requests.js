/* eslint-disable no-redeclare */
import api from "./api";

export async function GetDrivers(active){
    const response = await api.get(active===true?`/driver/?is_active=${true}`:`/driver/`)
    if(response.data.success===true){
        return response.data.data
    }else{
        return []
    }
}


export async function GetDispatchers(active){
    const response = await api.get(active===true?'/dispatcher/?is_active=true':'/dispatcher/')
    if(response.data.success===true){
        return response.data.data
    }else{
        return []
    }
}

export async function GetBoards(active){
    const response = await api.get(active===true?'/board/?is_active=true':'/board/')
    if(response.data.success===true){
        return response.data.data
    }else{
        return []
    }
}

export async function GetOperators(active){
    const response = await api.get(active===true?'/owner-operator/?is_active=true':'/owner-operator/')
    if(response.data.success===true){
        return response.data.data
    }else{
        return []
    }
}


export async function GetInvoices(filter){
    if (filter ==={}){
        var date = new Date();
        var day = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
        var url = `/invoice/?date__gte=${day} 00:00&date__lte=${day} 23:59`
    }else{
        var filter_url = ``
        for (const [key, value] of Object.entries(filter)) {
            if (value !== null){
                filter_url = filter_url + `${key}=${value}&`
            }
            
        }
        var url = `/invoice/?`+filter_url
    }
    const response = await api.get(url)
    if(response.data.success===true){
        return response.data
    }else{
        return []
    }
}