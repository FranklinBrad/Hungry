import Form from 'react-bootstrap/Form';



function Contact(){
    return (
        <>
        
    <h1>Contact Me!</h1>
   <div>
    <h2>send me an email here</h2>
   <form action="https://formsubmit.co/franklin1jbradley@gmail.com" method="POST">
     <input type="text" name="name" placeholder='Enter Text'required/>
     <input type="email" name="email" placeholder='Enter Email'required/>

    
     <button type="submit">Send</button>
  </form>
   </div>


    </>
    );
}

export default Contact