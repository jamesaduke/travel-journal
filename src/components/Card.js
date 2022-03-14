import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <div className="image--wrapper">
            <img src={props.imageUrl} alt="Location" className="card--image" />
        </div>

        <div className="card--content">
            <div className="card--header">
                <i class="fas fa-map-marker-alt"></i>
                <p>{props.location}</p>
                <a href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h2 className="card--title">{props.title}</h2>
            <p className="card--date">{props.startDate} - {props.endDate}</p>
            <p className="card--description">{props.description}</p>

        </div>
    </div>
  )
}

export default Card