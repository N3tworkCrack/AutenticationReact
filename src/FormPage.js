import React from "react";

import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter, MDBView } from 'mdbreact';
import firebase from "firebase";


firebase.initializeApp({
  apiKey: "AIzaSyBezj996k8a4JGOkiBnvqEHmUdYdpRVHKA",
  authDomain: "fir-autenticacion-3239f.firebaseapp.com"
})


class FormPage extends React.Component {




auten(e){
 var provider = new firebase.auth.FacebookAuthProvider();
 firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  
}).catch(function(error) {
  // Handle Errors here.
 
  // ...
});
}
google(e){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  
  // ...
}).catch(function(error) {
  // Handle Errors here.
  
  // ...
});
}
state = { isSignedIn: false }

componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
}

render(){

return(
  
  

<MDBView>

     <MDBContainer>
      <MDBRow>
      <MDBCol md="9" lg="7" xl="5" className="mx-auto mt-3">
        <MDBCol md="26">
          <MDBCard>
            <MDBCardBody className="mx-4">

              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Bienvenido </strong>
                </h3>
              </div>
              <MDBInput
                label="Tu email" icon="user"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Tu contraseña"
                group
                type="password"
                validate
                containerClass="mb-0"
                icon="lock"
              />
              <p className="font-small blue-text d-flex justify-content-end pb-3">
                ¿Olvidaste
                <a href="#!" className="blue-text ml-1">

                  la contraseña?
                </a>
              </p>
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                >
                  ¡Inicia sesión!
                </MDBBtn>
              </div>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                O inicia sesión con:
              </p>
              <div className="row my-3 d-flex justify-content-center">
                <MDBBtn
                  type="button"
                  onClick={this.auten.bind(this)}
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                 
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"

                >
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                   onClick={this.google.bind(this)}
                  className="z-depth-1a"
                >
                  <MDBIcon fab icon="google-plus-g" className="blue-text" />
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                <a href="#!" className="blue-text ml-1">

                  Sign Up
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
            </MDBCol>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
     </MDBView>

)
  }
    }

export default FormPage;