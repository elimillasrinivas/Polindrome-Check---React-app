import { useState } from 'react';
import './app.css'
function App() {
  const [inp,setInp]=useState("")
  const [otp,setOtp]=useState("")
  const [otpColor,setOtpColor]=useState("")
  const handlePolindrome=()=>{
    let s1=inp.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
    let s2=''
    for(let i=s1.length-1;i>=0;i--){
      s2+=s1[i]
    }
    if(s1===s2){
      setOtp("Yes! It is a Polindrome.")
      setOtpColor("green")
      
    }
    else{
      setOtp("No, It is not a Polindrome.")
      setOtpColor("red")
    }
  }
  return (
    <>
      <div className="app">
        <h1 className="header">Polindrome Checker..!</h1>
        <div className="inp-container">
          <input
            type="text"
            className="inp-text"
            placeholder=" Enter a word/sentence "
            required
            onChange={(e) => {
              setInp(e.target.value);
            }}
          />
          <button className="inp-text-btn" onClick={handlePolindrome}>
            Check
          </button>
        </div>
        <div className='otp-container'>
          <p>You typed this {s1}</p>
          <h1 className="otp" style={{ color: `${otpColor}` }}>
            {otp}
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
