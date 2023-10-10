"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import "react-quill/dist/quill.snow.css";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ImSpinner9 } from "react-icons/im";
import dynamic from "next/dynamic";
import Image from "next/image";

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
    ["code"], // Code editor
    [{ color: [] }], // Color picker
  ],
};

const EditPost = ({
  categories,
  id,
  image,
  title,
  description,
  textEditor,
  catagoriesData,
  seoTitle,
  metaDescription,
}) => {
  const [newLatestFile, setNewLatestFile] = useState(null);
  const [newImageUrl, setNewImageUrl] = useState(null);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newTextEditor, setNewTextEditor] = useState(textEditor);
  const [newCatagoriesData, setNewCatagoriesData] = useState(catagoriesData);
  const [newSeoTitle, setNewSeoTitle] = useState(seoTitle);
  const [newMetaDescription, setNewMetaDescription] = useState(metaDescription);
  const [loading, setLoading] = useState(false);
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

  const router = useRouter();

  const onDrop = useCallback((acceptedFiles) => {
    const latest = acceptedFiles[acceptedFiles.length - 1];
    setNewLatestFile(latest);
    const blob = new Blob([latest]);
    setNewImageUrl(URL.createObjectURL(blob));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = new FormData();
      data.set("newLatestFile", newLatestFile);
      data.set("newTitle", newTitle);
      data.set("newDescription", newDescription);
      data.set("newTextEditor", newTextEditor);
      data.set("newCatagoriesData", newCatagoriesData);
      data.set("newSeoTitle", newSeoTitle);
      data.set("newMetaDescription", newMetaDescription);

      const res = await fetch(
        `https://nexgeno-next-js.vercel.app/api/blog/${id}`,
        {
          method: "PUT",
          body: data,
        }
      );

      if (res.ok) {
        toast.success("Blog Successfully Update");
        router.refresh();
        router.push("/dashboard/all-post");
      } else {
        toast.error("Internal Error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-10">
          <div
            className="flex flex-col justify-center items-center h-[360px] border-dashed border-2  border-gray-800 hover:border-indigo-600 rounded-md gap-4 hover:bg-gray-100"
            {...getRootProps()}
          >
            <input
              onChange={(e) => setFile(e.target.files?.[0])}
              {...getInputProps()}
            />
            <h1 className="text-xl font-medium">
              Drag and Drop Files to Upload
            </h1>
            <h1>or</h1>
            <button
              type="button"
              onClick={(event) => event.preventDefault()}
              className="px-4 py-2 bg-black text-white hover:bg-black/70 rounded-md"
            >
              Select file
            </button>
          </div>
          <div>
            {newLatestFile ? (
              <>
                <div className="flex flex-col justify-center items-center h-[360px] border-dashed border-2  border-gray-800 hover:border-indigo-600 rounded-md gap-4 overflow-hidden">
                  <Image
                    src={newImageUrl}
                    width={400}
                    height={400}
                    alt="blog image"
                  />
                </div>
                <div>{newLatestFile.name}</div>
              </>
            ) : (
              <>
                <div className="flex flex-col justify-center items-center h-[360px] border-dashed border-2  border-gray-800 hover:border-indigo-600 rounded-md gap-4 overflow-hidden">
                  <Image
                    src={`/${image}`}
                    width={400}
                    height={400}
                    alt="blog image"
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start w-full gap-4">
          <label className="text-lg font-medium"> Blog Title </label>
          <input
            type="text"
            placeholder="Enter Here"
            className="border border-black w-full p-3 rounded-md  outline-indigo-600"
            onChange={(e) => setNewTitle(e.target.value)}
            value={newTitle}
          />
        </div>
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-3">
            <div className="mt-10 flex flex-col items-start w-full gap-4">
              <label className="text-lg font-medium"> Short Description </label>
              <textarea
                name=""
                id=""
                rows="5"
                placeholder="Enter Here"
                className="border border-black w-full p-3 rounded-md  outline-indigo-600"
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
              ></textarea>
            </div>
          </div>
          <div className="flex w-full mt-14">
            <div className="w-full">
              <div className="w-full">
                <label
                  for="country"
                  class="w-full text-sm font-medium leading-6 text-gray-900"
                >
                  Categories
                </label>
                <div class="w-full">
                  <select
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    onChange={(e) => setNewCatagoriesData(e.target.value)}
                    value={newCatagoriesData}
                    className="w-full rounded-md border border-black outline-indigo-600  py-1.5 text-gray-900 shadow-sm  sm:text-sm sm:leading-6"
                  >
                    <option value="">Choose</option>
                    {categories.map((item) => (
                      <option
                        className="w-full"
                        key={item._id}
                        value={item.category}
                      >
                        {item.category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-10">
          <div className=" ">
            <label className="text-lg font-medium">Text Editor</label>
          </div>
          <div>
            <ReactQuill
              theme="snow"
              value={newTextEditor}
              onChange={setNewTextEditor}
              placeholder="Tell Your Story..."
              className=""
              modules={modules}
            />
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start w-full gap-4">
          <label className="text-lg font-medium"> Seo Title </label>
          <input
            type="text"
            placeholder="Enter Here"
            className="border border-black w-full p-3 rounded-md  outline-indigo-600"
            onChange={(e) => setNewSeoTitle(e.target.value)}
            value={newSeoTitle}
          />
        </div>
        <div className="mt-10 flex flex-col items-start w-full gap-4">
          <label className="text-lg font-medium"> Meta Description </label>
          <textarea
            name=""
            id=""
            rows="5"
            placeholder="Enter Here"
            className="border border-black w-full p-3 rounded-md  outline-indigo-600"
            onChange={(e) => setNewMetaDescription(e.target.value)}
            value={newMetaDescription}
          ></textarea>
        </div>
        <div className="flex items-center justify-between mt-10 mb-24">
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white hover:bg-black/70 rounded-md"
          >
            {loading ? <ImSpinner9 className="animate-spin" /> : "Update"}
          </button>
        </div>
      </form>
    </>
  );
};

export default EditPost;
