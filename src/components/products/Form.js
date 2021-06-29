import Input from './Input'
import Lable from './Lable'
function Form(props){

    const onchange = (event)=>{
      let target = event.target
      let name = target.name
      let Value = target.value
      let product = {...props.product,[name]:Value}
      console.log(product)
      props.setProduct(product)
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
                  <Input type="input" content = "id" onchange={onchange} name = "id" value={props.product.id}></Input>
                </div>
                <div className="mr-5">
                  <Lable content = "id Danh Mục"></Lable>
                  <div>
                    <select class="form-select" aria-label="Default select example" name = "danhmucId" onChange={onchange}>
                        {props.danhmucs.map((x,idx)=>{
                          return <option onChange={onchange} id = {idx} selected={props.product.danhmucId==x.id?true:false}  value={x.id}>{x.ten}</option>
                        })}
                      </select>
                  </div>
                  
                </div>
                <div className="mr-5">
                  <Lable content = "Tên Sản Phẩm"></Lable>
                  <Input type="input" content = "Tên Sản Phẩm" onchange={onchange} name = "tensp" value={props.product.tensp}></Input>
                </div>
                <div className="mr-5">
                  <Lable content = "Giá"></Lable>
                  <Input type="number" content = "Giá" onchange={onchange} name = "gia" value={props.product.gia}></Input>
                </div>
                <div className="mr-5">
                  <Lable content = "Nhãn Hàng"></Lable>
                  <Input type="input" content = "Nhãn Hàng" onchange={onchange} name = "nhanhang" value={props.product.nhanhang}></Input>
                </div>
                <div className="mr-5">
                  <Lable content = "Màu"></Lable>
                  <Input type="input" content = "Màu" onchange={onchange} name = "mau" value={props.product.mau}></Input>
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