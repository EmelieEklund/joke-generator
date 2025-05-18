import '../app.css'

const Joke = ({text, className}) =>  {
    const display = text.joke || "Joke will appear here...";

        return(
                <div className="card shadow p-3 mb-5 bg-light rounded" >
                    <div className="card-body d-flex flex-column">
                    <p className="card-text mt-auto d-flex justify-content-center">
                        {display}
                    </p>
                    </div>
                </div>
    );
};


export default Joke;