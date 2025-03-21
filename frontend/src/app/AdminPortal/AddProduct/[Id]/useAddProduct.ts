import { Product } from "@/objects/Product";
import {
  useCreateProductMutation,
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "@/redux/services/productApi";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export const useAddProduct = () => {
  const { Id } = useParams();
  const router = useRouter();
  const productId = Number(Id);
  const [createProduct, isCreateLoading] = useCreateProductMutation();
  const [updateProduct, isUpdateLoading] = useUpdateProductMutation();

  const { data: productData, isLoading } = useGetProductByIdQuery(productId, {
    skip: productId === 0,
  });

  const formFields = [
    {
      name: "name",
      label: "Product Name",
      placeholder: "Enter the name",
      description: "Enter the name of the product.",
      validationRules: { required: "Product name is required" },
    },
    {
      name: "description",
      label: "Description",
      placeholder: "Enter product description",
      description: "Provide a short description of the product.",
      validationRules: {
        required: "Description is required ",
      },
    },
    {
      name: "price",
      label: "Price",
      type: "number",
      placeholder: "Enter product price",
      description: "Set the price of the product.",
      validationRules: {
        required: "Price is required",
        min: { value: 1, message: "Minimum price is 1" },
      },
    },
    {
      name: "stock",
      label: "Stock",
      type: "number",
      placeholder: "Enter the stock",
      description: "Enter the stock of this product",
      validationRules: {
        required: "Stock is required",
        min: { value: 0, message: "Stock cannot be negative" },
      },
    },
    {
      name: "categoryName",
      label: "Category",
      placeholder: "Enter the category of the product",
    },
  ];

  const handleSubmit = async (data: Product) => {
    const transformedData = {
      ...data,
      price: parseInt(data.price as string, 10),
      stock: parseInt(data.stock as string, 10),

      isDeleted: false,
    };

    const cleanedData = Object.fromEntries(
      Object.entries(transformedData).filter(
        ([_, value]) => value !== undefined
      )
    );

    if (productId > 0) {
      await updateProduct({ id: productId, updatedProduct: data });
    } else {
      await createProduct(cleanedData);
    }
    if (isCreateLoading || isUpdateLoading) {
      router.back();
    }
  };

  return {
    formFields,
    handleSubmit,
    productData,
    productId,
    isLoading,
    isCreateLoading,
  };
};
