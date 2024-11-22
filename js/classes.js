function User(id, username, password, name, phone, email, status, products, donhang) {
	this.id = id;
	this.name = name || '';
	this.phone = phone || '';
	this.email = email || '';
	this.username = username;
	this.password = password;
	this.status = status || 'active';
	this.products = products || [];
	this.donhang = donhang || [];
}

function equalUser(u1, u2) {
	return (u1.username == u2.username && u1.password == u2.password);
}

function Product(masp, name, img, price, star, rateCount, promo) {
	this.masp = masp;
	this.img = img;
	this.name = name;
	this.price = price;
	this.star = star;
	this.rateCount = rateCount;
	this.promo = promo;
}