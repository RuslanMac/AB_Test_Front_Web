import useStyles from "./styles"

const Button = (props) => {
    const c = useStyles();
    return (
        <button className={c.Button} onClick={props.action}>{ props.name }</button>
    )
}

export default Button;