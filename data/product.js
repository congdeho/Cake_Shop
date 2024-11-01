var list_products = [{
    id: 1,
    name: "Corn Mousse Cake",
    price: "320000",
    image: "image/product/corn-mousse.png",
    type:"Cake",
    description: "Bánh kem mousse bắp, kem tươi và hạnh nhân",
    taste: "Ngọt",
    size: "16cm",
    promo: {
        name: "Giảm 10%",
        discount: 10,
    }
}, {
    id: 2,
    name: "Fresh Mango Cream Cake",
    price: "350000" ,
    image: "image/product/FRESH-MANGO.png",
    type:"Cake",
    description: "Bánh kem bông lan vani kem tươi và mứt trái cây",
    taste: "Ngọt",
    size: "16cm",
    promo: {
        name: "Giảm 10%",
        discount: 10,
    }  
},{
    id: 3,
    name: "Fresh Strawberry Yogurt Cream Cake",
    price: "400000",
    image: "image/product/YOGURT-CREAM.png",
    type:"Cake",
    description: "Bông lan vani cùng kem sữa chua, mứt dâu và trái cây tươi",
    taste: "Ngọt",
    size: "16cm",
    promo: {
        name: "Giảm 10%",
        discount: 10,
    }
}, {
    id: 4,
    name: "Strawberry Brownie Mousse Cake",
    price: "450000",
    image: "image/product/STRAWBERRY-MOUSSE.png",
    type:"Cake",
    description: "Bông lan sô cô la, kem mousse sô cô la và caramel",
    taste: "Ngọt",
    size: "16cm",
    promo: {
        name: "Giảm 10%",
        discount: 10,
    }
}, {
    id: 5,
    name: "Brioche Bread",
    price: "80000" ,
    image: "image/product/brioche.png",
    type:"Bread",
    description: "Bánh mì hoa cúc thơm ngon phủ hạnh nhân",
    taste: "Ngọt",
    texture: "Mềm, xốp",
    size: "Phù hợp cho một bữa ăn",
    promo: {
        name: "Giảm 10%",
        discount: 10,
    }
}, {
    id: 6,
    name: "Fresh Cream Loaf Bread",
    price: "75000",
    image: "image/product/fresh-cream-loaf.png",
    type:"Bread",
    description: "Bánh gối nhân kem sữa đặc ngọt dịu",
    taste: "Ngọt",
    texture: "Mềm, xốp",
    size: "Phù hợp cho một bữa ăn",
    promo: {
        name: "Giảm 10%",
        discount: 10,
    }
}, {
    id: 7,
    name: "Best Ever Garlic Bread",
    price: "60000",
    image: "image/product/garlic-butter.png",
    type:"Bread",
    description: "Bánh mì bơ tỏi kem phô mai",
    taste: "Ngọt",
    texture: "Giòn, xốp",
    size: "Phù hợp ăn vặt",
    promo: {
        name: "Giảm 10%",
        discount: 10,
    }
}, {
    id: 8,
    name: "Butter Croissant",
    price: "69000",
    image: "image/product/croissant.png",
    type:"Bread",
    description: "Bánh Croissant Bơ ngàn lớp thơm ngon",
    taste: "Ngọt",
    texture: "Giòn, xốp",
    size: "Phù hợp ăn vặt",
    promo: {
        name: "Giảm 10%",
        discount: 10,
    }
}, {
    id: 9,
    name: "Walnut Chocolate Cookie",
    price: "19000",
    image: "image/product/choco-walnut.png",
    type:"Cookie",
    description: "Cookie sô cô la giòn tan cùng hạt óc chó thơm ngon",
    taste: "Ngọt",
    texture: "Giòn, xốp",
    size: "Phù hợp ăn vặt",
    promo: {
        name: "Giảm 10%",
        discount: 10,
    }
}, {
    id: 10,
    name: "Cranberry Walnut Cookie",
    price: "19000",
    image: "image/product/cranberry-walnut.png",
    type:"Cookie",
    description: "Cookie giòn tan cùng hạt óc chó và nam việt quất",
    taste: "Ngọt",
    texture: "Giòn, xốp",
    size: "Phù hợp ăn vặt",
    promo: {
        name: "Giảm 10%",
        discount: 10,
    }
}, {
    id: 11,
    name: "English Toffee Cookie",
    price: "19000",
    image: "image/product/toffee.png",
    type:"Cookie",
    description: "Cookie giòn tan cùng kẹo bơ béo ngậy",
    taste: "Ngọt",
    texture: "Giòn, xốp",
    size: "phù hợp ăn vặt",
    promo: {
        name: "Giảm 10%",
        discount: 10,
    }
}, {
    id: 12,
    name: "Double Chocochip Cookie",
    price: "19000",
    image: "image/product/chocochip.png",
    type:"Cookie",
    description: "Cookie giòn tan cùng sô cô la đậm vị",
    taste: "Ngọt",
    texture: "Giòn, xốp",
    size: "phù hợp ăn vặt",
    promo: {
        name: "Giảm 10%",
        discount: 10,
    }
}, {
    id: 13,
    name: "Chicken Mango Tropical Salad",
    price: "79000",
    image: "image/product/Mango-Chicken-Salad.png",
    type:"Sandwich and Salad",
    description: "Salad gà nướng, xoài, bắp, cà cùng sốt dầu giấm",
    taste: "Chua, Ngọt",
    size: "Phù hợp cho một bữa ăn",
    promo: {
        name: "Giảm 10%",
        discount: 10,
    }
}, {
    id: 14,
    name: "B.E.L.T. Sandwich",
    price: "45000",
    image: "image/product/BELT.png",
    type:"Sandwich and Salad",
    description: "Sandwich thịt xông khói, trứng, xà lách và cà chua",
    taste: " Mặn",
    texture: "Mềm, xốp",
    size: "Phù hợp cho một bữa ăn",
    promo: {
        name: "Giảm 10%",
        discount: 10,
    }
}, {
    id: 15,
    name: "Cranbery Chicken Pastry Wrap Sandwich",
    price: "69000",
    image: "image/product/cranberry-chicken.png",
    type:"Sandwich and Salad",
    description: "Sandwich ngàn lớp cùng thịt gà và hạt Nam việt quất",
    taste: "Mặn",
    texture: "Mềm, xốp",
    size: "Phù hợp cho một bữa ăn",
    promo: {
        name: "Giảm 10%",
        discount: 10,
    }
}, {
    id: 16,
    name: "Spicy Chicken & Avocado Salad",
    price: "79000",
    image: "image/product/AVOCADO-SALAD.png",
    type:"Sandwich and Salad",
    description: "Salad gà chiên giòn sốt cay cùng bơ tươi và sốt hành mayo",
    taste: "Mặn",
    size: "Phù hợp cho một bữa ăn",
    promo: {
        name: "Giảm 10%",
        discount: 10,
    }
}]