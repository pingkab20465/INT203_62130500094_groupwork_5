app.component('photo-item',{
    props:{'show-no-result': Boolean, 'search-result-array': Array},
    template:
    /*html*/
    `
    <div class="grid max-w-4xl mx-auto p-8">
        <p v-show="showNoResult"></p> <!-- grid1 -->
        <p v-show="showNoResult" class="text-4xl justify-self-center">No Photo!</p> <!-- grid2 -->
        <div v-for="pic in searchResultArray" class="bg-white rounded h-full text-grey-darkest no-underline shadow-md">
            <button @click="toggleLike(pic)" class="w-full">
                <h1 class="text-3xl p-6">{{pic[1]}} <span v-show="pic[2]">❤️<span></h1>
            </button>
            <img @click="toggleBigPhotoDisplay(pic[0])" class="w-full block rounded-b" :src="pic[0]">
        </div>
    </div>
    `,
    methods: {
        toggleLike(pic) {
            this.$emit('toggle-like', pic);
        },
        toggleBigPhotoDisplay(item) {
            this.$emit('toggle-big-photo-display', item);
        }
    }
});