const addProductComponent = {
    data: function() {
        return {
            product: {
                category_id: '',
                description: '',
                headline: '',
                image_url: [],
                inventory: [],
                name: '',
                price: null,
                size: [],
                sku_id: '',
                tags: []
            },
            categories: [],
            tags: [],
            size: [],
            inventory: [],
            image_url: []
        }
    },
    mounted: function() {
        
        // if(auth.currentUser.email !== "thestonestore@nycmail.com") {
        //     this.$router.push('/')
        // }
        db.collection('categories').onSnapshot(snapshot => {
            const data = []
            snapshot.forEach(doc => {
                data.push({
                    id: doc.id,
                    name: doc.data().name
                })
            });
            this.categories = data
        })

        db.collection('tags').onSnapshot(snapshot => {
            const data = []
            snapshot.forEach(doc => {
                data.push({
                    id: doc.id,
                    name: doc.data().name
                })
            this.tags = data
            })
        })
    },
    methods: {
        addProductMethod: function() {
            db.collection('products').add(this.product).then(doc => console.log(doc.id))
            this.product =  {
                category_id: '',
                description: '',
                headline: '',
                image_url: [],
                inventory: [],
                name: '',
                price: '',
                size: [],
                sku_id: '',
                tags: []
            }
        }
    },
    template: `
    <div class="row my-4">
    <div class="col"></div>
    <div class="card col-lg-6">
    
    <div class="card-body">

    <!-- Default form register -->
    <form class="text-center p-4">
    
        <p class="h4 mb-4">Add Product</p>
    
        <input type="text" id="defaultRegisterFormProductName" class="form-control my-3" placeholder="Product Name" v-model=product.name>
        
        <input type="text" id="defaultRegisterFormProductHeadline" class="form-control my-3" placeholder="Product Headline" v-model=product.headline>
        
        <textarea rows=3 id="defaultRegisterFormProductDescription" class="form-control my-3" placeholder="Product Description" v-model=product.description></textarea>
        
        <input type="text" id="defaultRegisterFormProductSKU" class="form-control my-3" placeholder="Product SKU ID" v-model=product.sku_id>
        
        <input type="number" id="defaultRegisterFormProductPrice" class="form-control my-3" placeholder="Product Price" v-model=product.price>

        <v-select label="name" :reduce="category => category.id" placeholder="Product Category" :options="categories" class="my-3" v-model=product.category_id></v-select>
        
        <v-select label="name" :reduce="tag => tag.id" multiple placeholder="Product Tags" :options="tags" class="my-3" v-model=product.tags></v-select>
        
        <v-select multiple taggable push-tags placeholder="Product Size" :options="size" class="my-3" v-model=product.size></v-select>
        
        <v-select multiple taggable push-tags placeholder="Product Inventory" :options="inventory" class="my-3" v-model=product.inventory></v-select>
        
        <v-select multiple taggable push-tags placeholder="Product Images" :options="image_url" class="my-3" v-model=product.image_url></v-select>
        
        <button class="btn btn-info my-4 btn-block" type="submit" @click.prevent=addProductMethod>Add Product</button>
    
    </form>
    </div>
    
    </div>
    <div class="col"></div>
    </div>
    `
}