import api from "./api";
const token = sessionStorage.getItem('token')
export async function GetDrivers(active){
    const response = await api.get(active===true?`/driver/?is_active=${true}`:`/driver/`,{
    headers: {
        'Authorization': `Token ${token}` 
      }
    }
    )
    if(response.data.success===true){
        return response.data.data
    }else{
        return []
    }
}


export async function GetDispatchers(active){
    const response = await api.get(active===true?'/dispatcher/?is_active=true':'/dispatcher/',{
        headers: {
            'Authorization': `Token ${token}` 
          }
        })
    if(response.data.success===true){
        return response.data.data
    }else{
        return []
    }
}

export async function GetOperators(active){
    const response = await api.get(active===true?'/owner-operator/?is_active=true':'/owner-operator/',{
        headers: {
            'Authorization': `Token ${token}` 
          }
        })
    if(response.data.success===true){
        return response.data.data
    }else{
        return []
    }
}
