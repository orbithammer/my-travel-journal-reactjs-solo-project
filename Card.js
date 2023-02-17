import React from "react"

export default function Card(props) {
    location = props.card.location.toUpperCase()
    return (
        <div className="card">
            <img src={props.card.imageUrl} className="cover-img" />
            <div className="info">
                <p className="location">
                    <img src="./images/pin.png" className="pin" />{location}
                    <a href={props.card.googleMapsUrl}>View on Google Maps</a>
                </p>
                <h1>{props.card.title}</h1>
                <p className="dates">{props.card.startDate} - {props.card.endDate}</p>
                <p className="description">{props.card.description}</p>
            </div>
        </div>
    )
}