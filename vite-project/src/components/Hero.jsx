import React from 'react'

export const Hero = () => {
  return (
    <> 
      
      <div className='  w-[100%]' style={{ position: 'relative' }}>
        
  <video className="h-auto w-[100%] overflow-hidden" autoPlay muted loop playbackRate={0.5}>
    <source className='object-cover' src="/Studio_Project_V2.mp4" type="video/mp4" />
  </video>
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(142, 202, 230, 0.4)', /* White background with transparency */
    backdropFilter: 'blur(4px)', /* Apply a blur effect */
    pointerEvents: 'none' /* Allow click-through to the video */
  }} />
  </div>

    </>
  )
}
