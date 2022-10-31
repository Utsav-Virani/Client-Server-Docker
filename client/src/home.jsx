import React, { useState } from 'react';
import axios from 'axios';


function Home() {

    const [state, setstate] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        // const { bookID, bookTitle, bookAuthor } = this.state;
        console.log(state);
        // const book = {
        //     bookID,
        //     bookTitle,
        //     bookAuthor,
        // };

        axios.post('http://localhost:5000/set', {
            data: state
        })
            .then(() => console.log('added'))
            .catch(err => {
                console.error(err);
            });
        console.log(state);

    };
    return (
        <div>
            <center>
                <form onSubmit={handleSubmit}>
                    <p>
                        <strong>Post to Server:</strong>
                    </p>
                    <input
                        type="text"
                        value={state}
                        onChange={e => setstate(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            </center>
        </div>
    )
}

export default Home
