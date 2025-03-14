import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export const CatEvent = ({eventID, data}) => {
  return (
    <div className="cat_events">
        <h1>Events in {eventID}</h1>
        <div className="content">
          {data.map(ev => (
            <div className="card" key={ev.id}>
              <Link href={`/events/${ev.city}/${ev.id}`}>
                <Image 
                  src={ev.image} 
                  alt={ev.title}
                  width={400}
                  height={300}
                />
                <h2>{ev.title}</h2>
                <p>{ev.description}</p>
              </Link>
            </div>
          ))}
        </div>
    </div>
  )
}

export default CatEvent;
