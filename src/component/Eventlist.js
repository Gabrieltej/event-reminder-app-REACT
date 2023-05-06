import React from 'react'

//see the possibility of passing the Showevents function as a prop, so instead of using the setshowEvent, i can just use what i used as a representation though i can still call the name as setShow ....

export default function Eventlist({ events, showeventy}) {
  return (
    <div>
      {events.map((event) => {
        const { title, id, date } = event
        return (
          <React.Fragment key={id}>
            <div className='thediv'>
              <h4 style={{marginBottom:"-10px"}}>
                {title}
              </h4>
                <p style={{fontSize:'9px'}}>input on <span style={{fontWeight:'bold', fontSize:'9px', marginTop:'-70px'}}>{date}</span></p>
              <button
                className='deletekey'
                onClick={() => {
                  showeventy((prevEvent) => {
                    return prevEvent.filter((event) => {
                      return id !== event.id
                    })
                  })
                }}
              >
                delete event
              </button>
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}
