import { ChartColumn, Home, NotepadText, Package, PackagePlus, Settings, ShoppingBag, UserCheck, UserPlus, Users } from "lucide-react";

import ProfileImage from "@/assets/profile-image.jpg";
import ProductImage from "@/assets/product-delicious2.jpg";

export const navbarLinks = [
    {
        title: "Dashboard",
        links: [
            {
                label: "Dashboard",
                icon: Home,
                path: "/",
            },
            {
                label: "Analytics",
                icon: ChartColumn,
                path: "/analytics",
            },
            {
                label: "Reports",
                icon: NotepadText,
                path: "/reports",
            },
        ],
    },
    {
        title: "Customers",
        links: [
            {
                label: "Customers",
                icon: Users,
                path: "/customers",
            },
            {
                label: "New customer",
                icon: UserPlus,
                path: "/new-customer",
            },
            {
                label: "Verified customers",
                icon: UserCheck,
                path: "/verified-customers",
            },
        ],
    },
    {
        title: "Products",
        links: [
            {
                label: "Products",
                icon: Package,
                path: "/products",
            },
            {
                label: "New product",
                icon: PackagePlus,
                path: "/new-product",
            },
            {
                label: "Inventory",
                icon: ShoppingBag,
                path: "/inventory",
            },
        ],
    },
    {
        title: "Settings",
        links: [
            {
                label: "Settings",
                icon: Settings,
                path: "/settings",
            },
        ],
    },
];

export const overviewData = [
    {
        name: "Jan",
        total: 1500,
    },
    {
        name: "Feb",
        total: 2000,
    },
    {
        name: "Mar",
        total: 1000,
    },
    {
        name: "Apr",
        total: 5000,
    },
    {
        name: "May",
        total: 2000,
    },
    {
        name: "Jun",
        total: 5900,
    },
    {
        name: "Jul",
        total: 2000,
    },
    {
        name: "Aug",
        total: 5500,
    },
    {
        name: "Sep",
        total: 2000,
    },
    {
        name: "Oct",
        total: 4000,
    },
    {
        name: "Nov",
        total: 1500,
    },
    {
        name: "Dec",
        total: 2500,
    },
];

export const recentSalesData = [
    {
        id: 1,
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        image: ProfileImage,
        total: 1500,
    },
    {
        id: 2,
        name: "James Smith",
        email: "james.smith@email.com",
        image: ProfileImage,
        total: 2000,
    },
    {
        id: 3,
        name: "Sophia Brown",
        email: "sophia.brown@email.com",
        image: ProfileImage,
        total: 4000,
    },
    {
        id: 4,
        name: "Noah Wilson",
        email: "noah.wilson@email.com",
        image: ProfileImage,
        total: 3000,
    },
    {
        id: 5,
        name: "Emma Jones",
        email: "emma.jones@email.com",
        image: ProfileImage,
        total: 2500,
    },
    {
        id: 6,
        name: "William Taylor",
        email: "william.taylor@email.com",
        image: ProfileImage,
        total: 4500,
    },
    {
        id: 7,
        name: "Isabella Johnson",
        email: "isabella.johnson@email.com",
        image: ProfileImage,
        total: 5300,
    },
];

export const topProducts = [
    {
        number: 1,
        name: "Fitness Power",
        image: ProductImage,
        description: "Frango grelhado com batata-doce, arroz integral e brócolis.",
        price: 29.90,
        status: "In Stock",
        rating: 4.5,
    },
    {
        number: 2,
        name: "Caseirinha",
        image: ProductImage,
        description: "Arroz, feijão, bife acebolado e purê de batata.",
        price: 31.30,
        status: "In Stock",
        rating: 4.7,
    },
    {
        number: 3,
        name: "Low Carb Supreme",
        image: ProductImage,
        description: "Filé de tilápia grelhado, mix de legumes e couve refogada.",
        price: 22.70,
        status: "In Stock",
        rating: 4.8,
    },
    {
        number: 4,
        name: "Nordestina",
        image: ProductImage,
        description: "Baião de dois, carne de sol desfiada e vinagrete.",
        price: 29.90,
        status: "Out of Stock",
        rating: 4.4,
    },
    {
        number: 5,
        name: "Veggie Power",
        image: ProductImage,
        description: "Quinoa com legumes, hambúrguer de grão-de-bico e molho de ervas.",
        price: 33.40,
        status: "In Stock",
        rating: 4.3,
    },
    {
        number: 6,
        name: "Executiva Premium",
        image: ProductImage,
        description: "Arroz à grega, medalhão de filé mignon ao molho madeira e batata rústica.",
        price: 43.20,
        status: "In Stock",
        rating: 4.6,
    },
    {
        number: 7,
        name: "Frango Supreme",
        image: ProductImage,
        description: "Strogonoff de frango, arroz branco e batata palha crocante.",
        price: 41.50,
        status: "In Stock",
        rating: 4.7,
    },
    {
        number: 8,
        name: "Delícia do Mar",
        image: ProductImage,
        description: "Risoto de camarão com toque de limão siciliano.",
        price: 49.90,
        status: "In Stock",
        rating: 4.5,
    },
    {
        number: 9,
        name: "Mineirinha",
        image: ProductImage,
        description: "Arroz branco, feijão tropeiro, lombo suíno assado e couve refogada.",
        price: 37.80,
        status: "In Stock",
        rating: 4.8,
    },
    {
        number: 10,
        name: "Oriental Fit",
        image: ProductImage,
        description: "Frango xadrez com legumes, arroz de couve-flor e gergelim tostado.",
        price: 25.90,
        status: "Out of Stock",
        rating: 4.5,
    },
];



