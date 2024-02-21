import React, { useState } from 'react';
import axios from 'axios';

export default function Quote() {
    const [quote, setQuote] = useState({ text: "", author: "" });

    const generateQuote = () => {
        let url = "https://type.fit/api/quotes";
        
        axios.get(url)
        .then((response) => {
            let quotes = response.data;
            let randomNum = Math.floor(Math.random() * quotes.length);
            setQuote(quotes[randomNum]);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Random Quote Generator</h5>
                            <p className="card-text">{quote.text}</p>
                            <p className="card-text"><em>- {quote.author}</em></p>
                            <button className="btn btn-primary" onClick={generateQuote}>Generate Quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
