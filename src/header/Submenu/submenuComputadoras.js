import laptopsImage from "../assets/COMPUTADORAS.png"
const submenuComputadoras = {
    title: "Computadoras",
    link: "/Computadoras",
    image: laptopsImage,
    columns: [
        {
            title: "HOGAR &OFICINA",
            items: [
                { label: "AMD Series", link: "/" },
                { label: "Intel Series", link: "/" },
            ],
        },
        {
            title: "PC GAMER'S",
            items: [
                { label: "Intel", link: "/" },
                { label: "AMD", link: "/" },
            ],
        },
        {
            title: "LINEA EMPRESARIAL",
            items: [
                { label: "Hp", link: "/" },
                { label: "Lenovo", link: "/" },
                { label: "Dell", link: "/" },
            ],
        },
        {
            title: "NUC MINI PC'S",
            items: [
                { label: "Asrock", link: "/" },
                { label: "Intel", link: "/" },
            ],
        },
    ],
}

export default submenuComputadoras


