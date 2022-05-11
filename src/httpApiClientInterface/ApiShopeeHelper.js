export const GetDetailByIdItemIdshop = async (itemId ,shopId) =>{
    let headers = new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('authority', 'shopee.vn');
    // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    headers.append('Origin','http://localhost:3000');
    await fetch(`https://shopee.vn/api/v4/item/get?itemid=${itemId}&shopid=${shopId}`,{
        mode: 'no-cors',
        method: 'GET',
        credentials: 'include',
        headers: headers,
    })
    .then((res)=>res.json())
    .then((data)=>{console.log(data)})
    .catch(err=>console.log(err))
}