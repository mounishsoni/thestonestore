const signInComponent = {
    data: function() {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        signInMethod: function() {
            auth.signInWithEmailAndPassword(this.user.email, this.user.password).then(
                () => {
                    console.log(auth.currentUser.displayName)
                    this.$router.push('/')
                }
            )
        }
    },
    template: `
    <!-- Default form login -->
    <div class="row my-4">
    <div class="col"></div>
    <div class="card col-lg-6">
    
    <div class="card-body">
        <form class="text-center p-4">

            <p class="h4 mb-4">Sign in</p>

            <!-- Email -->
            <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail" v-model=user.email>

            <!-- Password -->
            <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password" v-model=user.password>

            <div class="d-flex justify-content-around">
                <!-- <div>
                    
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember">
                        <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                    </div>
                </div> -->
                <div>
                    <!-- Forgot password -->
                    <a href="">Forgot password?</a>
                </div>
            </div>

            <!-- Sign in button -->
            <button class="btn btn-info btn-block my-4" type="submit" @click.prevent="signInMethod">Sign in</button>

            <!-- Register -->
            <p>Not a member?
                <router-link to="/signup">Sign Up</router-link>
            </p>

            <!-- Social login -->
            <p>or sign in with:</p>

            <a href="#" class="mx-2" role="button"><i class="fab fa-facebook-f light-blue-text"></i></a>
            <a href="#" class="mx-2" role="button"><i class="fab fa-google light-blue-text"></i></a>

        </form>
        </div>
    
    </div>
    <div class="col"></div>
    </div>
    <!-- Default form login -->
    `
}