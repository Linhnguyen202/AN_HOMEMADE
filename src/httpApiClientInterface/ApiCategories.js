import { confirmAlert } from 'react-confirm-alert';
import { BaseHttpsService } from '../Lib/Commomdata';
import 'react-confirm-alert/src/react-confirm-alert.css' 
import { toast } from 'react-toastify';

export const  CategoriesUpdate = async (data,token)=>{
    let _result = -1
    await fetch(`${BaseHttpsService}/api/categories/insert`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then((data) => {
        _result = data.success  
    }).catch((e)=>{
        console.log(e)
        _result = -1101
    })
    return _result
}

export const CategoriesDelete = ({index,setData,data,listData,token})=>{
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
        let _result = -1
        await fetch(`${BaseHttpsService}/api/categories/delete?id=${listData[index].Id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`
            },
        }) 
        .then(res => res.json())
        .then((data) => {
            _result = data.success
        }).catch((e)=>{
            console.log(e)
            _result = -1101
        return _result
        })

    }
   
}

export const search= async (keySearch,startRow,endRow,orderBy="")=>{
    let responseSearch
    await fetch(`${BaseHttpsService}/api/categories/search?keySearch=${keySearch}&startRow=${startRow}&endRow=${endRow}&orderBy=${orderBy}`)
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
export const categoriesItemEdit= async (data,token)=>{
    let _result = -1
    await fetch(`${BaseHttpsService}/api/categories/update`, {
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
        console.log(e)
        _result = -1101
   })
    return _result
}