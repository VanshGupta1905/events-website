import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
const AllEvents = () => {
  return (
    <div>
        {data?.map((ev) => (
            <Link key={ev.id} href={`/events/${ev.id}`}>
                <h2>{ev.title}</h2>
                <Image 
                    src={ev.image} 
                    alt={ev.title}
                    width={300}
                    height={200}
                />
                <p>{ev.description}</p>
            </Link>
        ))}
    </div>
  )
}

export default AllEvents