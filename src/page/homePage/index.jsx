import { Image } from "antd";
import React from "react";

const HomePage = () => {
  return (
    <div className="relative top-0 " style={{}}>
      <div
        // bg-color
        className="bg-orange-400 py-5 "
        style={{ width: "100%", height: "100%" }}
      >
        <div
          // bg-color cover text
          className="mx-auto p-5 bg-orange-900 rounded-3xl "
          style={{ width: "60%" }}
        >
          {/* text-color */}
          <div className=" text-white ">
            <h1 className="text-4xl mb-5">About this game</h1>
            <p className="mb-5">
              “Elias,” a world centered around the World Tree Various races
              living under the protection of the World Tree! The leader who
              suddenly becomes the head of a world religious cult leads his cute
              apostles on an adventure!
            </p>
            <Image
              style={{ borderRadius: "12px" }}
              src="https://i0.wp.com/www.droidgamers.com/wp-content/uploads/2024/05/Trickcal-ReVIVE.jpg?fit=1200%2C9999&ssl=1"
              preview={false}
            ></Image>
            <p className="mb-5">
              The mobile gacha game Trickcal Re:VIVE, known for its super cute
              and hilarious characters with ridiculously pinchable cheeks, is
              set for a global release. <br /> <br />
              Here’s the short story: A Reddit post turned quite a few eyes.
              Someone stumbled upon a hidden link to an unreleased Trickcal
              Re:VIVE version on the Google Play Store. The listing, which is
              now gone, showed English text and confirmed BiliBili Games as the
              publisher for the global release. BiliBili Games, huh? That caused
              a bit of a stir in the online gacha community. <br /> <br />
              Some folks are worried. They’ve seen how BiliBili Games has
              handled other global releases, and, well, let’s just say it wasn’t
              always well received. Others are more optimistic, hoping this is a
              fresh start for BiliBili and Trickcal Re:VIVE. <br /> <br />
              One user on Reddit chimed in, saying they recently finished
              translating the game’s story. They also praise it for being funny
              and full of internet references and recommend it to anyone looking
              for a casual, lighthearted game with a silly story and quirky
              characters.
            </p>
            <Image
              style={{ borderRadius: "12px" }}
              src="https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/a7af47ea-ffce-44ee-b27a-37edf84aadb8/2549490945/tricky-revive-Playing-Tricky-Revive-android.jpg"
              preview={false}
            ></Image>
            <h1 className="text-4xl mb-5"> What To Expect</h1>
            <p className="mb-5">
              Think strategic card battles with a twist. You’ll build your deck
              as you fight your way through dungeons, but the challenges change
              every time. The game’s full of references to internet jokes and
              pop culture. Additionally, daily tasks shouldn’t take an eternity,
              but be prepared to put in some effort to level up your characters.{" "}
              <br /> <br />
              So, should you get excited? That depends. The global release of
              Trickcal Re:VIVE is something to keep an eye on. While some gamers
              are wary of the possible publisher, the core gameplay sounds
              engaging, and the art style is undeniably cute.
              <br /> <br />
              If you’re looking for a super chill game with adorable characters
              and a goofy story, Trickcal Re:VIVE might be your jam. But if
              you’re worried about how BiliBili Games will handle the global
              release, you might want to wait and see how things shake out.
              <br /> <br />
              Before you go, check out the scoop on Brown Dust 2 X Mushoku
              Tensei Season 2 Collaboration!
            </p>
            <Image
              style={{ borderRadius: "12px" }}
              src="https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/a7af47ea-ffce-44ee-b27a-37edf84aadb8/2233381178/tricky-revive-Have-fun-with-Tricky-Revive-android.jpg"
              preview={false}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
