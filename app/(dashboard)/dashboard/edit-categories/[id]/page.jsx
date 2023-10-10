import EditCategories from "@/components/EditCategories/EditCategories";

const getCategoryById = async (id) => {
  try {
    const res = await fetch(
      window.location.origin.includes("localhost")
        ? `http://localhost:3000/api/categories/${id}`
        : `${window.location.origin}/api/categories/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch Category");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const EditCategory = async ({ params }) => {
  const { id } = params;

  const { categories } = await getCategoryById(id);

  const { category, description } = categories;

  return (
    <>
      <EditCategories id={id} category={category} description={description} />
    </>
  );
};

export default EditCategory;
