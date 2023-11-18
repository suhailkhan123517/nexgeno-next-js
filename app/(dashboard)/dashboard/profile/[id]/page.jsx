import Profile from "@/app/(dashboard)/dashboard/profile/components/Profile";
import baseUrl from "@/utils/baseUrl";

const getUser = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/api/register/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to a fetch user");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const ProfileUpdate = async ({ params }) => {
  const { id } = params;
  const { user } = await getUser(id);
  return (
    <>
      <Profile id={id} user={user} />
    </>
  );
};

export default ProfileUpdate;
