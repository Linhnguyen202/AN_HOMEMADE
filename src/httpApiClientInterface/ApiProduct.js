import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { toast } from 'react-toastify';
import { BaseHttpsService } from '../Lib/Commomdata';
export const ProductsUpdate = async (token,data) => {
    let _result = -1
    await fetch('https://localhost:44339/api/products/insert', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }) 
    .then(res => res.json())
    .then((data) => {
        _result = data.success
    }).catch((e)=>{
        console.log(e)
        _result = -1101
    })
    return _result
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


export const DeleteItem = async (data,token)=>{
        let _result = -1
        await fetch(`${BaseHttpsService}/api/products/delete?id=${data.Id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`
            },
            body: JSON.stringify()
        }) 
        .then(res => res.json())
        .then((data) => {
            _result = data.success
        }).catch((e)=>{
            console.log(e)
            _result = -1101
        })
        return _result
}
   

export const getDetail = async (id,token)=>{
    let detailList = {}
    await fetch(`${BaseHttpsService}/api/products/get-by-id?id=${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body: JSON.stringify()
    }) 
    .then(res => res.json())
    .then((data) => {
        detailList=JSON.parse(data.jsonData)
    }).catch((e)=>{console.log(e)})
    return detailList
}
export const productItemEdit= async (data,token)=>{
    console.log(data)
    let _result = -1
    await fetch(`${BaseHttpsService}/api/products/update`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }) 
    .then(res => res.json())
    .then((data) => {
        _result = data.success
    }).catch((e)=>{
        _result = -1101
    })

    return _result
}