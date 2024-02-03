import '../css/Login.css'

const Login = ({handleContinue}) => {
  return (
    <div className="login-options">

       <button onClick={()=>{handleContinue('patient')}} className="mx-2" >
        Continue as Patient
      </button>
      <button onClick={()=>{handleContinue('doctor')}} className="mx-2" >
        Continue as Doctor
      </button>
    </div>
  );
};

export default Login;
