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
    // ... (other orders)
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

// Save orders to local storage
localStorage.setItem('orders', JSON.stringify(orders));
