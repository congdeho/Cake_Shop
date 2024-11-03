const orders = [
    { 
        id: 'DH001',
        user: [{ id: 1 }],
        address: 'Quận 1',
        date: '2024-10-10',
        status: 'pending',
        products: [
            { id: 1, quantity: 1 },
            { id: 2, quantity: 2 }
        ]
    },
    { 
        id: 'DH002',
        user: [{ id: 2 }],
        address: 'Quận 3',
        date: '2024-09-15',
        status: 'confirmed',
        products: [
            { id: 1, quantity: 3 },
            { id: 2, quantity: 1 }
        ]
    },
    { 
        id: 'DH003',
        user: [{ id: 3 }],
        address: 'Quận 4',
        date: '2024-08-20',
        status: 'delivered',
        products: [
            { id: 1, quantity: 2 },
            { id: 2, quantity: 3 }
        ]
    },
    { 
        id: 'DH004',
        user: [{ id: 1 }],
        address: 'Quận 5',
        date: '2024-07-05',
        status: 'canceled',
        products: [
            { id: 1, quantity: 1 },
            { id: 2, quantity: 2 }
        ]
    },
    { 
        id: 'DH005',
        user: [{ id: 4 }],
        address: 'Quận 6',
        date: '2024-06-18',
        status: 'pending',
        products: [
            { id: 1, quantity: 2 },
            { id: 2, quantity: 1 }
        ]
    },
    { 
        id: 'DH006',
        user: [{ id: 5 }],
        address: 'Quận 7',
        date: '2024-05-12',
        status: 'confirmed',
        products: [
            { id: 1, quantity: 3 },
            { id: 2, quantity: 4 }
        ]
    },
    { 
        id: 'DH007',
        user: [{ id: 2 }],
        address: 'Quận 8',
        date: '2024-04-22',
        status: 'delivered',
        products: [
            { id: 1, quantity: 2 },
            { id: 2, quantity: 3 }
        ]
    },
    { 
        id: 'DH008',
        user: [{ id: 3 }],
        address: 'Quận 10',
        date: '2024-03-10',
        status: 'canceled',
        products: [
            { id: 1, quantity: 4 },
            { id: 2, quantity: 1 }
        ]
    },
    { 
        id: 'DH009',
        user: [{ id: 4 }],
        address: 'Quận 11',
        date: '2024-02-05',
        status: 'pending',
        products: [
            { id: 1, quantity: 1 },
            { id: 2, quantity: 3 }
        ]
    },
    { 
        id: 'DH010',
        user: [{ id: 5 }],
        address: 'Quận 12',
        date: '2024-01-28',
        status: 'confirmed',
        products: [
            { id: 1, quantity: 2 },
            { id: 2, quantity: 2 }
        ]
    },
    { 
        id: 'DH011',
        user: [{ id: 1 }],
        address: 'Quận Tân Bình',
        date: '2024-10-12',
        status: 'delivered',
        products: [
            { id: 1, quantity: 3 },
            { id: 2, quantity: 1 }
        ]
    },
    { 
        id: 'DH012',
        user: [{ id: 2 }],
        address: 'Quận Tân Phú',
        date: '2024-09-22',
        status: 'canceled',
        products: [
            { id: 1, quantity: 4 },
            { id: 2, quantity: 2 }
        ]
    },
    { 
        id: 'DH013',
        user: [{ id: 3 }],
        address: 'Quận Bình Tân',
        date: '2024-08-25',
        status: 'pending',
        products: [
            { id: 1, quantity: 1 },
            { id: 2, quantity: 1 }
        ]
    },
    { 
        id: 'DH014',
        user: [{ id: 4 }],
        address: 'Quận Bình Thạnh',
        date: '2024-07-18',
        status: 'confirmed',
        products: [
            { id: 1, quantity: 2 },
            { id: 2, quantity: 4 }
        ]
    },
    { 
        id: 'DH015',
        user: [{ id: 5 }],
        address: 'Quận Gò Vấp',
        date: '2024-06-10',
        status: 'delivered',
        products: [
            { id: 1, quantity: 3 },
            { id: 2, quantity: 2 }
        ]
    },
    { 
        id: 'DH016',
        user: [{ id: 1 }],
        address: 'Quận Phú Nhuận',
        date: '2024-05-05',
        status: 'canceled',
        products: [
            { id: 1, quantity: 4 },
            { id: 2, quantity: 3 }
        ]
    },
    { 
        id: 'DH017',
        user: [{ id: 2 }],
        address: 'Quận 1',
        date: '2024-04-28',
        status: 'pending',
        products: [
            { id: 1, quantity: 1 },
            { id: 2, quantity: 4 }
        ]
    },
    { 
        id: 'DH018',
        user: [{ id: 3 }],
        address: 'Quận 3',
        date: '2024-03-15',
        status: 'confirmed',
        products: [
            { id: 1, quantity: 2 },
            { id: 2, quantity: 2 }
        ]
    },
    { 
        id: 'DH019',
        user: [{ id: 4 }],
        address: 'Quận 4',
        date: '2024-02-20',
        status: 'delivered',
        products: [
            { id: 1, quantity: 3 },
            { id: 2, quantity: 1 }
        ]
    },
    { 
        id: 'DH020',
        user: [{ id: 5 }],
        address: 'Quận 5',
        date: '2024-01-30',
        status: 'canceled',
        products: [
            { id: 1, quantity: 1 },
            { id: 2, quantity: 2 }
        ]
    }
];
