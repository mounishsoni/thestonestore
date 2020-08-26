const routes = [
    {path: '/', name: 'Home', component: homeComponent},
    {path: '/signup', name: 'Sign Up', component: signUpComponent}
]

const router = new VueRouter({
    routes: routes
})