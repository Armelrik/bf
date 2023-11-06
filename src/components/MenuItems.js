export const MenuItems = [
    {
        id : 1,
        title : "Home",
        url : "/",
        cName : "nav-links",
        icon : "fa-solid fa-house-user"
    },
    {
        id : 2,
        title : "A propos",
        url : "/about",
        cName : "nav-links",
        icon : "fa-solid fa-circle-info"
    },
    {
        id : 3,
        title : "Service",
        url : "/service",
        cName : "nav-links",
        icon : "fa-solid fa-briefcase",
        subMenu : [
            {
                subtitle : "Marketing",
                url : "/marketing",
            },
            {
                title : "Consulting",
                url : "/consulting",
            }
        ]
    },
    {
        id : 4,
        title : "Contact",
        url : "/contact",
        cName : "nav-links",
        icon : "fa-solid fa-address-book"
    },
    {
        id : 5,
        title : "S'inscrire",
        url : "/signup",
        cName : "nav-links-mobile"
    }
];

export const serviceDropdown = [
    {
        id : 1,
        title : "Marketing",
        url : "/marketing",
        menu : "Service",
        cName : "submenu-item"
    },
    {
        id : 2,
        title : "Consulting",
        url : "/consulting",
        menu : "Service",
        cName : "submenu-item"
    },
    {
        id : 3,
        title : "Design",
        url : "/design",
        menu : "Service",
        cName : "submenu-item"
    },
    {
        id : 3,
        title : "CallCenter",
        url : "/call",
        menu : "Contact",
        cName : "submenu-item"
    },
]

