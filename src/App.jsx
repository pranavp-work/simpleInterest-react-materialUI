import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  // js
  const [principle, setPrinciple] = useState("");
  const [rate, setRate] = useState();
  const [year, setYear] = useState();

  // states for checking input invalid or not
  const [isPrinciple, checkIsPrinciple] = useState(true);
  const [isRate, checkIsRate] = useState(true);
  const [isYear, checkIsYear] = useState(true);

  // calculate interest
  const [ interest, setInterest ] = useState(0);

  let validateValue = (e) => {
    const {name, value} = e.target;
    console.log(name);
    console.log(value);

    if(!!value.match('^[0-9]*$')) {
      if ( name == 'principleValue' ) {
        setPrinciple(value);
        checkIsPrinciple(true);
      } else if ( name == 'rateValue') {
        setRate(value);
        checkIsRate(true);
      } else {
        setYear(value);
        checkIsYear(true);
      }
    } else {
      if ( name == 'principleValue' ) {
        setPrinciple(value);
        checkIsPrinciple(false);
      } else if ( name == 'rateValue') {
        setRate(value);
        checkIsRate(false);
      } else {
        setYear(value);
        checkIsYear(false);
      }
    }
  }

  let valueReset = () => {
    setPrinciple("");
    setRate("");
    setYear("");
    checkIsPrinciple(true);
    checkIsRate(true);
    checkIsYear(true);
  }

  let calcInterest = () => {
    setInterest( (principle * rate * year)/100 );
  }

  return (
    // jsx
    <>
      <div className="d-flex justify-content-center align-items-center bg-dark" style={{height: '100vh', width: '100%'}}>
        <div className="bg-light p-5 rounded-2" style={{width: '500px'}}>
          <h1>Simple Interest App</h1>
          <p>calculate your simple interest easily</p>
          <div className="bg-warning rounded-2 p-3 d-flex justify-content-center align-items-center flex-column" style={{height: '130px'}}>
            <h1>₹ {interest}</h1>
            <p>total simple interest</p>
          </div>

          <div className="my-3">
          <TextField id="outlined-basic" className='w-100' value={principle} label="Principle Amount (₹)" name='principleValue' variant="outlined" onChange={(e)=> validateValue(e)} />
          { isPrinciple == false && <p className='text-danger'>*Input Invalid</p>}
          </div>
          <div className="my-3">
          <TextField id="outlined-basic" className='w-100' value={rate} label="Rate of Interest (%)" name='rateValue' variant="outlined" onChange={(e)=> validateValue(e)} />
          { isRate == false && <p className='text-danger'>*Input Invalid</p>}
          </div>
          <div className="my-3">
          <TextField id="outlined-basic" className='w-100' value={year} label="in years" variant="outlined" name='yearsValue' onChange={(e)=> validateValue(e)} />
          { isYear == false && <p className='text-danger'>*Input Invalid</p>}
          </div>
          <div className="my-3 d-flex justify-content-between">
          <Button disabled = { isPrinciple && isRate && isYear? false : true } variant="contained" color='success' style={{width: '190px'}} className='p-3' onClick={calcInterest}>Calculate</Button>
          <Button variant="outlined" color='error' style={{width: '190px'}} className='p-3' onClick={valueReset}>Reset</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App