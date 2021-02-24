app.component('photo-search',{
    template:
    /*html*/
    `
    <div class="flex justify-center mb-2">
        <input @input="updateRTValue" v-model="tempSearchKeywordsRealtime" @keyup.enter="$emit('do-search')" placeholder="Enter your keywords" id="serachBox" class="pl-1 text-black shadow-inner border border-gray-300 border-opacity-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:ring-opacity-70">
        <button @click="deleteTempVal" @click="$emit('toggle-search-display')" id="cancelButton" class="ml-3 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">Cancel</button>
    </div>
    `,
    data() {
        tempSearchKeywordsRealtime: '';
    },
    methods: {
        updateRTValue() {
            this.$emit('update-rt-value',this.tempSearchKeywordsRealtime);
        },
        deleteTempVal() {
            this.tempSearchKeywordsRealtime='';
        }
    }
});