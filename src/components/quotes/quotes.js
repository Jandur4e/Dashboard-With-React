import { useEffect, useState } from "react";
import Header from "../header/header";

function Quotes() {
    const [element, setElement] = useState([]);

    useEffect(() => {
        const fetchdata = 'https://dummyjson.com/quotes';
        const fetchData = async () => {
            const fetch1 = await fetch(fetchdata);
            const fetch2 = await fetch1.json()
            const fetch3 = await fetch2.quotes;

            // console.log('dime', fetch3);
            setElement(fetch3);
        }
        fetchData();
    }, []);
    return (
        <div className="display-output">
            <Header />
            <h1>Quotes</h1>
            <div className="wrapeer">
                {element.map((quote) => (
                    <div className="quote" key={quote.id}>
                        <p><b>Quote No:{quote.id}</b> - <q>{quote.quote}</q></p>
                    </div>))}
            </div>
        </div>
    )
}

export default Quotes;