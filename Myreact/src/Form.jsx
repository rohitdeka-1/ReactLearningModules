function handleFormSubmit(e){
    e.preventDefault();
    
    console.log("Form was submitted")
}

function FormData(){
    return(
        <form onSubmit={handleFormSubmit}>
            <input placeholder="Likh yaha kuch"></input>
            <button>Button</button>
        </form>
    )
}

export default FormData;