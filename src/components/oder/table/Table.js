import TableHeader from './TableHeader'
import TableBody from './TableBody'
function Table(props){
  var xoa = props.xoa
    return (
        <div className="row">
            <table className="table">
              <TableHeader/>
              <TableBody Data={props.Data} xoa={xoa} setdanhmuc={props.setdanhmuc}/>
            </table>
          </div>
    )
}
export default Table