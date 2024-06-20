export function Button({onClickou, children, ...props}){
return(
    <button onClick={onClickou} {...props}>
        {props.text}
    </button>
    )
}