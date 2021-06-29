import {useState,useEffect} from 'react'
import Pagedivider from './Pagedivider'
import Table from './table/Table'
import Form from './Form'
import Lable from './Lable'
import axios from 'axios'
function Products(){
    const [Page,setPage] = useState(1)
    const [danhmuc,setDanhmuc] = useState(1)
    const [Products,setProducts] = useState([])
    const [Products1,setProducts1] = useState([])
    const [danhmucs,setDanhmucs] = useState([])
    const [Product,setProduct] = useState({id:'',danhmucId:danhmuc,tensp:'',nhanhang:'',gia:'',mau:''})
    useEffect(() =>{
        axios.get('https://603c418cf4333a0017b674fb.mockapi.io/danhmuc/'+danhmuc+'/products?p='+Page+'&l=5')
        .then(res => {
        const persons = res.data;
        setProducts(persons)
        setProducts1(persons)
      }).catch(error =>{
        console.log(error)
      })
      axios.get('https://603c418cf4333a0017b674fb.mockapi.io/danhmuc')
        .then(res => {
        const persons = res.data;
        setDanhmucs(persons)
      }).catch(error =>{
        console.log(error)
      })
    },[Page,danhmuc])

    const Them = ()=>{
      axios.post('https://603c418cf4333a0017b674fb.mockapi.io/danhmuc/'+Product.danhmucId+'/products?p='+Page+'&l=5',Product)
        .then(res => {
        const persons = res.data;
        setProducts([...Products,persons])
      }).catch(error =>{
        console.log(error)
      })
    }

    const Sua = ()=>{
      axios.put('https://603c418cf4333a0017b674fb.mockapi.io/danhmuc/'+Product.danhmucId+'/products/'+Product.id,Product)
        .then(res => {
        const persons = res.data;
        let product = Products.filter(x => x.id!=Product.id)
        setProducts([...product,persons])
      }).catch(error =>{
        console.log(error)
      })
    }

    const Xoa = (x)=>{
      axios.delete('https://603c418cf4333a0017b674fb.mockapi.io/danhmuc/'+x.danhmucId+'/products/'+x.id)
        .then(res => {
        let product = Products.filter(y => y.id!=x.id)
        setProducts(product)
      }).catch(error =>{
        console.log(error)
      })
    }
    const select = (e)=>{
      console.log(danhmuc)
      setDanhmuc(e.target.value)
    }
    const search =(e)=>{
      let pd = Products1.filter((x)=>{
      if( x.tensp.includes(e.target.value)){
        return x
      }
      })
      setProducts(pd)
    }
    return (
        <div className="container-fluid">
          <div>
           
          <Form Data={Products} danhmucs = {danhmucs}  Them = {Them} Sua = {Sua} Xoa={Xoa} product = {Product} setProduct = {setProduct}></Form>
          <div className="search">
            <div>
            <Lable content = "Chọn Danh Mục"></Lable>
                  <div className="mb-5">
                    <select class="form-select" aria-label="Default select example" name = "danhmucId" onChange={select}>
                        {danhmucs.map((x,idx)=>{
                          return <option onChange={select} id = {idx} selected={danhmuc==x.id?true:false}  value={x.id}>{x.ten}</option>
                        })}
                      </select>
                  </div> 
          </div>
          <div>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" onChange={search} aria-label="Search" />
              </form>
          </div>
          </div>
          </div>
          <Table Data={Products} page={Page} setproduct = {setProduct} xoa={Xoa}></Table>
          <Pagedivider size = {Products.length}  Page = {Page} setPage = {setPage}> </Pagedivider>
        </div>
    )
}
export default Products