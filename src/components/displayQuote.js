import { useEffect, useState } from 'react';

export default function DisplayQuote() {
  const [quotes, setQuote] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true);
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', {
          headers: {
            'X-Api-Key': 'jf2INV23//Hm3xE4ZPqTXw==TLnlWMUVCQy6j163',
          },
        });
        const data = await response.json();
        setQuote(data[0]);
      } catch (error) {
        setError(true);
      }
      setLoad(false);
    };

    fetchData();
  }, []);

  if (error) return <div>Cannot get data from API!</div>;
  return (
    <div className="quoteDiv">
      {
      load ? (<div>Loading...</div>
      ) : (
        <div>
          <p className="quote">{quotes.quote}</p>
          <small className="author">{quotes.author}</small>
        </div>
      )
      }
    </div>
  );
}
