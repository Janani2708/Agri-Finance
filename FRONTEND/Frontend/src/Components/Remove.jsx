import  { useState } from 'react';
import './Remove.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Removee = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    id: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete(
        `http://localhost:8080/registration-forms/delete/${formData.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'cache-control': 'no-cache',
          },
          // Data should be included in the 'data' property
          data: {
            id: formData.id,
          },
        }
      );
      console.log(response.data);
      navigate('/Home');

    } catch (error) {
      console.error('Error submitting form:', error);

    }
  };

  return (
    <div className='apply26g'>
      <section className='container26g'>
        <header>Delete Loan</header>
        <form className='form26g' onSubmit={handleSubmit}>
          {/* Use 'id' as the name attribute */}
          <div className='input-box26g'>
            <label>Id</label>
            <br></br>
            <br></br>
            <input
              type='text'
              name='id' // Change 'fullName' to 'id'
              placeholder='Enter Id'
              value={formData.id}
              onChange={handleChange}
              required
            />
          </div>
          <button className="msg" type="submit">
            Delete Loan
          </button>
        </form>
      </section>
    </div>
  );
};

export default Removee;