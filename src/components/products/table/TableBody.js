function TableBody(props){
    var Product  = props.Data
    const show = (x) =>{
        props.setproduct(x)
    }
    const xoa = (x)=>{
        props.xoa(x)
    }
    return(
        <tbody>
                {Product.map((x,idx)=>{
                   return ( <tr id = {idx} >
                        <th onClick={()=>{show(x)}}>{x.id}</th>
                        <td onClick={()=>{show(x)}}>{x.danhmucId}</td>
                        <td onClick={()=>{show(x)}}>{x.tensp}</td>
                        <td onClick={()=>{show(x)}}>{x.gia}</td>
                        <td onClick={()=>{show(x)}}>{x.mau}</td>
                        <td onClick={()=>{show(x)}}>{x.nhanhang}</td>
                        <td onClick={()=>{xoa(x)}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg></td>
                    </tr>
                   )
                })}
        </tbody>
    )
}
export default TableBody