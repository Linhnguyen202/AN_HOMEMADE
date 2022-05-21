
import { confirmAlert } from 'react-confirm-alert';
import {  failedModal, successModal } from './ModalAlert';

export const modalConfirm = (ApiFunction,data,token,success,failed) => {
    console.log(ApiFunction)
    confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='custom-ui'>
              <h1>Are you sure?</h1>
              <p>You want to delete this file?</p>
              <div>
                <button className='btn-accept' onClick={() => {
                    console.log(data)
                    ApiFunction(data,token).then((data)=>{
                      if(data > 0){
                        successModal(success)     
                      }
                      else{
                        failedModal(failed)
                      }
                    })
                  onClose()
                }}>Yes, Delete it!</button>
                <button className='btn-reject' onClick={onClose}>No</button>
              </div>
            </div> 
          
          )
        }
    })
};
