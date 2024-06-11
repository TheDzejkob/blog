import '../App.css';
import "../csss/Login.css"


function Login() {
    return (
        
        <div className="Login">
          <img className='e'  src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/WRC_logo.svg/2560px-WRC_logo.svg.png' ></img>
            

            <div className="container">
      <div className="left-column">
        <form className="login-form">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="right-column">
        <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1953520/capsule_616x353.jpg?t=1703082608" alt="Description" />
      </div>
    </div>

    </div>
  );
}

export default Login;