
function Title({title, subtitle }) {
  
  return (
    <>
      <div
        style={{
          width: '50%',
          textAlign: 'center',
          color: 'black',
          backgroundColor: 'blue',
          margin: 'auto',
          borderRadius: '10px',
          height: '90px',
          fontSize:'14px'
        }}
      > 
        <h5
          className='title'
          style={{ paddingTop: '10px', paddingBottom: '10px ' }}
        >
          Events
        </h5>
        <h4>{subtitle}</h4>
      </div>
    </>
  )
}

export default Title