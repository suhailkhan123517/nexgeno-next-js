import EditPost from "@/components/EditPost/EditPost";
import baseUrl from "@/utils/baseUrl";
const getCategories = async () => {
  try {
    const res = await fetch(`${baseUrl}/api/categories`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Categories");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading Categories :", error);
  }
};

const getBlogById = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/api/blog/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Blog");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const EditPostPage = async ({ params }) => {
  const { id } = params;
  const { blogs } = await getBlogById(id);
  const {
    imageUrl,
    title,
    description,
    textEditor,
    catagoriesData,
    seoTitle,
    metaDescription,
  } = blogs;

  const { categories } = await getCategories();
  return (
    <>
      <EditPost
        id={id}
        imageUrl={imageUrl}
        categories={categories}
        title={title}
        description={description}
        textEditor={textEditor}
        catagoriesData={catagoriesData}
        seoTitle={seoTitle}
        metaDescription={metaDescription}
      />
    </>
  );
};

export default EditPostPage;
