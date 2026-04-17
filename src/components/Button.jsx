export const Button = ({classname ="" , children, size ="md"}) => {

    const baseClasses = "rounded-full font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 ";

    const sizeClasses = {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    }

    const classes = `${baseClasses} ${sizeClasses[size]} ${classname}`;


    return(
        <button className={classes}>
            <span className="flex items-center justify-center gap-2">
                {classname}
            </span>
        </button>
    );
}