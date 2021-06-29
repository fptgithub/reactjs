import {useState,useEffect} from 'react'
import Pagedivider from './Pagedivider'
import Table from './table/Table'
import Form from './Form'
import axios from 'axios'
function Danhmuc(){
    const [Page,setPage] = useState(1)
    const [danhmuc,setDanhmuc] = useState({id:'',ten:''})
    const [danhmucs,setDanhmucs] = useState([])
    const [danhmucs1,setDanhmucs1] = useState([])
    useEffect(() =>{
      axios.get('https://603c418cf4333a0017b674fb.mockapi.io/danhmuc?p='+Page+'&l=5')
        .then(res => {
        const persons = res.data;
        setDanhmucs(persons)
        setDanhmucs1(persons)
      }).catch(error =>{
        console.log(error)
      })
    },[Page])

    const Them = ()=>{
      axios.post('https://603c418cf4333a0017b674fb.mockapi.io/danhmuc?p='+Page+'&l=5',danhmuc)
        .then(res => {
        const persons = res.data;
        setDanhmucs([...danhmucs,persons])
      }).catch(error =>{
        console.log(error)
      })
    }

    const Sua = ()=>{
      axios.put('https://603c418cf4333a0017b674fb.mockapi.io/danhmuc/'+danhmuc.id,danhmuc)
        .then(res => {
        const persons = res.data;
        let dm = danhmucs.filter(x => x.id!=danhmuc.id)
        setDanhmucs([...dm,persons])
      }).catch(error =>{
        console.log(error)
      })
    }

    const Xoa = (x)=>{
      axios.delete('https://603c418cf4333a0017b674fb.mockapi.io/danhmuc/'+x.id)
        .then(res => {
        let danhmuc = danhmucs.filter(y => y.id!=x.id)
        setDanhmucs([...danhmuc])
      }).catch(error =>{
        console.log(error)
      })
    }
    const search =(e)=>{
      let pd = danhmucs1.filter((x)=>{
      if( x.ten.includes(e.target.value)){
        return x
      }
      })
      setDanhmucs(pd)
    }
    return (
        <div className="container-fluid">
          <Form Data={danhmucs}   Them = {Them} Sua = {Sua} Xoa={Xoa} danhmuc = {danhmuc} setdanhmuc = {setDanhmuc}></Form>
          <div className="mb-5">
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" onChange={search} aria-label="Search" />
              </form>
          </div>
          <Table Data={danhmucs} page={Page} setdanhmuc = {setDanhmuc} xoa={Xoa}></Table>
          <Pagedivider size = {danhmucs.length}  Page = {Page} setPage = {setPage}> </Pagedivider>
        </div>
    )
}
export default Danhmuc