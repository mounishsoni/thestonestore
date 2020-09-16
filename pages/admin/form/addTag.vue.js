const addTagComponent = {
    data: function() {
        return {
            tag: {
                name: ''
            }
        }
    },
    methods: {
        addTagMethod: function() {
            db.collection('tags').add(this.tag).then(()=>{
                this.tag= {
                    name: ''
                }
            })
        }
    },
    template: `
    <div class="row my-4">
    <div class="col"></div>
    <div class="card col-lg-6">
    
    <div class="card-body">

    <!-- Default form register -->
    <form class="text-center p-4">
    
        <p class="h4 mb-4">Add Tag</p>
    
        <input type="text" id="defaultRegisterFormTagName" class="form-control my-3" placeholder="Tag Name" v-model=tag.name>
        
        <button class="btn btn-info my-4 btn-block" type="submit" @click.prevent=addTagMethod>Add Tag</button>
    
    </form>
    </div>
    
    </div>
    <div class="col"></div>
    </div>
    `
}