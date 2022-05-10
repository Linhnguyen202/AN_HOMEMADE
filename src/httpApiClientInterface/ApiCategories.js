import { confirmAlert } from 'react-confirm-alert';
import { BaseHttpsService } from '../Lib/Commomdata';
import 'react-confirm-alert/src/react-confirm-alert.css' 
export const  CategoriesUpdate = async (data)=>{
    await fetch('https://localhost:44339/api/categories/insert', {
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

export const CategoriesDelete = ({index,setData,data,listData})=>{
    console.log(listData)
    confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='custom-ui'>
              <h1>Are you sure?</h1>
              <p>You want to delete this file?</p>
              <button onClick={onClose}>No</button>
              <button onClick={() => {
                  console.log(listData[index])
                  DeleteItem()
                  onClose()
              }}>Yes, Delete it!</button>
            </div>
          )
        }
    })
    const DeleteItem = async (id,modified_By)=>{
        await fetch(`${BaseHttpsService}/api/categories/delete?id=${listData[index].Id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization' : 'Bearer {p_token}'
            },
            body: JSON.stringify()
        }) 
        .then(res => res.json())
        .then((data) => {
            console.log(data)
        }).catch((e)=>{console.log(e)})
    }
   
}

export const search= async (keySearch,startRow,endRow,orderBy="")=>{
    let responseSearch
    await fetch(`${BaseHttpsService}/api/categories/search?keySearch=${keySearch}&startRow=${startRow}&endRow=${endRow}&orderBy=${orderBy}`)
    .then(res => res.json())
    .then((data) => {
        responseSearch = data
        return data
        // setCategories([...JSON.parse(data.jsonData)])  
    })
    .catch((e)=>{
        console.log(e)
        return null;
    })
    return responseSearch
}