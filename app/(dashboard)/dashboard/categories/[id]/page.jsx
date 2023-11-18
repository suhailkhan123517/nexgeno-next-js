import UpdateForm from "@/app/(dashboard)/dashboard/categories/components/UpdateForm";
import baseUrl from "@/utils/baseUrl";

const getCategory = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/api/categories/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch a Category");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const UpdateCategory = async ({ params }) => {
  const { id } = params;
  const { categories } = await getCategory(id);
  const { category } = categories;
  return (
    <>
      <UpdateForm id={id} category={category} />
    </>
  );
};

export default UpdateCategory;
