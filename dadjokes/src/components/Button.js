

const Button = ({text, className, onClick}) => {
    return(
        <input type="button" className={`btn btn-outline-dark .bg-light ${className}`} value={text} onClick={onClick}/>
    );
};

export default Button;