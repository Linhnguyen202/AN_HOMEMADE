import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { toast } from 'react-toastify';
import { BaseHttpsService } from '../Lib/Commomdata';
export const ProductsUpdate = async (token,data) => {
    console.log(token,data)
    console.log(typeof data.Modified_Date)
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
        toast.success("Add in succesfully",{
            pauseOnHover:false,
            delay:0
        })   
    }).catch((e)=>{
        toast.error("Add in failed",{
            pauseOnHover:false,
            delay:0
        })    
    })
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
export const ProductsDelete = ({index,listData,token})=>{
    confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='custom-ui'>
              <h1>Are you sure?</h1>
              <p>You want to delete this file?</p>
              <div>
                <button className='btn-accept' onClick={() => {
                  console.log(listData[index])
                  DeleteItem()
                  onClose()
              }}>Yes, Delete it!</button>
                <button className='btn-reject' onClick={onClose}>No</button>
              </div>
             
            </div>
          )
        }
    })
    const DeleteItem = async (id,modified_By)=>{
        await fetch(`${BaseHttpsService}/api/products/delete?id=${listData[index].Id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`
            },
            body: JSON.stringify()
        }) 
        .then(res => res.json())
        .then((data) => {
            toast.success("Delete succesfully",{
                pauseOnHover:false,
                delay:0
            })  
        }).catch((e)=>{
            toast.error("Delete failed",{
                pauseOnHover:false,
                delay:0
            })
        })
    }
   
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