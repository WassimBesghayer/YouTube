import React from 'react'

function Suggestions() {
  let videos=[{
    src:"https://www.youtube.com/watch?v=Tn6-PIqc4UM&list=PL0vfts4VzfNgUUEtEjxDVfh4iocVR3qIb",
    title:"React JS"},
    {
    src:"https://www.youtube.com/watch?v=ENrzD9HAZK4&list=PL0vfts4VzfNiq0-fXbVVdnngU1Ur2SzyZ",
    title:"Backend Development"},
    {
    src:"https://www.youtube.com/watch?v=wHTcrmhskto&list=PL0vfts4VzfNjurgyRawm_e0RevgP7g1Ao&index=2",
    title:"Is Web3 all Hype? Top 10 Web 3.0 Questions & Answers"  
  }]
  return (
    <div className='sugg'>
      <h5>You may like watching :</h5>
      <React.Fragment id='1vid'>
      {videos.map((elem)=><iframe width="250px" height="135px" src={elem.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>)}
      </React.Fragment>
    </div>
  )
}

export default Suggestions