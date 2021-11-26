
const Button = ({color, text, onCLick}) => {
    return (
        <button style={{backgroundColor:color}} className='btn'>{text}</button>
    )
}

export default Button
