import React from 'react'
const ItemQuotes = ({ text, author }) => {
  return (
    <div>
      {/* <strong>{text} <br />by {author}</strong> */}
      <div class="card my-1" style={{
        backgroundColor: 'grey',
        textAlign: 'left',
        fontSize: '20px',
        display:'flex'
      }}>
        <div class="card-body my-1">
          <strong>{text} <br />by {author}</strong>
        </div>
      </div>

    </div>
  )
}

export default ItemQuotes
