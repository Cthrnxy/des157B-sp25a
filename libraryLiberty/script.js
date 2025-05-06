(function () {
    'use strict';

    AOS.init();


    // Initialize map centered on Shanghai
    const map = L.map('map').setView([31.2304, 121.4737], 13);

    // Add base layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Create marker for Shanghai
    const marker = L.marker([31.2304, 121.4737]).addTo(map);
    marker.bindPopup("<b>Welcome to Shanghai!</b>").openPopup();
    document.getElementById('infoImage').hidden = true;
    document.getElementById('more').hidden = true;
    document.getElementById('title').textContent = "Click the maker to discover the place I recommend!";
    document.getElementById('title').style.margin = "200px 25px 200px 0px";

    const places = [
        {
            name: "The Bund",
            coords: [31.2401, 121.4905],
            image: "images/thebund.jpeg",
            link: "https://you.ctrip.com/sight/shanghai2/736.html?renderPlatform="
        },
        {
            name: "Yu Garden",
            coords: [31.2272, 121.4928],
            image: "images/yuyuan.jpg",
            link:"https://you.ctrip.com/sight/shanghai2/740.html?renderPlatform=#ctm_ref=www_hp_bs_lst"
        },

        {
            name: "Pain Chaud Bakery & Coffee",
            coords: [31.208236022510274, 121.40649586581964],
            image: "images/painchaud.PNG",
            link: "https://you.ctrip.com/food/2/25042336.html#ctm_ref=www_hp_bs_lst"
        },

        {
            name: "Dip in Gelato",
            coords: [31.22022275371666, 121.45157972067068],
            image: "images/gelato.JPG",
            link:"https://you.ctrip.com/food/2/25033629.html#ctm_ref=www_hp_bs_lst"

        },

        {
            name: "Mietal Hands Shanghai Brancho",
            coords: [31.21942368558019, 121.46489464153342],
            image: "images/metalcafe.PNG",
            link:"https://you.ctrip.com/food/2/22298246.html#ctm_ref=www_hp_bs_lst"
        },

        {
            name: "Sinan Bookstore",
            coords: [31.21732609958648, 121.46863216317908],
            image: "images/sinanstore.JPG",
            link:"https://you.ctrip.com/shopping/2/4380529.html"
        },

        {
            name: "Xie Huang Yu Mian",
            coords: [31.222320275438253, 121.47365445789049],
            image: "images/xieshanghuang.PNG",
            link:"https://you.ctrip.com/food/2/144908588.html"
        },

        {
            name: "Museum of Contemporary Art Shanghai",
            coords: [31.231708611712623, 121.47307047013334],
            image: "images/pudongart.jpg",
            link:"https://www.museumofartpd.org.cn/en/index"
        },
        
        {
            name: "Pop Mart",
            coords: [31.23380587852864, 121.47587361136762],
            image: "images/popmart.jpg",
            link:"https://www.trip.com/guide/shopping/shanghai-popmart.html"
        },

        {
            name: "Nan Jing Road",
            coords: [31.23700162415797, 121.48031191832185],
            image: "images/nanjingroad.jpg",
            link:"https://you.ctrip.com/sight/shanghai2/3739.html?renderPlatform=#ctm_ref=www_hp_bs_lst"
        },
        
        {
            name: "Aurora Art Museum",
            coords: [31.23670202759742, 121.50028429961596],
            image: "images/aurora.jpg",
            link:"https://myartguides.com/artspaces/museums/shanghai/aurora-museum/"
        },

        {
            name: "Oriental Pearl TV Tower",
            coords: [31.239482601308115, 121.50019133795128],
            image: "images/pearl.jpg",
            link:"https://you.ctrip.com/sight/shanghai2/762.html?renderPlatform=#ctm_ref=www_hp_bs_lst"
        },

        {
            name: "Shanghai Liuli China Museum",
            coords: [31.208595117190857, 121.47012248350052],
            image: "images/liuli.PNG",
            link:"https://www.liuliusa.com/"
        },
    ];

    // Add markers
    places.forEach(place => {
        const marker = L.marker(place.coords).addTo(map);
        marker.on('click', () => {
            // Update info box on right side
            document.getElementById('infoImage').hidden = false;
            document.getElementById('more').hidden = false;
            document.getElementById('more').href=place.link;
            document.getElementById('title').style.margin = "0";
            document.getElementById('title').textContent = place.name;
            document.getElementById('infoImage').src = place.image;

        });
    });


    // Add a popup



})();
