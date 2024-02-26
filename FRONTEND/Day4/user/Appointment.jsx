import { useState } from 'react';
//import { BiBorderLeft } from 'react-icons/bi';

const Appointment= () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Perform booking submission logic here
    console.log('FORM SUBMITTED!');
    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setService('');
    setDate('');
    setImage('');
  };
  /*axios.post('/api/appointments', appointmentData)
  .then((response) => {
    console.log('Booking submitted:', response.data);
    // Reset form fields after successful submission
    setName('');
    setEmail('');
    setPhone('');
    setService('');
    setDate('');
    setTime('');
  })
  .catch((error) => {
    console.error('Error submitting booking:', error);
  });*/



  return (
    
        <div style={{ backgroundImage:('C:\\Users\\janan\\Downloads\\myapp\\myapp\\myproject\\src\\assets\\images\\AgriGirl.jpg'), backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>

    <div>
      <h2 style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>APPLICATION FORM</h2>
    </div>
    <div className='bookBody' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form onSubmit={handleSubmit} style={{ width: '50%', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
        <label htmlFor="name" style={{ fontWeight: 'bold', marginBottom: '5px' }}>NAME:</label><br />
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '20px', width: '100%' }}
        /><br />
        <label htmlFor="email" style={{ fontWeight: 'bold', marginBottom: '5px' }}>EMAIL:</label><br />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '20px', width: '100%' }}
        /><br />
        <label htmlFor="phone" style={{ fontWeight: 'bold', marginBottom: '5px' }}>MOBILE NO:</label><br />
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '20px', width: '100%' }}
        /><br />
        <label htmlFor="service" style={{ fontWeight: 'bold', marginBottom: '5px' }}>PROFESSION:</label><br />
        <input
          type="text"
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
          style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '20px', width: '100%' }}
        /><br />
        <label htmlFor="date" style={{ fontWeight: 'bold', marginBottom: '5px' }}>DATE OF BIRTH:</label><br />
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '20px', width: '100%' }}
        /><br />
        <label htmlFor="image" style={{ fontWeight: 'bold', marginBottom: '5px' }}>VOTER ID:</label><br />
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
          required
          style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '20px', width: '100%' }}
        /><br />
        <label htmlFor="image" style={{ fontWeight: 'bold', marginBottom: '5px' }}>INCOME CERTIFICATE:</label><br />
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
          required
          style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '20px', width: '100%' }}
        /><br />
        <div style={{ textAlign: 'right' }}>
          <button
            type="submit"
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              padding: '10px 20px',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </div>
      </form>
    
    </div>
  </div>
    
  );
};

export default Appointment;
