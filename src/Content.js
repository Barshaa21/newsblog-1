import React from 'react';
import { useEffect, useState } from 'react';
import ItemQuotes from './Components/ItemQuotes';
import nature from './Components/nature.jpg';


export default function Content() {
  const [items, setItem] = useState([])
  const fetchdata = () => {
      return fetch('https://jsonguide.technologychannel.org/quotes.json')
          .then((response) => response.json())
          .then((data) => { 
            let number=Math.floor(Math.random() * data.length)
            setItem(data[number]);
            // <p> this is data</p>
            // console.log(data);
          })
          // .catch((error)=>{
          //     console.log('error')
          // })
          
  }
  // randomQuoteHandler = () => {
  //   const randNumb = Math.floor(Math.random() * this.state.quotes.length)
  //   const randomQuote = this.state.quotes[randNumb]
  //   this.setState({
  //     randomQuote: randomQuote,
  //   })
  //   console.log(this.state.quotes)
  // }
  useEffect(() => {
      fetchdata()
  }, [])

  return (
    <div style={{color:'white',backgroundImage:"url(/nature.jpg)", height:600}} >
      {/* <div style={{ backgroundImage: "url(/image.png)" }}></div> */}
      <h1><center>Quote of the day</center></h1>
      {/* <img src={nature} height='400px' width='1400px' alt="photo" /> */}
      <div className='container' style={{color:'black',paddingTop: '70px',}} >
          {/* const randomValue = {myShows[Math.floor(Math.random() * myShows.length)]};  */}
          {/* <div className="container" fetchdata={fetchdata}>{fetchdata}</div>
          {items.map((item) => <ItemQuotes author={item.from} content={item.content} />)} */}
          <ItemQuotes author={items.from} text={items.text} />
          {/* {items.text} by {items.from}  */}
          {/* <button onClick={fetchdata}>Quote of the day</button> */}
         


      </div>
    </div>
  )
}

