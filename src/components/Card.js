import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.imageUrl} alt="Location" className="card--image" />

        <div className="card--content">
            <p>{props.location}</p>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
            <h2 className="card--title">{props.title}</h2>
            <p className="card--date">{props.startDate} - {props.endDate}</p>
            <p className="card--description">{props.description}</p>

        </div>
    </div>
  )
}

export default Card