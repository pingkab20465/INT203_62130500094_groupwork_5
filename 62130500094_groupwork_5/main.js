const app = Vue.createApp({
    data() {
        return { 
            pics: [ //truthiness for 'liking'
                ['./images/fox.jpg', 'Fox', false]
                ,['./images/cloud.jpg', 'Cloud', false]
                ,['./images/bird.jpg', 'Bird', false]
            ],
            showSearchButton: true,
            searchKeywordsRealtime: '',
            searchKeywordsAfterHitEnter: '',
            bigPhotoDisplay: false,
            bigPhotoPath: '',
            showNoResult: false
        }
    },
    computed: {
        countPics() {
            return this.pics.length;
        },
        totalLikes() {
            return this.pics.filter(i => i[2]).length
        },
        searchResultArray() {
            return this.pics.filter(i => i[1].toLowerCase().includes(this.searchKeywordsAfterHitEnter.toLowerCase()))
        }
    },
    methods: {
        toggleLike(pic) {
            pic[2]= !pic[2];
        },
        toggleSearchDisplay() {
            if(this.showSearchButton == false) {this.searchKeywordsRealtime=this.searchKeywordsAfterHitEnter='';this.showNoResult=false;}
            this.showSearchButton = !this.showSearchButton;
        },
        doSearch() {
            this.searchKeywordsAfterHitEnter=this.searchKeywordsRealtime;
            if(this.searchResultArray.length==0) {this.showNoResult = true;}
            else {this.showNoResult = false}
        },
        toggleBigPhotoDisplay(pic) {
            if(!this.bigPhotoDisplay) {this.bigPhotoPath=pic}
            this.bigPhotoDisplay = !this.bigPhotoDisplay;
        },
        updateRealtimeValue(val) {
            this.searchKeywordsRealtime = val;
        }
    }
})