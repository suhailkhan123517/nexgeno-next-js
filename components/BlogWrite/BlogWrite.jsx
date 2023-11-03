"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useSession } from "next-auth/react";
import "react-quill/dist/quill.snow.css";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ImSpinner9 } from "react-icons/im";
import dynamic from "next/dynamic";
import UserList from "../UserList/UserList";
import baseUrl from "@/utils/baseUrl";

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

const BlogWrite = ({ categories }) => {
  const CLOUD_NAME = "dx47qjwzc";
  const UPLOAD_PRESET = "nexgeno";

  const [latestFile, setLatestFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [textEditor, setTextEditor] = useState("");
  const [catagoriesData, setCatagoriesData] = useState("");
  const [writer, setWriter] = useState("");
  const [seoTitle, setSeoTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [blogDate, setBlogDate] = useState("");
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const router = useRouter();

  useEffect(() => {
    const currentDate = new Date();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const currentMonthName = months[month];
    const dateStr = `${day} ${currentMonthName} ${year}`;

    setBlogDate(dateStr);
  }, []);

  const onDrop = useCallback((acceptedFiles) => {
    const latest = acceptedFiles[acceptedFiles.length - 1];
    setLatestFile(latest);

    const blob = new Blob([latest]);

    setImageUrl(URL.createObjectURL(blob));
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
      const imageUrl = await uploadImage();

      const res = await fetch(`${baseUrl}/api/blog`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageUrl,
          title,
          description,
          textEditor,
          catagoriesData,
          writer,
          seoTitle,
          metaDescription,
          blogDate,
          authorId: session?.user?._id,
        }),
      });

      if (res.ok) {
        toast.success("Blog Successfully Post");
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

  const uploadImage = async () => {
    if (!latestFile) return;

    const formData = new FormData();

    formData.append("file", latestFile);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      const imageUrl = data["secure_url"];

      return imageUrl;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="max-w-4xl" onSubmit={handleSubmit}>
        {/* <div className="grid grid-cols-2 gap-10">
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
            {latestFile && (
              <>
                <div className="flex flex-col justify-center items-center h-[360px] border-dashed border-2  border-gray-800 hover:border-indigo-600 rounded-md gap-4 overflow-hidden">
                  <Image
                    src={imageUrl}
                    width={400}
                    height={400}
                    alt="blog image"
                  />
                </div>
                <div>{latestFile.name}</div>
              </>
            )}
          </div>
        </div> */}

        {/* <div className="grid grid-cols-4 gap-5">
          <div className="col-span-3">
            <div className="mt-10 flex flex-col items-start w-full gap-4">
              <label className="text-lg font-medium"> Blog Title </label>
              <input
                type="text"
                placeholder="Enter Here"
                className="border border-black w-full p-3 rounded-md  outline-indigo-600"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end mt-20">
            <div>
              <UserList setWriter={setWriter} />
            </div>
          </div>
        </div> */}
        {/* <div className="grid grid-cols-4 gap-5">
          <div className="col-span-3">
            <div className="mt-10 flex flex-col items-start w-full gap-4">
              <label className="text-lg font-medium"> Short Description </label>
              <textarea
                name=""
                id=""
                rows="5"
                placeholder="Enter Here"
                className="border border-black w-full p-3 rounded-md  outline-indigo-600"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="flex w-full mt-14">
            <div className="w-full">
              <div className="w-full">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Categories
                </label>
                <div className="w-full">
                  <select
                    onChange={(e) => setCatagoriesData(e.target.value)}
                    className="w-full rounded-md border border-black outline-indigo-600  py-1.5 text-gray-900 shadow-sm  sm:text-sm sm:leading-6"
                  >
                    <option>Select</option>
                    {categories &&
                      categories.categories.map((item) => (
                        <option key={item._id} value={item.category}>
                          {" "}
                          {item.category}{" "}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div dangerouslySetInnerHTML={{ __html: textEditor }} />
        <div className=" mt-10">
          <div className=" ">
            <label className="text-lg font-medium">Text Editor</label>
          </div>
          <div>
            <ReactQuill
              theme="snow"
              value={textEditor}
              onChange={setTextEditor}
              placeholder="Tell Your Story..."
              className=""
              modules={modules}
            />
          </div>
        </div> */}

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
            {latestFile && (
              <>
                <div className="flex flex-col justify-center items-center h-[360px] border-dashed border-2  border-gray-800 hover:border-indigo-600 rounded-md gap-4 overflow-hidden">
                  <Image
                    src={imageUrl}
                    width={400}
                    height={400}
                    alt="blog image"
                  />
                </div>
                <div>{latestFile.name}</div>
              </>
            )}
          </div>
        </div>

        <div className="mt-5">
          <label className="text-lg font-medium"> Blog Title </label>
          <input
            type="text"
            placeholder="Enter Here"
            className="border border-black w-full p-3 rounded-md  outline-indigo-600"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <label className="text-lg font-medium"> Short Description </label>
          <textarea
            name=""
            id=""
            rows="5"
            placeholder="Enter Here"
            className="border border-black w-full p-3 rounded-md  outline-indigo-600"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="mt-5">
          <label className="text-lg font-medium">Categories</label>
          <select
            onChange={(e) => setCatagoriesData(e.target.value)}
            className="w-full rounded-md border border-black outline-indigo-600  py-3 text-gray-900 shadow-sm  sm:text-sm sm:leading-6"
          >
            <option>Select</option>
            {categories &&
              categories.categories.map((item) => (
                <option key={item._id} value={item.category}>
                  {" "}
                  {item.category}{" "}
                </option>
              ))}
          </select>
        </div>
        <div className="mt-5">
          <label className="text-lg font-medium"> Seo Title </label>
          <input
            type="text"
            placeholder="Enter Here"
            className="border border-black w-full p-3 rounded-md  outline-indigo-600"
            onChange={(e) => setSeoTitle(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <label className="text-lg font-medium"> Meta Description </label>
          <textarea
            name=""
            id=""
            rows="5"
            placeholder="Enter Here"
            className="border border-black w-full p-3 rounded-md  outline-indigo-600"
            onChange={(e) => setMetaDescription(e.target.value)}
          ></textarea>
        </div>
        <div
          className="mt-5"
          dangerouslySetInnerHTML={{ __html: textEditor }}
        />
        <div className=" mt-5">
          <div className=" ">
            <label className="text-lg font-medium">Text Editor</label>
          </div>
          <div>
            <ReactQuill
              theme="snow"
              value={textEditor}
              onChange={setTextEditor}
              placeholder="Tell Your Story..."
              className=""
              modules={modules}
            />
          </div>
        </div>
        <div className="text-end flex justify-end mt-5">
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white hover:bg-black/70 rounded-md"
          >
            {loading ? <ImSpinner9 className="animate-spin" /> : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
};

export default BlogWrite;
