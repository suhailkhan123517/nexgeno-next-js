"use client";
import baseUrl from "@/utils/baseUrl";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { useRouter } from "next/navigation";
import { CldUploadButton } from "next-cloudinary";
import { BsImages } from "react-icons/bs";

const UpdateProfileForm = ({ id, imageUrl, publicId }) => {
  const [newImageUrl, setNewImageUrl] = useState(imageUrl);
  const [newPublicId, setNewPublicId] = useState(publicId);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const removeImage = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${baseUrl}/api/removeImage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newPublicId }),
      });

      if (res.ok) {
        setNewImageUrl("");
        setNewPublicId("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(`${baseUrl}/api/register/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newImageUrl,
          newPublicId,
        }),
      });

      if (res.ok) {
        toast.success("User Successfully Update");
        router.refresh();
        router.push("/dashboard");
      } else {
        toast.error("Internal Error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (result) => {
    console.log(result);
    const info = result.info;
    if ("secure_url" in info && "public_id" in info) {
      const url = info.secure_url;
      const public_id = info.public_id;
      setNewImageUrl(url);
      setNewPublicId(public_id);
      console.log(url);
      console.log(public_id);
    }
  };

  return (
    <>
      <section className="w-full grid place-items-center">
        <div className="w-full max-w-lg relative">
          <div className="bg-white py-8 px-10 shadow-2xl  rounded-3xl">
            <Image
              src="/images/logo.webp"
              alt="logo"
              width={200}
              height={100}
              className="object-contain"
            />
            <div className="grid grid-cols-2 gap-5 mt-4">
              <div>
                <h1 className="font-satoshi font-semibold text-xl text-black tracking-wide">
                  Update Profile
                </h1>
                <p className="text-lg text-gray-600">continue to Nexgeno</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mt-8 grid place-items-center">
                <div>
                  <CldUploadButton
                    uploadPreset={
                      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
                    }
                    className={`h-32 border-2 w-32 border-dotted grid place-items-center bg-slate-100 rounded-full relative ${
                      newImageUrl && "pointer-events-none"
                    }`}
                    onUpload={handleImageUpload}
                  >
                    <div>
                      <BsImages />
                    </div>
                    {newImageUrl && (
                      <Image
                        src={newImageUrl}
                        fill
                        className="absolute object-cover inset-0 rounded-full"
                        alt="Profile Image"
                      />
                    )}
                  </CldUploadButton>

                  {newPublicId && (
                    <button
                      onClick={removeImage}
                      className="py-2 px-4 rounded-md font-bold w-fit bg-red-600 text-white mb-4 mt-4"
                    >
                      Remove Image
                    </button>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="bg-gray-800 hover:bg-black w-full mt-8 p-2 flex items-center justify-center gap-3 rounded-md text-white transition duration-300"
              >
                {loading ? (
                  <>
                    <ImSpinner9 className="animate-spin text-2xl" />
                    Continue...
                  </>
                ) : (
                  "Continue"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateProfileForm;
