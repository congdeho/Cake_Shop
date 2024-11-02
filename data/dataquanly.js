const orders = [
    { 
        id: 'DH001', 
        customer: 'Nguyen Van A', 
        address: 'Quận 1', 
        date: '2024-10-10', 
        status: 'pending',
        products: [
            { id: 1, quantity: 1 }, // Sản phẩm 1 (Corn Mousse Cake)
            { id: 2, quantity: 2 }  // Sản phẩm 2 (Fresh Mango Cream Cake)
        ]
    },
    { 
        id: 'DH002', 
        customer: 'Le Thi B', 
        address: 'Quận 2', 
        date: '2024-10-12', 
        status: 'delivered',
        products: [
            { id: 3, quantity: 1 } // Sản phẩm 3 (Fresh Strawberry Yogurt Cream Cake)
        ]
    },
    { 
        id: 'DH003', 
        customer: 'Tran Van C', 
        address: 'Quận 3', 
        date: '2024-10-15', 
        status: 'confirmed',
        products: [
            { id: 4, quantity: 1 } // Sản phẩm 4 (Chocolate Mousse Cake)
        ]
    },
    { 
        id: 'DH004', 
        customer: 'Vu Thi I', 
        address: 'Quận 5', 
        date: '2024-10-16', 
        status: 'pending',
        products: [
            { id: 1, quantity: 2 }, // Sản phẩm 1
            { id: 5, quantity: 1 }  // Sản phẩm 5 (Fruit Tart)
        ]
    },
    { 
        id: 'DH005', 
        customer: 'Pham Van L', 
        address: 'Quận 4', 
        date: '2024-10-17', 
        status: 'delivered',
        products: [
            { id: 6, quantity: 1 } // Sản phẩm 6 (Lemon Tart)
        ]
    },
    { 
        id: 'DH006', 
        customer: 'Ly Thi M', 
        address: 'Quận 1', 
        date: '2024-10-18', 
        status: 'canceled',
        products: [
            { id: 2, quantity: 1 } // Sản phẩm 2
        ]
    },
    { 
        id: 'DH007', 
        customer: 'Hoang Van H', 
        address: 'Quận 6', 
        date: '2024-10-19', 
        status: 'confirmed',
        products: [
            { id: 7, quantity: 3 } // Sản phẩm 7 (Blueberry Cheesecake)
        ]
    },
    { 
        id: 'DH008', 
        customer: 'Pham Thi G', 
        address: 'Quận 2', 
        date: '2024-10-20', 
        status: 'pending',
        products: [
            { id: 8, quantity: 2 } // Sản phẩm 8 (Matcha Cake)
        ]
    },
    { 
        id: 'DH009', 
        customer: 'Nguyen Van D', 
        address: 'Quận 3', 
        date: '2024-10-21', 
        status: 'delivered',
        products: [
            { id: 9, quantity: 1 } // Sản phẩm 9 (Pineapple Cake)
        ]
    },
    { 
        id: 'DH010', 
        customer: 'Le Thi E', 
        address: 'Quận 7', 
        date: '2024-10-22', 
        status: 'confirmed',
        products: [
            { id: 10, quantity: 1 } // Sản phẩm 10 (Red Velvet Cake)
        ]
    },
    { 
        id: 'DH011', 
        customer: 'Do Van J', 
        address: 'Quận 8', 
        date: '2024-10-23', 
        status: 'pending',
        products: [
            { id: 1, quantity: 1 }, // Sản phẩm 1
            { id: 6, quantity: 1 }  // Sản phẩm 6
        ]
    },
    { 
        id: 'DH012', 
        customer: 'Mai Thi K', 
        address: 'Quận 1', 
        date: '2024-10-24', 
        status: 'canceled',
        products: [
            { id: 3, quantity: 2 } // Sản phẩm 3
        ]
    }
];
