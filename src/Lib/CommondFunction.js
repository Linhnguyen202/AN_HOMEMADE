export const GetFromToPaging = (currentPage,reCordPerPage,toRecord)=>{
    try{
        let _FromRecord = reCordPerPage * (currentPage -1) + 1;
        toRecord = reCordPerPage * currentPage
        return {_FromRecord ,toRecord}
    }
    catch(error){
       console.log(error)
       toRecord = -1
       return -1
    }
}