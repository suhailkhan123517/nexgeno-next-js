"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { catagoriesBlog } from "@/utils/data";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ImSpinner9 } from "react-icons/im";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
  ],
};

const BlogWrite = () => {
  const [latestFile, setLatestFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [textEditor, setTextEditor] = useState("");
  const [catagories, setCatagories] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onDrop = useCallback((acceptedFiles) => {
    // Keep only the latest dropped file
    const latest = acceptedFiles[acceptedFiles.length - 1];
    setLatestFile(latest);

    // Create a Blob object from the latest file
    const blob = new Blob([latest]);

    // Create a temporary URL for the Blob and set it as the image source
    setImageUrl(URL.createObjectURL(blob));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*", // Define accepted file types (e.g., images)
    multiple: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = new FormData();
      data.set("file", latestFile);
      data.set("title", title);
      data.set("description", description);
      data.set("textEditor", textEditor);
      data.set("catagories", catagories);

      const res = await fetch("http://localhost:3000/api/blog", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        toast.success("Blog Successfully Post");
        router.push("/dashboard/blog");
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
        {!latestFile ? (
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
        ) : (
          <>
            <div className="flex flex-col justify-center items-center h-[360px] border-dashed border-2  border-gray-800 hover:border-indigo-600 rounded-md gap-4 overflow-hidden">
              <Image src={imageUrl} width={400} height={400} alt="blog image" />
            </div>
            <div>{latestFile.name}</div>
          </>
        )}
        <div className="mt-10 flex flex-col items-start w-full gap-4">
          <label className="text-lg font-medium"> Blog Title </label>
          <input
            type="text"
            placeholder="Enter Here"
            className="border border-black w-full p-3 rounded-md  outline-indigo-600"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mt-10 flex flex-col items-start w-full gap-4">
          <label className="text-lg font-medium"> Short Description </label>
          <textarea
            name=""
            id=""
            rows="10"
            placeholder="Enter Here"
            className="border border-black w-full p-3 rounded-md  outline-indigo-600"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: textEditor }} /> */}
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
        </div>
        <div className="flex items-center justify-between mt-10 mb-24">
          <div>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white hover:bg-black/70 rounded-md"
            >
              {loading ? <ImSpinner9 className="animate-spin" /> : "Submit"}
            </button>
          </div>
          <div>
            <Menu as="div" className="relative inline-block ">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  Catagories
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-200 rounded-md bg-[#fffbfd] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {catagoriesBlog.map((item) => (
                    <div key={item.id} className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <span
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                            onClick={() => setCatagories(item.title)}
                          >
                            {item.title}
                          </span>
                        )}
                      </Menu.Item>
                    </div>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </form>
    </>
  );
};

export default BlogWrite;
