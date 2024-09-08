import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const retrieveProduct = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:3000/${queryKey[0]}/${queryKey[1]}`
  );
  return response.data;
};

const ProductDetail = ({ id }) => {
  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: retrieveProduct,
  });

  if (isLoading) return <div>fetching product detail...</div>;
  if (error) <div>an error occured:{error.message}</div>;

  return (
    <div className="w-1/5">
      <h1 className="text-3xl my-2">product deatails</h1>

      <div className="border bg-gray-100 p-1 text-md rounded flex flex-col">
        <img
          src={product?.thumbnail}
          alt={product?.title}
          className="object-cover h-24 w-24 p-1 border rounded-full m-auto"
        />
        <p>{product?.title}</p>
        <p>{product?.description}</p>
        <p>{product?.price}</p>
        <p>{product?.rating}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
