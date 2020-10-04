const addCategoryComponent = {
    data: function() {
        return {
            category: {
                name: '',
                image_url: ''
            }
        }
    },
    methods: {
        addCategoryMethod: function() {
            db.collection('categories').add(this.category).then(()=>{
                this.category= {
                    name: '',
                    image_url: ''
                }
            })
        }
    },
    template: `
    <div>
        <div class="m-4 text-left">
            <router-link to="/admin">Back to dashboard</router-link>
        </div>

        <div class="row my-4">
        <div class="col"></div>
        <div class="card col-lg-6">

        <div class="card-body">

        <!-- Default form register -->
        <form class="text-center p-4">

            <p class="h4 mb-4">Add Category</p>

            <input type="text" id="defaultRegisterFormCategoryName" class="form-control my-3" placeholder="Category Name" v-model=category.name>

            <input type="text" id="defaultRegisterFormCategoryImage" class="form-control my-3" placeholder="Category Image" v-model=category.image_url>

            <button class="btn btn-info my-4 btn-block" type="submit" @click.prevent=addCategoryMethod>Add Category</button>

        </form>
        </div>

        </div>
        <div class="col"></div>
        </div>
    </div>
    `
}