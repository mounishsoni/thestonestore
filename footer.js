Vue.component('footer-component', {
    template:`
    <footer class="page-footer font-small unique-color-dark">

        <div class="container-fluid text-center text-md-left mt-5 pt-3">
      
          <!-- Grid row -->
          <div class="row mt-3">
      
            <!-- Grid column -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 ">
      
              <!-- Content -->
              <h6 class="text-uppercase font-weight-bold">The Stone Store</h6>
              <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
              <p>Get connected with us on social networks!</p>
      
                <!-- Facebook -->
                <a class="fb-ic">
                  <i class="fab fa-facebook-f white-text mr-4"> </i>
                </a>
                <!-- Twitter -->
                <a class="tw-ic">
                  <i class="fab fa-twitter white-text mr-4"> </i>
                </a>
                <!-- Google +-->
                <a class="gplus-ic">
                  <i class="fab fa-google-plus-g white-text mr-4"> </i>
                </a>
                <!--Linkedin -->
                <a class="li-ic">
                  <i class="fab fa-linkedin-in white-text mr-4"> </i>
                </a>
                <!--Instagram-->
                <a class="ins-ic">
                  <i class="fab fa-instagram white-text"> </i>
                </a>
      
            </div>
            <!-- Grid column -->
      
            <!-- Grid column -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
      
              <!-- Links -->
              <h6 class="text-uppercase font-weight-bold">Products</h6>
              <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block  mx-auto" style="width: 60px;">
              <div class="row">
                  <div class="col">
                    <p>
                        <a href="#!">Product 1</a>
                      </p>
                      <p>
                        <a href="#!">Product 2</a>
                      </p>
                      <p>
                        <a href="#!">Product 3</a>
                      </p>
                      <p>
                        <a href="#!">Product 4</a>
                      </p>
                  </div>
                  <div class="col">
                    <p>
                        <a href="#!">Product 5</a>
                      </p>
                      <p>
                        <a href="#!">Product 6</a>
                      </p>
                      <p>
                        <a href="#!">Product 7</a>
                      </p>
                      <p>
                        <a href="#!">Product 8</a>
                      </p>
                  </div>
              </div>
              
      
            </div>
            <!-- Grid column -->
      
            <!-- Grid column
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
      
              <!-- Links -->
              <!-- <h6 class="text-uppercase font-weight-bold">Useful links</h6>
              <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
              <p>
                <a href="#!">Your Account</a>
              </p>
              <p>
                <a href="#!">Become an Affiliate</a>
              </p>
              <p>
                <a href="#!">Shipping Rates</a>
              </p>
              <p>
                <a href="#!">Help</a>
              </p>
      
            </div> -->
            <!-- Grid column -->
      
            <!-- Grid column -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
      
              <!-- Links -->
              <h6 class="text-uppercase font-weight-bold">Contact</h6>
              <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
              <p>
                <i class="fas fa-home mr-3"></i> Greensboro, NC, US</p>
              <p>
                <i class="fas fa-envelope mr-3"></i><a href="mailto:thestonestore@nycmail.com">thestonestore@nycmail.com</a></p>
      
                
            </div>
            <!-- Grid column -->
      
          </div>
          <!-- Grid row -->
      
        </div>
        <!-- Footer Links -->
      
        <!-- Copyright -->
        <div class="footer-copyright text-center py-3">© 2020 Copyright | 
          <a href="#">The Stone Store</a>
        </div>
        <!-- Copyright -->
      
      </footer>
    `
})

new Vue({
    el: '#footer',
    router: router,
  })