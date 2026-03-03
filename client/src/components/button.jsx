import "../index.css";

function Button ({message}) 
//message is a prop (a property that we can pass to a component like an argument to a function)
//it is in {} expression syntax, which is used to pass dynamic values to a component. It allows us to use JavaScript expressions inside JSX. In this case, we are passing the value of the message prop to the button element, which will be displayed as the button's text.
//props.message is how to access the value of  the message key in the object property. Through deconstructuring, we can directly access the message variable without having to use props.message. This makes the code cleaner and more concise.
{
    return (
        <>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-3">{message}</button>
        </>
    )
}

export { Button };

