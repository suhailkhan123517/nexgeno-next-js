"use client";
import { CldUploadButton } from "next-cloudinary";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsImages } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { LuLoader2 } from "react-icons/lu";

const Profile = ({ id, user }) => {
  const { data: session } = useSession();
  if (!session) redirect("/sign-in");
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [title, setTitle] = useState(user.title);
  const [role, setRole] = useState(user.role);
  const [imageUrl, setImageUrl] = useState(user.imageUrl);
  const [publicId, setPublicId] = useState(user.publicId);
  const [loading, setLoading] = useState("");
  const router = useRouter();

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
    try {
      setLoading(true);

      const res = await fetch(`/api/register/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          title,
          role,
          publicId,
          imageUrl,
        }),
      });

      if (res.ok) {
        toast.success("User Updated Successfully");
        router.push("/dashboard");
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
      <div className="grid grid-cols-3 gap-10 mt-10">
        <div className="flex gap-5 relative">
          <CldUploadButton
            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
            className={` border-2 h-72 border-dotted grid place-items-center bg-slate-100 relative rounded-lg w-full ${
              imageUrl && "pointer-events-none "
            }`}
            onUpload={handleImageUpload}
          >
            <div className="flex items-center gap-2  ">
              <BsImages />
              Upload Image
            </div>
            {imageUrl && (
              <Image
                src={imageUrl || "/noavatar.png"}
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
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label>Name</label>
              <input
                type="text"
                className="p-3 rounded-lg border-[2px]  outline-indigo-600"
                placeholder="Enter Name Here..."
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                type="text"
                className="p-3 rounded-lg border-[2px]  outline-indigo-600"
                placeholder="Enter Name Here..."
                value={email}
                readonly
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Title</label>
              <input
                type="text"
                className="p-3 rounded-lg border-[2px]  outline-indigo-600"
                placeholder="Enter Name Here..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Role</label>
              {session?.user?.role === "admin" ? (
                <>
                  <select
                    className="p-3 rounded-lg border-[2px]  outline-indigo-600"
                    onChange={(e) => setRole(e.target.value)}
                    value={role}
                  >
                    <option>Select</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    className="p-3 rounded-lg border-[2px]  outline-indigo-600"
                    placeholder="Enter Name Here..."
                    value={role}
                  />
                </>
              )}
            </div>
            <button
              type="submit"
              className="py-3 px-4 bg-black text-white rounded-lg w-max"
            >
              {loading ? <LuLoader2 className="animate-spin" /> : "Update"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
