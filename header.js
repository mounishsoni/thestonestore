Vue.component('header-component', {
    template: `
    <header style="background-color: #fff; font-size: small;">
        <nav class="navbar navbar-expand-lg navbar-light shadow-none border-0">
          <div style="flex:auto;">
            <div class="row">

              <div class="col-sm" style="float: left;">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#subNav"
                  aria-controls="subNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              </div>

              <div class="col-sm text-center">
                <router-link to="/">
                  <span class="font-weight-bold">TheStoneStore</span>
                </router-link>
                  
              </div>

              <div class="col-sm">
                <ul class="navbar-nav" style="float: right;">
                  <li class="nav-item">
                    <router-link :to="'/signup'" class="nav-item nav-link">Sign Up</router-link>
                  </li>
                  <li class="nav-item nav-link">|</li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Sign In</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <i class="fas fa-shopping-cart"></i><span class="d-lg-none ml-3"></span> 0 Item(s)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <nav class="navbar navbar-expand-lg navbar-light shadow-none border-0">
          <div class="collapse navbar-collapse" id="subNav" style="justify-content: center;">
            <ul class="navbar-nav">
              <li class="nav-item pr-3">
                <a class="nav-link mr-1" href="#">Home</a>
              </li>
              <li class="nav-item pr-3">
                <a class="nav-link mr-1" href="#">Product</a>
              </li>
              <li class="nav-item pr-3">
                <a class="nav-link mr-1" href="#">Men's</a>
              </li>
              <li class="nav-item pr-3">
                <a class="nav-link mr-1" href="#">Women's</a>
              </li>
              <li class="nav-item pr-3">
                <a class="nav-link mr-1" href="#">Couple's</a>
              </li>
              <li class="nav-item pr-3">
                <a class="nav-link mr-1" href="#">Deals</a>
              </li>
              <li class="nav-item pr-3">
                <a class="nav-link" href="#">My Account</a>
              </li>
              <li class="nav-item pr-3">
                <a class="nav-link mr-1" href="#">Contact Us</a>
              </li>
                <!-- <li class="nav-item"> <a class="nav-link" href="#">
              <i class="fab fa-linkedin"></i><span class="d-lg-none ml-3">Linkedin</span>
              </a> </li> -->
            </ul>
          </div>
        </nav>
    </header>
    `
})

new Vue({
  el: '#header',
  router: router,
})