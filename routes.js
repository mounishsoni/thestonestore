const routes = [
    {path: '/', name: 'Home', component: homeComponent},
    {path: '/signin', name: 'Sign In', component: signInComponent},
    {path: '/signup', name: 'Sign Up', component: signUpComponent}
]

const router = new VueRouter({
    routes: routes
})