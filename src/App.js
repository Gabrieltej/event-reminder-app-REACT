import React, {useState} from 'react'
import './App.css'
import Modal from './component/Modal'
import Title from './component/Title'
import Eventlist from './component/Eventlist'
import Neweventstyle from './component/Neweventstyle'

 
const Constreferee=(neweventadded)=>{
// lists os states
const[showModal, setShowModal]=useState(false)
const [showEvents, setShowEvents]= useState(true)
const [events, setEvents] = useState([])
const addEvent = (neweventadded) => {
  setEvents((prevEvent) => {
    return [...prevEvent, neweventadded]
  })
}

const handleClick=()=>{
  setShowModal(false)
}
const btnModal=()=>{
  setShowModal(true)
}
//the two buttons will just be like a toggle button to set stuff to true and false so that an effect will take place and vice versa

const subtitle="All the latest events"

return (
  <div>
    <div style={{ width: '100%', textAlign: 'center' }}>
      <button
        onClick={btnModal}
        style={{
          backgroundColor: 'green',
          border: 'none',
          padding: '6px',
          borderRadius: '18px',
          color: 'white',
          marginTop: '10px',
          cursor: 'pointer',
        }}
      >
        Add new event
      </button>
    </div>
    <Title title='event in your area' subtitle={subtitle} />

    <div className='buttonsw'>
      {showEvents && (
        <div>
          <button
            className='firstBtn'
            onClick={() => {
              setShowEvents(false)
            }}
          >
            Hide Events
          </button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button
            className='secondBtn'
            onClick={() => {
              setShowEvents(true)
            }}
          >
            Show Events
          </button>
        </div>
      )}
    </div>
    {showEvents && <Eventlist events={events} showeventy={setEvents}/>}
    {showModal && (
      <Modal handleClick={handleClick}>
        {/* {when you are adding a prop to something, you have to use a variable=someething, if it is a string, then you say variable='', and if what you are equating it to is a javascript variable, then you need to make use of the curly braces in other to be able to get the desired result and that is a way of adding a function as prop and not only a string or number or any other stuffs} */}
        <Neweventstyle  addEvent={addEvent} />
      </Modal>
    )}
  </div>
)
}
function App() {
  return <Constreferee />
}

export default App
