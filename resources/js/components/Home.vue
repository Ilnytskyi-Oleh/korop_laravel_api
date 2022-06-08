<template>
    <div class="container" :class="{'loading': loading}">
        <div class="row">
            <div class="col-lg-3">
                <h1 class="my-4">Shop Catalog</h1>
                <div class="list-group">
                    <a class="list-group-item" v-for="category in categories">
                        {{ category.name }}
                    </a>
                </div>

            </div>
            <div class="col-lg-9">
                <div class="row mt-4">
                    <div class="col-lg-4 col-md-6 mb-4" v-for="product in products.data">
                        <div class="card h-100">
                            <a href="#">
                                <img class="card-img-top" src="https://picsum.photos/700/400" alt="">
                            </a>
                            <div class="card-body">
                                <h4 class="card-title">
                                    <a href="#">{{ product.name }}</a>
                                </h4>
                                <h5>$ {{ product.price }}</h5>
                                <p class="card-text">{{ product.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <paginate
                    :page-count="pageCount"
                    :click-handler="loadProducts"
                    :prev-text="'Prev'"
                    :next-text="'Next'"
                    :container-class="'pagination'"
                    :page-class="'page-item'">>
                </paginate>

            </div>
        </div>
    </div>
</template>

<script>
import Paginate from "vuejs-paginate";
export default {
    data: function () {
        return {
            categories: [],
            products: {},
            loading: true,
            pageCount:0,
        }
    },
    components:{
      Paginate
    },
    created() {
        this.loadCategories();
        this.loadProducts();
    },
    methods: {
        loadCategories: function () {
            axios.get('/api/categories')
                .then((response) => {
                    this.categories = response.data.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        loadProducts(page = 1) {
            axios.get('/api/products?page=' + page)
                .then((response) => {
                    console.log(response.data)
                    this.pageCount = response.data.meta.last_page
                    this.products = response.data;
                    this.loading = false;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}
</script>

<style lang="css">
.pagination {
    display: flex;

}
.page-item {
    margin: 0 0.3em;
}

.active a {

}
</style>
