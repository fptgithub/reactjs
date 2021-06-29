import Th from './Th'
function TableHeader(props){
    return (
              <thead className="thead-light">
                  <Th Name="id"></Th>
                  <Th Name="Danh Mục ID"></Th>
                  <Th Name="Tên Sp"></Th>
                  <Th Name="Giá"></Th>
                  <Th Name="Màu"></Th>
                  <Th Name="Nhãn Hàng"></Th>
                  <Th Name="Delete"></Th>
              </thead>
    )
}
export default TableHeader