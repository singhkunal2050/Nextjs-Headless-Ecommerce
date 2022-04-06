import Image from "next/image";
import Link from "next/link";
import ProductButton from "./ProductButton";

function ProductSingle({product}) {
  return (
    <div className="product bottom-2 shadow-sm hover:shadow-xl" key={product.id}>
      <div className="product-image">
        <Image
          src={product.images[0].src}
          alt={product.title}
          className="object-cover"
          width="700px"
          height="500px"
        />
      </div>
      <div className="product-info py-4 px-2 flex flex-col">
        <Link href={"/product/" + product.handle}>
          <a className="text-lg font-bold pb-2">
            <h3>{product.title}</h3>
          </a>
        </Link>
        <p className="mb-4">
          <strong className="text-sm text-gray-600" >${product.variants[0].price}</strong>
        </p>
        <ProductButton productId={product.variants[0].id} />
      </div>
    </div>
  );
}

export default ProductSingle;
