import "./profile.css";
import {} from "react-icons";

export const Profile = () => {
  return (
    <>
      <div>
        {/* banner start */}
        <div className="banner">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMGUJZD4Jai-Gs_drGyK8HC5IqhS8vAnOu2Q&usqp=CAU"
            alt="Image alt text"
          />
        </div>

        {/* banner ends */}

        {/* dp */}
        <div className="profile_img_div">
          <img
            src="https://1.bp.blogspot.com/-W_7SWMP5Rag/YTuyV5XvtUI/AAAAAAAAuUQ/hm6bYcvlFgQqgv1uosog6K8y0dC9eglTQCLcBGAsYHQ/s880/Best-Profile-Pic-For-Boys%2B%25281%2529.jpg"
            className="profile_img"
          />
        </div>

        {/* dp ends */}

        {/* profile details start */}
        <div className="profileDetail">
          <h1 className="text-4xl font-bold mt-2 ml-2 mr-2 mb-2 ">Azuki</h1>
          <span>Created by</span>{" "}
          <span className="text-sky-400">TeamAzuki</span>
          {/* cards start */}
          <div className=" grid grid-cols-4 content-center cards ">
            <div>
              <h1 className="text-2xl font-bold">5.4K</h1>
              <span>items</span>
            </div>

            <div>
              <h1 className="text-2xl font-bold">8.1K</h1>
              <p>owners</p>
            </div>

            <div>
              <h1 className="text-2xl font-bold">81.3</h1>
              <p>floor price</p>
            </div>

            <div>
              <h1 className="text-2xl font-bold">4.5K</h1>
              <p>volume traded</p>
            </div>
          </div>
          {/*  end cards */}
          <p>
            Take the red bean to join the garden. View the collection at
            azuki.com/gallery. Azuki starts with a collection of 10,000 avatars
            that give you membership access to The Garden: a corner of the
            internet where artists, builders, and web3 enthusiasts meet to
            create a decentralized future. Azuki holders receive access to
            exclusive drops, experiences, and more. Visit azuki.com for more
            details. We rise together. We build together. We grow together.
          </p>
        </div>

        {/* profile details ends */}

        <hr />
        {/* items and activity buttons start */}
        <div className="hr-btn-div">
          <div>items</div>
          <div>activity</div>
        </div>

        {/* items and activity buttons ends */}
      </div>
    </>
  );
};
