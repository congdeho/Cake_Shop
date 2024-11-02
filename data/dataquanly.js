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
        address: 'Quận Bình Thạnh', 
        date: '2024-10-24', 
        status: 'canceled',
        products: [
            { id: 3, quantity: 2 } // Sản phẩm 3
        ]
    },
    { id: 'DH013', customer: 'Nguyen Thi L', address: 'Quận 1', date: '2024-10-25', status: 'delivered', products: [{ id: 1, quantity: 2 }] },
    { id: 'DH014', customer: 'Tran Van M', address: 'Quận 2', date: '2024-10-26', status: 'pending', products: [{ id: 2, quantity: 1 }] },
    { id: 'DH015', customer: 'Pham Thi N', address: 'Quận 3', date: '2024-10-27', status: 'confirmed', products: [{ id: 3, quantity: 1 }] },
    { id: 'DH016', customer: 'Hoang Van O', address: 'Quận 4', date: '2024-10-28', status: 'delivered', products: [{ id: 4, quantity: 1 }] },
    { id: 'DH017', customer: 'Ly Van P', address: 'Quận 5', date: '2024-10-29', status: 'pending', products: [{ id: 5, quantity: 2 }] },
    { id: 'DH018', customer: 'Vu Thi Q', address: 'Quận 6', date: '2024-10-30', status: 'canceled', products: [{ id: 6, quantity: 1 }] },
    { id: 'DH019', customer: 'Le Van R', address: 'Quận 7', date: '2024-10-31', status: 'confirmed', products: [{ id: 7, quantity: 2 }] },
    { id: 'DH020', customer: 'Tran Thi S', address: 'Quận 8', date: '2024-11-01', status: 'pending', products: [{ id: 8, quantity: 1 }] },
    { id: 'DH021', customer: 'Nguyen Van T', address: 'Quận 9', date: '2024-11-02', status: 'delivered', products: [{ id: 9, quantity: 1 }] },
    { id: 'DH022', customer: 'Pham Thi U', address: 'Quận 10', date: '2024-11-03', status: 'confirmed', products: [{ id: 10, quantity: 2 }] },
    { id: 'DH023', customer: 'Hoang Van V', address: 'Quận 11', date: '2024-11-04', status: 'canceled', products: [{ id: 1, quantity: 1 }] },
    { id: 'DH024', customer: 'Ly Thi W', address: 'Quận 12', date: '2024-11-05', status: 'pending', products: [{ id: 2, quantity: 2 }] },
    { id: 'DH025', customer: 'Vu Van X', address: 'Quận 1', date: '2024-11-06', status: 'delivered', products: [{ id: 3, quantity: 1 }] },
    { id: 'DH026', customer: 'Le Thi Y', address: 'Quận 2', date: '2024-11-07', status: 'confirmed', products: [{ id: 4, quantity: 1 }] },
    { id: 'DH027', customer: 'Nguyen Van Z', address: 'Quận 3', date: '2024-11-08', status: 'pending', products: [{ id: 5, quantity: 2 }] },
    { id: 'DH028', customer: 'Tran Thi A1', address: 'Quận 4', date: '2024-11-09', status: 'canceled', products: [{ id: 6, quantity: 1 }] },
    { id: 'DH029', customer: 'Pham Van B1', address: 'Quận 5', date: '2024-11-10', status: 'delivered', products: [{ id: 7, quantity: 3 }] },
    { id: 'DH030', customer: 'Hoang Thi C1', address: 'Quận 6', date: '2024-11-11', status: 'confirmed', products: [{ id: 8, quantity: 1 }] },
    { id: 'DH031', customer: 'Ly Van D1', address: 'Quận 7', date: '2024-11-12', status: 'pending', products: [{ id: 9, quantity: 2 }] },
    { id: 'DH032', customer: 'Vu Thi E1', address: 'Quận 8', date: '2024-11-13', status: 'delivered', products: [{ id: 10, quantity: 1 }] },
    { id: 'DH033', customer: 'Le Van F1', address: 'Quận 9', date: '2024-11-14', status: 'confirmed', products: [{ id: 1, quantity: 1 }] },
    { id: 'DH034', customer: 'Tran Thi G1', address: 'Quận 10', date: '2024-11-15', status: 'pending', products: [{ id: 2, quantity: 2 }] },
    { id: 'DH035', customer: 'Nguyen Van H1', address: 'Quận 11', date: '2024-11-16', status: 'canceled', products: [{ id: 3, quantity: 1 }] },
    { id: 'DH036', customer: 'Pham Thi I1', address: 'Quận 12', date: '2024-11-17', status: 'delivered', products: [{ id: 4, quantity: 1 }] },
    { id: 'DH037', customer: 'Hoang Van J1', address: 'Quận 1', date: '2024-11-18', status: 'confirmed', products: [{ id: 5, quantity: 2 }] },
    { id: 'DH038', customer: 'Ly Thi K1', address: 'Quận 2', date: '2024-11-19', status: 'pending', products: [{ id: 6, quantity: 1 }] },
    { id: 'DH039', customer: 'Vu Van L1', address: 'Quận 3', date: '2024-11-20', status: 'delivered', products: [{ id: 7, quantity: 3 }] },
    { id: 'DH040', customer: 'Le Thi M1', address: 'Quận 4', date: '2024-11-21', status: 'confirmed', products: [{ id: 8, quantity: 1 }] },
    { id: 'DH041', customer: 'Nguyen Van N1', address: 'Quận 5', date: '2024-11-22', status: 'pending', products: [{ id: 9, quantity: 2 }] },
    { id: 'DH042', customer: 'Tran Thi O1', address: 'Quận 6', date: '2024-11-23', status: 'canceled', products: [{ id: 10, quantity: 1 }] },
    { id: 'DH043', customer: 'Pham Van P1', address: 'Quận 7', date: '2024-11-24', status: 'delivered', products: [{ id: 1, quantity: 1 }] },
    { id: 'DH044', customer: 'Hoang Thi Q1', address: 'Quận 8', date: '2024-11-25', status: 'confirmed', products: [{ id: 2, quantity: 2 }] },
    { id: 'DH045', customer: 'Ly Van R1', address: 'Quận 9', date: '2024-11-26', status: 'pending', products: [{ id: 3, quantity: 1 }] },
    { id: 'DH046', customer: 'Vu Thi S1', address: 'Quận 10', date: '2024-11-27', status: 'canceled', products: [{ id: 4, quantity: 1 }] },
    { id: 'DH047', customer: 'Le Van T1', address: 'Quận 11', date: '2024-11-28', status: 'delivered', products: [{ id: 5, quantity: 2 }] },
    { id: 'DH048', customer: 'Tran Thi U1', address: 'Quận 12', date: '2024-11-29', status: 'confirmed', products: [{ id: 6, quantity: 1 }] },
    { id: 'DH049', customer: 'Nguyen Van V1', address: 'Quận 1', date: '2024-11-30', status: 'pending', products: [{ id: 7, quantity: 3 }] },
    { id: 'DH050', customer: 'Pham Thi W1', address: 'Quận 8', date: '2024-12-01', status: 'delivered', products: [{ id: 11, quantity: 2 }] },
    { id: 'DH051', customer: 'Nguyen Van X1', address: 'Quận 1', date: '2024-12-02', status: 'pending', products: [{ id: 12, quantity: 1 }] },
    { id: 'DH052', customer: 'Tran Thi Y1', address: 'Quận 3', date: '2024-12-03', status: 'confirmed', products: [{ id: 13, quantity: 2 }] },
    { id: 'DH053', customer: 'Hoang Van Z1', address: 'Quận 4', date: '2024-12-04', status: 'delivered', products: [{ id: 14, quantity: 1 }] },
    { id: 'DH054', customer: 'Ly Thi A2', address: 'Quận 5', date: '2024-12-05', status: 'pending', products: [{ id: 15, quantity: 1 }] },
    { id: 'DH055', customer: 'Vu Van B2', address: 'Quận 6', date: '2024-12-06', status: 'canceled', products: [{ id: 16, quantity: 2 }] },
    { id: 'DH056', customer: 'Le Thi C2', address: 'Quận 7', date: '2024-12-07', status: 'confirmed', products: [{ id: 11, quantity: 1 }] },
    { id: 'DH057', customer: 'Nguyen Van D2', address: 'Quận 8', date: '2024-12-08', status: 'delivered', products: [{ id: 12, quantity: 3 }] },
    { id: 'DH058', customer: 'Pham Thi E2', address: 'Quận 10', date: '2024-12-09', status: 'pending', products: [{ id: 13, quantity: 1 }] },
    { id: 'DH059', customer: 'Hoang Van F2', address: 'Quận 11', date: '2024-12-10', status: 'confirmed', products: [{ id: 14, quantity: 2 }] },
    { id: 'DH060', customer: 'Ly Thi G2', address: 'Quận 12', date: '2024-12-11', status: 'delivered', products: [{ id: 15, quantity: 1 }] },
    { id: 'DH061', customer: 'Vu Van H2', address: 'Quận Tân Bình', date: '2024-12-12', status: 'pending', products: [{ id: 16, quantity: 2 }] },
    { id: 'DH062', customer: 'Le Thi I2', address: 'Quận Tân Phú', date: '2024-12-13', status: 'canceled', products: [{ id: 11, quantity: 1 }] },
    { id: 'DH063', customer: 'Nguyen Van J2', address: 'Quận Bình Tân', date: '2024-12-14', status: 'delivered', products: [{ id: 12, quantity: 1 }] },
    { id: 'DH064', customer: 'Pham Thi K2', address: 'Quận Bình Thạnh', date: '2024-12-15', status: 'confirmed', products: [{ id: 13, quantity: 2 }] },
    { id: 'DH065', customer: 'Hoang Van L2', address: 'Quận Gò Vấp', date: '2024-12-16', status: 'pending', products: [{ id: 14, quantity: 1 }] },
    { id: 'DH066', customer: 'Ly Thi M2', address: 'Quận Phú Nhuận', date: '2024-12-17', status: 'canceled', products: [{ id: 15, quantity: 1 }] },
    { id: 'DH067', customer: 'Vu Van N2', address: 'Quận 1', date: '2024-12-18', status: 'delivered', products: [{ id: 16, quantity: 3 }] },
    { id: 'DH068', customer: 'Le Thi O2', address: 'Quận 2', date: '2024-12-19', status: 'confirmed', products: [{ id: 11, quantity: 1 }] },
    { id: 'DH069', customer: 'Nguyen Van P2', address: 'Quận 3', date: '2024-12-20', status: 'pending', products: [{ id: 12, quantity: 2 }] },
    { id: 'DH070', customer: 'Pham Thi Q2', address: 'Quận 4', date: '2024-12-21', status: 'canceled', products: [{ id: 13, quantity: 1 }] },
    { id: 'DH071', customer: 'Hoang Van R2', address: 'Quận 5', date: '2024-12-22', status: 'delivered', products: [{ id: 14, quantity: 1 }] },
    { id: 'DH072', customer: 'Ly Thi S2', address: 'Quận 6', date: '2024-12-23', status: 'confirmed', products: [{ id: 15, quantity: 2 }] },
    { id: 'DH073', customer: 'Vu Van T2', address: 'Quận 7', date: '2024-12-24', status: 'pending', products: [{ id: 16, quantity: 1 }] },
    { id: 'DH074', customer: 'Le Thi U2', address: 'Quận 8', date: '2024-12-25', status: 'canceled', products: [{ id: 11, quantity: 1 }] },
    { id: 'DH075', customer: 'Nguyen Van V2', address: 'Quận 10', date: '2024-12-26', status: 'delivered', products: [{ id: 12, quantity: 2 }] },
    { id: 'DH076', customer: 'Pham Thi W2', address: 'Quận 11', date: '2024-12-27', status: 'confirmed', products: [{ id: 13, quantity: 1 }] },
    { id: 'DH077', customer: 'Hoang Van X2', address: 'Quận 12', date: '2024-12-28', status: 'pending', products: [{ id: 14, quantity: 3 }] },
    { id: 'DH078', customer: 'Ly Thi Y2', address: 'Quận Tân Bình', date: '2024-12-29', status: 'delivered', products: [{ id: 15, quantity: 1 }] },
    { id: 'DH079', customer: 'Vu Van Z2', address: 'Quận Tân Phú', date: '2024-12-30', status: 'confirmed', products: [{ id: 16, quantity: 2 }] },
    { id: 'DH080', customer: 'Le Thi A3', address: 'Quận Bình Tân', date: '2025-01-01', status: 'pending', products: [{ id: 11, quantity: 1 }] },
    { id: 'DH081', customer: 'Nguyen Van B3', address: 'Quận Bình Thạnh', date: '2025-01-02', status: 'canceled', products: [{ id: 12, quantity: 1 }] },
    { id: 'DH082', customer: 'Pham Thi C3', address: 'Quận Gò Vấp', date: '2025-01-03', status: 'delivered', products: [{ id: 13, quantity: 2 }] },
    { id: 'DH083', customer: 'Hoang Van D3', address: 'Quận Phú Nhuận', date: '2025-01-04', status: 'confirmed', products: [{ id: 14, quantity: 1 }] },
    { id: 'DH084', customer: 'Ly Thi E3', address: 'Quận 1', date: '2025-01-05', status: 'pending', products: [{ id: 15, quantity: 1 }] },
    { id: 'DH085', customer: 'Vu Van F3', address: 'Quận 2', date: '2025-01-06', status: 'canceled', products: [{ id: 16, quantity: 2 }] },
    { id: 'DH086', customer: 'Le Thi G3', address: 'Quận 3', date: '2025-01-07', status: 'delivered', products: [{ id: 11, quantity: 1 }] },
    { id: 'DH087', customer: 'Nguyen Van H3', address: 'Quận 4', date: '2025-01-08', status: 'confirmed', products: [{ id: 12, quantity: 3 }] },
    { id: 'DH088', customer: 'Pham Thi I3', address: 'Quận 5', date: '2025-01-09', status: 'pending', products: [{ id: 13, quantity: 1 }] },
    { id: 'DH089', customer: 'Hoang Van J3', address: 'Quận 6', date: '2025-01-10', status: 'delivered', products: [{ id: 14, quantity: 2 }] },
    { id: 'DH090', customer: 'Ly Thi K3', address: 'Quận 7', date: '2025-01-11', status: 'confirmed', products: [{ id: 15, quantity: 1 }] },
];
