import React, { useState } from 'react'
import './Auction.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

const Auction = () => {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //       selectedDate: null
    //     };
    //   }
    const [selectedDate,setSelectedDate]=useState(null);
    const [selectedTime, setSelectedTime] = useState('12:00');
    const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle when a new image is selected
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  // Function to handle form submission (upload image)
  const handleUpload = () => {
    // Perform upload logic here, e.g., send the image to a server
    if (selectedImage) {
      // You can use FormData to upload the image file
      const formData = new FormData();
      formData.append('image', selectedImage);
      
      // Example: Send formData to the server using fetch or Axios
      fetch('YOUR_UPLOAD_URL', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        // Handle response from server
      })
      .catch(error => {
        // Handle error
      });
    }
  };
      const handleDateChange = (date) => {
        setSelectedDate(date);
      };
  return (
    
    <div className="container">
    <div className="login-box">
      <h2>Auction</h2>
      <form action="#">
        <div className="input-box">
          <input type="text" required />
          <label>Product Name</label>
        </div>
        <div className="input-box">
          <input type="text" required />
          <label>Description</label>
        </div>
        <div className="input-box">
          <input type="text" placeholder="." required  />
          <label>Date</label>
        </div>
            <div className="input-box">
      <div className='Time'>
      <div className="input-box">
          <input type="text" required />
          <label>End Time</label>
        </div>
        </div>
        </div>

          
            <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none'}}
        id="fileInput"
      />
       <label
        htmlFor="fileInput"
        style={{
          margin: '20px 10px 10px',
          width: '40%',
          height: '20px',
          borderRadius: '20px',
          background: 'darkcyan',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          fontSize: '0.8em',
          color: '#fff', // Change color to white
          fontWeight: 400,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        Choose File
      </label>
      
      
      <button onClick={handleUpload} className='bttn'>Upload Image</button>
      <div className="input-box">
          <input type="number"
      //  id="amount"
      //  value={amount}
      //  onChange={handleAmountChange}
        placeholder=""
        min="0"
        step="0.01" // Set the step to allow decimal places
        required />
          <label>Starting Amount</label>
        </div>
        
        <button type="submit" className="submit">Submit</button>
        
      </form>
      </div>
    </div>
  )
}

export default Auction