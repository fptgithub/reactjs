function Input(props){
    return (
        <input type={props.type} name = {props.name} value={props.value} onChange={props.onchange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={'Enter '+props.content} />
    )
}
export default Input