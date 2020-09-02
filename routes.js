const routes = [
    {path: '/', name: 'Home', component: homeComponent},
    {path: '/contact', name: 'Contact Us', component: contactComponent},
    {path: '/signin', name: 'Sign In', component: signInComponent},
    {path: '/signup', name: 'Sign Up', component: signUpComponent}
]

const router = new VueRouter({
    routes: routes
})