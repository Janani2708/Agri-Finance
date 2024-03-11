import './Formsub.css';
import { Link } from 'react-router-dom';

const generateRandomId = () => {
  return Math.floor(Math.random() * 1000000) + 1;
};

const Formsub = () => {
  const handleSubmit = () => {
    const randomId = generateRandomId();
    alert(`Document submitted successfully!\nID: ${randomId}`);
  };

  return (
    <div className='wholedoc'>
      <div className='docbg'>
        <p className='formsubb'>DOCUMENTS</p>
        <br></br>
        <br></br>
        <form method="post" encType="multipart/form-data">
          <div className='updoc'>
            <label className='labdoc' htmlFor="aadharFile">Upload Aadhar Card</label>
            <input className='typeupdoc' type="file" id="aadharFile" name="aadharFile" multiple />
          </div>
          <br></br>
          <div className='updoc'>
            <label className='labdoc' htmlFor="panFile">Upload Pan Card</label>
            <input className='typeupdoc' type="file" id="panFile" name="panFile" multiple />
          </div>
          <br></br>
          <div className='updoc'>
            <label className='labdoc' htmlFor="incomeFile">Upload Income Certificate</label>
            <input className='typeupdoc' type="file" id="incomeFile" name="incomeFile" multiple />
          </div>
          <br></br>
          <div>
            <button className='subdocbut' type="button" onClick={handleSubmit}><Link to={"/Home"}>Submit</Link></button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Formsub;