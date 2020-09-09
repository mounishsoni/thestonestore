const contactComponent = {
    data: function () {
        return {
            mail: {
                securityKey: "833f4581-77f3-4e38-a7f4-ef13dee3abb5",
                name: "",
                toMail: "thestonestore@nycmail.com",
                fromMail: "",
                subject: "",
                message: ""
            }   
        }
    },
    methods: {
        sendMail: function () {
            Email.send({
                SecureToken : this.mail.securityKey,
                To : this.mail.toMail,
                From : this.mail.toMail,
                Subject : "[ " + this.mail.name + " ] " + this.mail.subject,
                Body : this.mail.message + "\n [ " + this.mail.fromMail + " ] "
            }).then(
              message => console.log(message)
            );
        }
    },
    template: `
    <section class="contact-section my-5">

    <!-- Form with header -->
    <div class="card">
  
      <!-- Grid row -->
      <div class="row">
  
        <!-- Grid column -->
        <div class="col-lg-8">
  
          <div class="card-body form">
  
            <!-- Header -->
            <h3 class="mt-4 text-center"><i class="fas fa-envelope pr-2"></i>Write to us</h3>
  
            <!-- Grid row -->
            <div class="row">
  
              <!-- Grid column -->
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <input type="text" id="form-contact-name" class="form-control" v-model="mail.name" required>
                  <label for="form-contact-name" class="">Your name</label>
                </div>
              </div>
              <!-- Grid column -->
  
              <!-- Grid column -->
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <input type="text" id="form-contact-email" class="form-control" v-model="mail.fromMail">
                  <label for="form-contact-email" class="">Your email</label>
                </div>
              </div>
              <!-- Grid column -->
  
            </div>
            <!-- Grid row -->
  
            <!-- Grid row -->
            <div class="row">
  
              <!-- Grid column -->
              <div class="col-md-12">
                <div class="md-form mb-0">
                  <input type="text" id="form-contact-subject" class="form-control" v-model="mail.subject">
                  <label for="form-contact-subject" class="">Subject</label>
                </div>
              </div>
  
            </div>
            <!-- Grid row -->
  
            <!-- Grid row -->
            <div class="row">
  
              
              <div class="col-md-12">
                <div class="md-form mb-0">
                  <textarea id="form-contact-message" class="form-control md-textarea" rows="3" v-model="mail.message"></textarea>
                  <label for="form-contact-message">Your message</label>
                <div class="row">
                <div class="col"></div>
                  <input type="submit" class="btn waves-effect btn-outline-warning px-3 py-2 text-center" value='Send Mail' style="border-radius: 25px;" @click.prevent=sendMail>
                    
                  </input>
                  <div class="col"></div>
                  </div>
                </div>
              </div>
              
            </div>
            <!-- Grid row -->
  
          </div>
  
        </div>
        <!-- Grid column -->
  
        <!-- Grid column -->
        <div class="col-lg-4">
  
          <div class="card-body contact elegant-color text-center h-100 white-text">
  
            <h3 class="my-4 pb-2">Contact information</h3>
            <ul class="text-lg-left list-unstyled ml-4">
              <li>
                <p><i class="fas fa-map-marker-alt pr-2"></i>Greensboro, NC, USA</p>
              </li>
              <li>
                <p><i class="fas fa-envelope pr-2"></i>thestonestore@nycmail.com</p>
              </li>
            </ul>
            <hr class="hr-light my-4">
            <ul class="list-inline text-center list-unstyled">
              <li class="list-inline-item">
                <a class="p-2 fa-lg tw-ic" href="http://twitter.com" target="_blank">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="p-2 fa-lg li-ic" href="http://facebook.com" target="_blank">
                  <i class="fab fa-facebook"> </i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="p-2 fa-lg ins-ic" href="http://instagram.com" target="_blank">
                  <i class="fab fa-instagram"> </i>
                </a>
              </li>
            </ul>
  
          </div>
  
        </div>
        <!-- Grid column -->
  
      </div>
      <!-- Grid row -->
  
    </div>
    <!-- Form with header -->
  
  </section>
    `
}