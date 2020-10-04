const adminComponent = {
    data: function() {
        return {
        }
    },
    methods: {
    },
    template: `
    <div class="row row-cols-1 row-cols-md-3 mt-3 text-center">
      <div class="col mb-4">
        <!-- Card -->
        <div class="card">

          <!--Card content-->
          <div class="card-body">

            <!--Title-->
            <h4 class="card-title">Add Category</h4>
            <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
            <router-link to="/admin/addCategory" class="btn btn-light-blue btn-md">Click to add</router-link>

          </div>

        </div>
      </div>
      <div class="col mb-4">
        <!-- Card -->
        <div class="card">

          <!--Card content-->
          <div class="card-body">

            <!--Title-->
            <h4 class="card-title">Add Product</h4>
            <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
            <router-link to="/admin/addProduct" class="btn btn-light-blue btn-md">Click to add</router-link>

          </div>

        </div>
      </div>
      <div class="col mb-4">
        <!-- Card -->
        <div class="card">

          <!--Card content-->
          <div class="card-body">

            <!--Title-->
            <h4 class="card-title">Add Tag</h4>
            <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
            <router-link to="/admin/addTag" class="btn btn-light-blue btn-md">Click to add</router-link>

          </div>

        </div>
      </div>
    </div>
    `
}