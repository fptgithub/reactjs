function Pagedivider(props){
    const next = ()=>{
        if(props.size>0){
        props.setPage(props.Page+1)
        }
    }
    const prev = ()=>{
      if(props.Page>1){
        props.setPage(props.Page-1)
      }
    }
    return (
        <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item"><a className="page-link" onClick={prev}>Previous</a></li>
                <li className="page-item"><a className="page-link">{props.Page}</a></li>
                <li className="page-item"><a className="page-link" onClick={next}>Next</a></li>
              </ul>
            </nav>
          </div>
    )
}
export default Pagedivider