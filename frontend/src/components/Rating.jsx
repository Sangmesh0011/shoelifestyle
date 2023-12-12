import React from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'

const Rating = ({value,noofrevs}) => {
  return (
    <div>
      <span>{value>=1 ? <FaStar color='orange'/> : value>=0.5 ? <FaStarHalfAlt color='orange'/> : <FaRegStar color='orange'/>}</span>
      <span>{value>=2 ? <FaStar color='orange'/> : value>=1.5 ? <FaStarHalfAlt color='orange'/> : <FaRegStar color='orange'/>}</span>
      <span>{value>=3 ? <FaStar color='orange'/> : value>=2.5 ? <FaStarHalfAlt color='orange'/> : <FaRegStar color='orange'/>}</span>
      <span>{value>=4 ? <FaStar color='orange'/> : value>=3.5 ? <FaStarHalfAlt color='orange'/> : <FaRegStar color='orange'/>}</span>
      <span>{value>=5 ? <FaStar color='orange'/> : value>=5.5 ? <FaStarHalfAlt color='orange'/> : <FaRegStar color='orange'/>}</span>
      <span className='fst-italic'> ({noofrevs} reviews)</span>
    </div>
  )
}

export default Rating
