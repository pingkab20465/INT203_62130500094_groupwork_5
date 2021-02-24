app.component('photo-view',{
    props:['big-photo-path'],
    template:
    /*html*/
    `
    <div class="bg-black w-full h-screen">
        <div class="h-1/6 flex justify-end">
            <button @click="$emit('toggle-big-photo-display')" class="material-icons h-1/2 text-5xl mr-3 mt-2 text-white">highlight_off</button>
        </div>
        <div class="h-5/6 flex justify-center">
            <img class="h-full pb-2 -mt-8" :src="bigPhotoPath">
        </div>
    </div>
    `
});