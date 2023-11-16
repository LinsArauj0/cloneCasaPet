function InputForm(props) {
    return (
        <div className="input-div">
            <label for={props.for}>{props.label}</label>
            <input
                name={props.name}
                class={"text-input " + props.className}
                type={props.type}
                id={props.id}
                required={props.required}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}
export default InputForm;