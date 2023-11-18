"use client";
import React, { useEffect, useMemo, useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { LuLoader2 } from "react-icons/lu";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { CldUploadButton } from "next-cloudinary";
import { BsImages } from "react-icons/bs";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["code"],
    [{ color: [] }],
  ],
};

const UpdateForm = ({ id, post }) => {
  const [data, setData] = useState(null);
  const [title, setTitle] = useState(post.title);
  const [metaTitle, setMetaTitle] = useState(post.metaTitle);
  const [description, setDescription] = useState(post.description);
  const [metaDescription, setMetaDescription] = useState(post.metaDescription);
  const [catId, setCatId] = useState(post.catId);
  const [imageUrl, setImageUrl] = useState(post.imageUrl);
  const [publicId, setPublicId] = useState(post.publicId);
  const [textEditor, setTextEditor] = useState(post.textEditor);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("/api/categories");

        if (!res.ok) {
          throw new Error("Failed to fetch Categories");
        }

        const categories = await res.json();

        setData(categories);
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, []);

  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const handleImageUpload = (result) => {
    const info = result.info;
    if ("secure_url" in info && "public_id" in info) {
      const url = info.secure_url;
      const public_id = info.public_id;
      setImageUrl(url);
      setPublicId(public_id);
    }
  };

  const removeImage = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/removeImage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicId }),
      });

      if (res.ok) {
        setImageUrl("");
        setPublicId("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      toast.error("All Field required");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`/api/post/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          metaTitle,
          description,
          metaDescription,
          catId,
          publicId,
          imageUrl,
          textEditor,
          authorId: session?.user?._id,
          authorName: session?.user?.name,
        }),
      });

      if (res.ok) {
        toast.success("Post Updated Successfully");
        router.push("/dashboard/post");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mt-10">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-10">
            <input
              type="text"
              placeholder="Enter Title Here..."
              className="p-3 rounded-lg border-[2px] border-black outline-indigo-600"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Meta Title Here..."
              className="p-3 rounded-lg border-[2px] border-black outline-indigo-600"
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-10 mt-10">
            <textarea
              rows="3"
              type="text"
              placeholder="Enter Description Here..."
              className="p-3 rounded-lg border-[2px] border-black outline-indigo-600"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <textarea
              rows="3"
              type="text"
              placeholder="Enter Meta Description Here..."
              className="p-3 rounded-lg border-[2px] border-black outline-indigo-600"
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-10 mt-10">
            <div>
              <select
                onChange={(e) => setCatId(e.target.value)}
                className="p-3 rounded-lg border-[2px] border-black outline-indigo-600 w-full"
                value={catId}
              >
                <option>Select Category</option>
                {data &&
                  data.categories.map((item) => (
                    <>
                      <option key={item._id} value={item._id}>
                        {item.category}
                      </option>
                    </>
                  ))}
              </select>
            </div>
            <div className="flex gap-5 relative">
              <CldUploadButton
                uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                className={` border-2 border-dotted grid place-items-center bg-slate-100 relative rounded-lg w-full ${
                  imageUrl && "pointer-events-none h-40"
                }`}
                onUpload={handleImageUpload}
              >
                <div className="flex items-center gap-2  ">
                  <BsImages />
                  Upload Image
                </div>
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    fill
                    className="absolute object-cover inset-0 rounded-lg"
                    alt="Profile Image"
                  />
                )}
              </CldUploadButton>
              {publicId && (
                <>
                  <div>
                    <button
                      onClick={removeImage}
                      className="bg-red-600 p-3 absolute top-2 left-2 cursor-pointer z-10 rounded-lg"
                    >
                      <FaTrash className="text-white " />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="mt-10">
            <ReactQuill
              theme="snow"
              value={textEditor}
              onChange={setTextEditor}
              placeholder="Tell Your Story..."
              modules={modules}
            />
          </div>
          <button
            type="submit"
            className="py-3 px-4 bg-black text-white rounded-lg w-max mt-5"
          >
            {loading ? <LuLoader2 className="animate-spin" /> : "Update"}
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateForm;
