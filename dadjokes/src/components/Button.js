

const Button = ({text, className, onClick}) => {
    return(
        <input type="button" className={`btn btn-outline-secondary .bg-light ${className}`} value={text} onClick={onClick}/>
    );
};

export default Button;