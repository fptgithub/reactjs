import Th from './Th'
function TableHeader(props){
    return (
              <thead className="thead-light">
                  <Th Name="id"></Th>
                  <Th Name="Tên Danh Mục"></Th>
                  <Th Name="Delete"></Th>
              </thead>
    )
}
export default TableHeader