
import { useEffect } from "react";

// import "react-image-crop/dist/ReactCrop.css";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import swal from "sweetalert";
import ApiURL from "@/components/api/Api";
import { getAuthData, setMessageEmpty } from "../login/authRedux/authSlice";
import { updateUserPhoto } from "../login/authRedux/authApiSlice";

const PhotoChange = () => {
  // dispatch
  const dispatch = useDispatch();
  // user
  const { user, message, error } = useSelector(getAuthData);

  // photo change
  const handlePhotoChange = (e) => {
    const photo = e.target.files[0];
    const photoSize = photo.size / 1000;
    if (photoSize > 400) {
      return swal("", "File size must not exceed 400 KB", "warning");
    }
    swal({
      title: "Are you sure?",
      text: "You want to change your profile picture!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willUpload) => {
      if (willUpload) {
        const formData = new FormData();
        formData.append("user_photo", photo);
        formData.append("userId", user._id);

        dispatch(updateUserPhoto(formData));
        swal("Poof! Your profile has been change ", {
          icon: "success",
        });
      }
    });
  };

  useEffect(() => {
    error && toast.error(error);
    dispatch(setMessageEmpty());
  }, [message, error, dispatch]);

  return (
    <>
      {/* photo change */}
      <span className=" relative cursor-auto sm:w-fit w-full">
        <div className="text-center">
          <figure className=" relative mb-2">
            <span className="relative inline-block">
              <img
                src={`${ApiURL}/public/images/users/${user?.user_photo}`}
                alt=""
                className="mx-auto rounded-full w-[200px] h-[200px] border-2 dark:border-slate-800"
              />
            </span>
          </figure>

          <label className=" text-[14px]  bg-violet-600 text-white p-3 rounded-sm cursor-pointer">
            {" "}
            <input
              type="file"
              onChange={handlePhotoChange}
              className="hidden"
            />{" "}
            Upload photo{" "}
          </label>
        </div>
      </span>
    </>
  );
};

export default PhotoChange;
