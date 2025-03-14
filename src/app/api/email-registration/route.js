import path from 'path';
import fs from 'fs'

function buildPath(){
  return path.join(process.cwd(),'data','data.json')
}

function extract_data(filePath){
  const jsonData=fs.readFileSync(filePath)
  const data=JSON.parse(jsonData)
  return data
}


export async function POST(request) {
  const filePath=buildPath()
  const {events_categories,allEvents}=extract_data(filePath)
  if(!allEvents){
    return Response.json(
      {message:"Event not found"},
      {status:404}
    )
  }

  
  const { email, eventId,id } = await request.json();
  
  // Find the event by id
  const eventFound = allEvents.find(ev => ev.id === id);
  
  if (!eventFound) {
    return Response.json(
      { message: "Event not found" },
      { status: 404 }
    );
  }
  
  // Check if email is already registered
  if (eventFound.emails_registered && eventFound.emails_registered.includes(email)) {
    return Response.json(
      { message: 'This email has already been registered' },
    );
  }
  
  // Update the emails_registered array
  const newAllEvents = allEvents.map(ev => {
    if (ev.id === id) {
      return {
        ...ev,
        emails_registered: [...(ev.emails_registered || []), email]
      };
    }
    return ev;
  });
  
  // Write the updated data back to the file
  fs.writeFileSync(filePath,JSON.stringify({events_categories,allEvents:newAllEvents}))
  return Response.json({
    message: `You have been successfully registered with email: ${email} for event: ${eventFound.title}`
  });
} 