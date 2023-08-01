import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import SpinnerFile from "../components/SpinnerFile";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/bundle";

export default function ListingDetails() {
  const params = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchListing() {
      const docRef = doc(db, "listing", params.listingId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setListing(docSnap.data());
        setLoading(false);
      }
    }
    fetchListing();
  }, [params.listingId]);
  if (loading) {
    return <SpinnerFile />;
  }
  // install Swiper modules
  SwiperCore.use([Autoplay, Pagination, Navigation]);

  return (
    <main>
      <Swiper
        slidesPerView={1}
        navigation={true}
        pagination={{ type: "progressbar" }}
        effect="fade"
        modules={[EffectFade]}
        autoplay={{ delay: 5000 }}
      >
        {listing.imgUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full overflow-hidden h-[300px]"
              style={{
                background: `url(${listing.imgUrls[index]}) center no-repeat`,
                backgroundSize: "cover",
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
//Solve issue list
//1.swipe version install 10 to 8.3.2
//2.Add this line SwiperCore.use([Navigation]) SwiperCore.use([Autoplay]);
//3.Help Link
//https://codesandbox.io/s/13eu6?file=/src/App.jsx
//https://stackoverflow.com/questions/69015200/react-swiper-navigation-not-working-how-to-work-it
