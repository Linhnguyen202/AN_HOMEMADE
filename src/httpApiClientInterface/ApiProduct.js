import { BaseHttpsService } from '../Lib/Commomdata';
export const ProductsUpdate = async (data) => {
    await fetch('https://localhost:44339/api/products/update', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization' : 'Bearer {p_token}'
        },
        body: JSON.stringify(data)
    }) 
    .then(res => res.json())
    .then((data) => {
    }).catch((e)=>{console.log(e)})
}

export const search= async (keySearch,startRow,endRow,orderBy="")=>{
    let responseSearch
    await fetch(`${BaseHttpsService}/api/products/search?keySearch=${keySearch}&startRow=${startRow}&endRow=${endRow}&orderBy=${orderBy}`)
    .then(res => res.json())
    .then((data) => {
        responseSearch = data
        return data 
    })
    .catch((e)=>{
        console.log(e)
        return null;
    })
    return responseSearch
}
