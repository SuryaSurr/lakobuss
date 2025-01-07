document.querySelectorAll('.btnDetail').forEach(item=>{
    item.addEventListener('click', (e) => {
        let parent = e.target.parentNode.parentNode;

        let gambar = parent.querySelector('.card-img-top').src;
        let harga = parent.querySelector('.harga').innerHTML;
        let judul = parent.querySelector('.card-text').innerHTML;
        let deskripsi = parent.querySelector('.deskripsi')? parent.querySelector('.deskripsi').innerHTML:'<i>Mod masih tahap perkembangan</i>';
        

        let tombolModal = document.querySelector('.btnModal');
        tombolModal.click();

        document.querySelector('.modalTittle').innerHTML = judul;
        let image = document.createElement('img');
        image.src = gambar;
        image.classList.add('w-100');
        document.querySelector('.modalImage').innerHTML = ''; 
        document.querySelector('.modalImage').appendChild(image);
        document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
        document.querySelector('.modalHarga').innerHTML = harga;

        const nohp = '6288292089835';
        let pesan = `https://api.whatsapp.com/send?dc=${nohp}&text=Hallo Min, saya ingin order mod ini apakah mod ini tersedia ${gambar}`;

        document.querySelector('.btnBeli').href = pesan;
    })
})