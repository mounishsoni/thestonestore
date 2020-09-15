const routes = [
    {path: '/', name: 'Home', component: homeComponent},
    {path: '/admin/addCategory', name: 'Add Category', component: addCategoryComponent},
    {path: '/admin/addTag', name: 'Add Tag', component: addTagComponent},
    {path: '/contact', name: 'Contact Us', component: contactComponent},
    {path: '/signin', name: 'Sign In', component: signInComponent},
    {path: '/signup', name: 'Sign Up', component: signUpComponent}
]

const router = new VueRouter({
    routes: routes
})