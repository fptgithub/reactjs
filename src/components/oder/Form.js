import Input from './Input'
import Lable from './Lable'
function Form(props){

    const onchange = (event)=>{
      let target = event.target
      let name = target.name
      let Value = target.value
      let danhmuc = {...props.danhmuc,[name]:Value}
      props.setdanhmuc(danhmuc)
    }

    const Them = ()=>{
      props.Them()
    }

    const Sua = ()=>{
      props.Sua()
    }


    const onsubmit = (event)=>{
      event.preventDefault()
    }
    return (
        <div className="row mb-5">
            <form className="row" onSubmit={onsubmit}>
              <div className="col-12 form-data">
                <div className="mr-5">
                  <Lable content = "id" ></Lable>
                  <Input type="input" content = "id" onchange={onchange} name = "id" value={props.danhmuc.id}></Input>
                </div>
                <div className="mr-5">
                  <Lable content = "Tên Sản Phẩm"></Lable>
                  <Input type="input" content = "Tên Sản Phẩm" onchange={onchange} name = "tensp" value={props.danhmuc.tensp}></Input>
                </div>
                <div className="mr-5">
                  <Lable content = "Số Lượng"></Lable>
                  <Input type="number" content = "Số Lượng" onchange={onchange} name = "soluong" value={props.danhmuc.soluong}></Input>
                </div>
              </div>
              <div className="mt-5">
              <button className="btn btn-outline-primary mr-5" onClick={Them}>Thêm</button>
              <button className="btn btn-outline-primary mr-5" onClick={Sua}>Sửa</button>
              </div>
            </form>
          </div>
    )
}
export default Form