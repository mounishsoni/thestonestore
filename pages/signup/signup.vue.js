const signUpComponent = {
    data: function() {
        return {
            user: {
                firstName : '',
                lastName : '',
                email : '',
                password : '',
                confirmPassword : '',
                phonenumber : ''
            }
        }
    },
    methods: {
        createUser: function() {
            db.collection('user').add({
                firstName: this.user.firstName,
                lastName: this.user.lastName,
                email: this.user.email,
                phonenumber: this.user.phonenumber
            }).then(auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then(() => {
                auth.signInWithEmailAndPassword(this.user.email, this.user.password).then(() => {
                    auth.currentUser.updateProfile({displayName: this.user.firstName + ' ' + this.user.lastName})
                    auth.currentUser.sendEmailVerification().then(auth.signOut())
                }
                ).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ...
                    console.log("error code", errorCode)
                    console.log("error Message", errorMessage)
                  });
                
            }))
            // TODO: Redirect to Sign IN Route
            this.$router.push('/')
        }
    },
    template: `
    <div class="row my-4">
    <div class="col"></div>
    <div class="card col-lg-6">
    
    <div class="card-body">

    <!-- Default form register -->
    <form class="text-center p-4">
    
        <p class="h4 mb-4">Sign up</p>
    
        <div class="form-row mb-4">
            <div class="col">
                <!-- First name -->
                <input type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="First name" v-model=user.firstName>
            </div>
            <div class="col">
                <!-- Last name -->
                <input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name" v-model=user.lastName>
            </div>
        </div>
    
        <!-- E-mail -->
        <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail" v-model=user.email>
    
        <!-- Password -->
        <input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" v-model=user.password>
        <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
            At least 8 characters and 1 digit
        </small>
    
        <!-- Confirm Password -->
        <input type="password" id="defaultRegisterFormConfirmPassword" class="form-control mb-4" placeholder="Confirm Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" v-model=user.confirmPassword>

        <!-- Phone number -->
        <input type="text" id="defaultRegisterPhonePassword" class="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock" v-model=user.phonenumber>
    
        <!-- Newsletter -->
        <!-- <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="defaultRegisterFormNewsletter">
            <label class="custom-control-label" for="defaultRegisterFormNewsletter">Subscribe to our newsletter</label>
        </div> -->
    
        <!-- Sign up button -->
        <button class="btn btn-info my-4 btn-block" type="submit" @click.prevent=createUser>Sign up</button>
    
        <!-- Social register -->
        <p>or sign up with:</p>
    
        <a href="#" class="mx-2" role="button"><i class="fab fa-facebook-f light-blue-text"></i></a>
        <a href="#" class="mx-2" role="button"><i class="fab fa-google light-blue-text"></i></a>

        <hr>
    
        <!-- Terms of service -->
        <p>By clicking
            <em>Sign up</em> you agree to our
            <a href="" target="_blank">terms of service</a>
        </p>
        
    </form>
    </div>
    
    </div>
    <div class="col"></div>
    </div>
    <!-- Default form register -->
    `
}