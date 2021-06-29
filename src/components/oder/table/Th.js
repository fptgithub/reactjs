function Th(props){
    return(
        <th scope="col" onClick={props.onClick}>{props.Name}</th>
    )
}
export default Th