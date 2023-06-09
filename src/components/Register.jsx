

export const Register = () => {

    return(
        
      <div className="form">
        <h4 id="signup">Sign Up</h4>
          <div className="form-body">
              <div className="username">
                  <label className="form__label" htmlFor="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" htmlFor="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="Last Name"/>
              </div>
              
              <div className="username">
                  <label className="form__label" htmlFor="firstName">Username </label>
                  <input className="form__input" type="text" id="firstName" placeholder="Username"/>
              </div>

              <div className="email">
                  <label className="form__label" htmlFor="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" htmlFor="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
                    <p id="lastsentence">Password must be at least 12 characters long. Weak password will be marked as invalid. Password must not be greater than 128 characters long.</p>
              </div>
          </div>
          <div className="footer">
              <button type="submit" className="btn">Create New Account</button>
          </div>
      </div>   
    
    )       
}
