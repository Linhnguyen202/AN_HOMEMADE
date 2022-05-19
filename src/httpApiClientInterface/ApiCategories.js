import { confirmAlert } from 'react-confirm-alert';
import { BaseHttpsService } from '../Lib/Commomdata';
import 'react-confirm-alert/src/react-confirm-alert.css' 
import { toast } from 'react-toastify';
export const  CategoriesUpdate = async (data,token)=>{
    await fetch('https://localhost:44339/api/categories/insert', {
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

export const CategoriesDelete = ({index,setData,data,listData,token})=>{
    console.log(listData)
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
        console.log(listData[index].Id)
        await fetch(`${BaseHttpsService}/api/categories/delete?id=${listData[index].Id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`
            },
            
        }) 
        .then(res => res.json())
        .then((data) => {
            toast.success("Delete succesfully",{
                pauseOnHover:false,
                delay:0
            })   
        }).catch((e)=>{toast.error("Delete failed",{
            pauseOnHover:false,
            delay:0
        })  })
    }
   
}

export const search= async (keySearch,startRow,endRow,orderBy="")=>{
    console.log(startRow,endRow,orderBy="")
    let responseSearch
    await fetch(`${BaseHttpsService}/api/categories/search?keySearch=${keySearch}&startRow=${startRow}&endRow=${endRow}&orderBy=${orderBy}`)
    .then(res => res.json())
    .then((data) => {
        console.log(data)
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
    console.log(data)
    console.log(typeof data.modified_Date)
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
        console.log(data)
        toast.success("Edit succesfully",{
            pauseOnHover:false,
            delay:0
        })   
    }).catch((e)=>{toast.error("Edit failed",{
        pauseOnHover:false,
        delay:0
    })})
}