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
export const shopeeApi = async (itemId ,shopId) =>{
    await fetch(`https://shopee.vn/api/v4/item/get?itemid=${itemId}&shopid=${shopId}`,{
        method: 'GET',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Host':'<calculated when request is sent>',
            'Accept-Encoding':'gzip,deflate,br',
            'Connection':'keep-alive'
            // 'Authorization' : 'Bearer {p_token}'
        },
    })
    .then((res)=>res.json())
    .then((data)=>{console.log(data)})
    .catch(err=>console.log(err))
}