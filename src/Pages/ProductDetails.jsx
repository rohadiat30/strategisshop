import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { ProductContext } from "../Context/ProductContext";
import styles from "../Styles";

const ProductDetails = () => {
  const { id } = useParams();

  const { product } = useContext(ProductContext);
  const { addToCart, rupiah } = useContext(CartContext);

  const products = product.find((item) => {
    return item.prId === id;
  });

  if (!products) {
    return (
      <section className="h-[500px] flex justify-center items-center">
        Loading.....
      </section>
    );
  }

  const {
    prNama,
    prHargaJual,
    prDeskripsi,
    linkImage,
    prBerat,
    prStock,
    prSatuan,
    kategori_name,
  } = products;
  return (
    <div>
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      <section className="pb-12 h-screen flex items-center relative z-5">
        <div class={`${styles.flexCenter} ${styles.boxWidth} mx-auto`}>
          <div className="flex flex-col lg:flex-row items-center p-20 rounded-3xl bg-primary shadow-lg shadow-secondary">
            <div className="flex w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:h-[400px] lg:w-[400px] xl:h-[400px] xl:w-[400px] justify-center py-8 items-center mb-8 mr-20 lg:mb-0 bg-secondary/20 rounded-3xl">
              <img
                className="max-w-[150px] lg:max-w-xs"
                src={linkImage}
                alt="product"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0 text-dimWhite">
                {prNama}
              </h1>
              <div className="text-xl text-secondary font-medium mb-6">
                {rupiah(prHargaJual)}
              </div>
              <p class="mb-4 text-dimWhite">{prDeskripsi}</p>
              <p class="mb-4 text-dimWhite">Kategori: {kategori_name}</p>
              <p class="mb-4 text-dimWhite">Berat: {prBerat} Kg</p>
              <p class="mb-8 text-dimWhite">
                Stock: {prStock} {prSatuan}
              </p>
              <button
                onClick={() => addToCart(products, products.prId)}
                className="bg-secondary rounded-xl py-2 px-6 text-white hover:bg-secondary/75"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
