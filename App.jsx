import './App.css';
import logo from'./assets/tn_logo.png';


function App() {

    return (
    
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container-fluid'>
                <img src={logo} alt="" width={130} />
            <a className='navbar-head'href="#">GOVERNMENT OF TAMIL NADU</a> 
            <h1>TAMILNADU ENGINEERING ADMISSIONS-2024</h1>
            </div>
        </nav>
        <div className='container mt-5'>
            <h2 className='text-center mb-4'>TNEA Counseling Registration Form</h2>
        </div>
        <div className='text-center mb-4'>
        <p> <i className='bi bi-person custom-icon'></i>
            <span className='custom-text'>User Registration </span>
            </p>

            <form>
                <div className='mb-3'>
                    <label htmlFor="Student Name" className='form-label'>Student Name</label>
                    <input type="text" className='form-control' id='Student Name' name='Student Name' required />
                </div>
                <div className='mb-3'>
                    <label htmlFor="School Name" className='form-label'>School Name</label>
                    <input type="text" className='form-control' id='School Name' name='School Name' required />
                </div>
                <div className='mb-3'>
                    <label htmlFor="Registration No" className='form-label'>HSC Registration No</label>
                    <input type="text" className='form-control' id='Registration No' name='Registration No' required />
                </div>
                <div className='mb-3'>
                    <label htmlFor="DOB" className='form-label'>Date of Birth</label>
                    <input type="Date" className='form-control' id='DOB' required />
                </div>
                <div className='mb-3'>
                    <label htmlFor="gender" className='form-label'>Gender</label>
                    <select name="form-select" id="gender" required>
                        <option value=""disabled selected>Select your gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className='mb-3'>
                    <label htmlFor="parent details" className='form-label'>Parent Details</label>
                    <input type="text" className='form-control' id='parent details' required />
                </div>
                <div className='mb-3'>
                    <label htmlFor="Community" className='form-label'>Community</label>
                    <select name="form-select" id="Community" required>
                        <option value=""disabled selected>Select your community</option>
                        <option value="BC">BC</option>
                        <option value="MBC">MBC</option>
                        <option value="OC">OC</option>
                        <option value="SC&ST">SC&ST</option>
                    </select>
                </div>
                <div className='mb-3'>
                    <label htmlFor="Phone" className='form-label'>Phone Number</label>
                    <input type="number" className='form-control' id='Phone' required/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="address" className='form-label'>Address</label>
                    <textarea name="form-control" id="address" rows={3} required></textarea>
               </div>
               <div className='mb-3'>
                    <label htmlFor="marks" className='form-label'>Marks Obtained</label>
                    <input type="number" className='form-control' id='marks' required />
                </div>
                <div className='mb-3'>
                    <label htmlFor="Yearofpassing"className='form-label'>Year Of Passing</label>
                    <input type="number"className='form-control' id='Yearofpassing' required />
                </div>
                <div className='mb-3'>
                    <label htmlFor="board" className='form-label'>Board</label>
                    <select name="form-select" id="board" required>
                        <option value=""disabled selected>Select your Board</option>
                        <option value="state">State Board</option>
                        <option value="cbse">CBSE Board</option>
                    </select>
                </div>
                <div className='form-group'>
                <label htmlFor="photo">Photograph:</label>
                <input type="file" id='photo' name='photo' accept='image/*' required />
                </div>
                <div className='form-group'>
                <label htmlFor="signature">Signature:</label>
                <input type="file" id='signature' name='signature' accept='image/*' required />
                </div>

                <div className='text-center'>
                    <button type='Submit' className='btn-btn-primary'>Register</button>
                </div>

            </form>
            
        </div>

        </div>
        

      
    );
}

export default App;
