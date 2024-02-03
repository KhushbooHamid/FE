import '../css/Signup.css'

const Signup = ({handleSignUp}) => {
  return (
    <div className="signup-options">
      <p>New Here?</p>
      <button onClick={() => {handleSignUp('patient')}} className="mx-2">Register as Patient</button>
      <button onClick={() => {handleSignUp('doctor')}} className="mx-2">Register as Doctor</button>
    </div>
  );
};

export default Signup;
