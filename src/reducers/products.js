var initialState = [
  {
    id: 1,
    name: "Iphone 6S",
    image:
      "https://www.xtmobile.vn/vnt_upload/product/Hinh_DT/Iphone/iphone_6s/thumbs/(600x600)_crop_iphone-6s-silver-xtmobile_1.jpg",
    description: "Sản phẩm do Apple sản xuất",
    price: 10000,
    inventory: 5,
    rating: 3,
  },
  {
    id: 2,
    name: "Samsung galaxy S8",
    image:
      "https://cdn.mobilecity.vn/mobilecity-vn/images/2019/01/samsung-galaxy-s8-blue.jpg",
    description: "Sản phẩm do Samsung sản xuất",
    price: 12000,
    inventory: 10,
    rating: 4,
  },
  {
    id: 3,
    name: "Iphone 12",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=926&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1602088412000",
    description: "Sản phẩm do Apple sản xuất",
    price: 20000,
    inventory: 15,
    rating: 5,
  },
];
const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};
export default products;
