import "./neweventform.css"

import React, {useState} from 'react'

export default function Neweventstyle({ addEvent}) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState(' ')
 
  //reset form after submitting
  const resetForm = () => {
    setTitle('')
    setDate('')
  }
  return (
    <form
      className='neweventform'
      onSubmit={(e) => {
        e.preventDefault()
        const neweventadded = {
          title: title,
          date: date,
          id: Math.floor(Math.random() * 10000),
        }
        addEvent(neweventadded)
        setTitle('')
        setDate('')
      }}
    >
      <div>
        <input
          type='text'
          value={title}
          placeholder='enter event title'
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          id='title'
          style={{ marginBottom: '-20px', height: '26px' }}
        />
            <label htmlFor='title'></label>
      </div>
      <div>
        <p style={{ marginBottom: '-10px' }}>date of event</p>
        <input 
          type='date'
          value={date}
          // setting value means we are controlling the date ourself and not by the useRef hook

          placeholder='Date of event'
          onChange={(e) => {
            setDate(e.target.value)
          }}
          id='date'
        />
        <label htmlFor='date'></label>
      </div>
      <button className='submitbtnmi'>Submit</button>

      <button
        style={{
          marginTop: '45px',
          position: 'absolute',
          left: '130px',
          padding: '1px',
          fontSize: '10px',
          cursor: 'pointer',
        }}
        onClick={resetForm}
      >
        reset the form
      </button>
    </form>
  )
}
