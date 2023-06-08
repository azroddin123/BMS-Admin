import React, { useEffect, useState } from "react";
import Headline1 from "@/components/Layout/Typography/Headline1";
import Headline2 from "@/components/Layout/Typography/Headline2";
import Lead1 from "@/components/Layout/Typography/Lead1";
import Button from "@/components/formUI/Button";
import axios from "axios";

const ArtistSingle = ({ artist, topSuggestions, reviews }: any) => {
  console.log({ artist });
  const initialState = {
    message: "",
    user: artist.id,
  };
  const [starcount, setStarCount] = useState(0);
//   const [reviews, setReviews] = useState(0);

  const handleStarClick = (count: any) => {
    setStarCount(count);
  };  
  const [data, setData] = useState<{ starcount: number; id: string; message: string; user: any; }[]>([]);

  const [formData, setFormData] = useState(initialState);
  const formDataHandler = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = () => {
    if (!starcount || !formData.message) return;
    const _data = {
      ...formData,
      starcount: starcount,
    };
    console.log({ data });
    setData([
      ...data,
      { ...formData, starcount, id: new Date().toISOString() },
    ]);
    setFormData(initialState);
    setStarCount(0);
    axios
      .post("/portal/artist-review", _data, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF6aGFyQG1haWwuY29tIn0.3NPQleNe38oWlbO5E3W6lQkD3FifEjJ7JB2M3tGmDeM",
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response));
  };

  const fetchData = async() => {
	let data2 = await fetch(
		`/portal/artist-review?user_id=${artist?.id}`,
		{
		  method: "GET",
		  headers: {
			Authorization:
			  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF6aGFyQG1haWwuY29tIn0.3NPQleNe38oWlbO5E3W6lQkD3FifEjJ7JB2M3tGmDeM",
		  },
		}
	  );
	  let reviewData : any = await data2.json();
	  setData(reviewData.data)
	  console.log({ reviewData });
  }

  useEffect(() => {
  fetchData()
  }, []);

  return (
    <div>
      <section className="flex flex-col md:flex-row bg-[#1F1D1C] rounded-lg xs:py-[10px!important] py-[1rem!important] ">
        <div className="md:w-2/5">
          <img
            src={"http://192.168.1.8:8000" + artist.image}
            alt={artist.first_name + " " + artist.last_name || "Hero Image"}
            className="h-[367] w-[238px] object-cover rounded-lg m-auto"
          />
        </div>
        <div className="md:w-2/5 ">
          <div className="flex gap-2 mb-8 justify-center md:justify-start mt-4 md:mt-0">
            {/* <div className="p-0 rounded-md bg-slate-700 text-white px-2 w-fit">
							1.1k Reviews
						</div> */}
            {/* <div className="p-0 rounded-md  bg-violet-700 text-white px-2 w-fit">
							#1 Trending
						</div> */}
          </div>
          <Headline1
            isH1
            className={"text-center md:text-left"}
            style={{ fontWeight: "700", color: "white", margin: "0" }}
          >
            {artist?.first_name} {artist?.last_name}
          </Headline1>
          <Lead1
            className={"text-center md:text-left"}
            style={{ fontSize: "18px", fontWeight: "700", color: "white" }}
          >
            {artist?.city}
          </Lead1>
          <div className={"text-center md:text-left"}>
            ⭐⭐⭐
            <span style={{ filter: "grayscale(1)" }}>⭐⭐</span>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center mt-8">
            <div className="flex flex-col gap-0 text-white">
              <p className="text-[14px]">Phone Number : </p>
              <div className="text-[20px]">+91{artist?.mob_num}</div>
            </div>
            <div className="flex flex-col gap-0 text-white">
              <p className="text-[14px]">Email Address : </p>
              <div className="text-[20px]">{artist?.email}</div>
            </div>
          </div>
          <Button
            style={{
              background: "#FF7D45",
              border: "none",
              color: "white",
            }}
            className="mt-4 mx-auto md:mx-0"
            secondary
            link={`https://wa.me/91${artist?.mob_num}`} //Only indian numbers supported for now
            text="LET’S WHASTAPP"
          />
        </div>
        {artist?.ig_link && (
          <a href={artist?.ig_link} target="_blank">
            <div className="flex text-white gap-1 justify-center md:justify-start mt-4">
              <img
                src="/images/icons.webp"
                style={{ width: "20px", height: "20px" }}
                alt=""
              />
              <span>@{artist?.ig_link}</span>
            </div>
          </a>
        )}
      </section>

      <section className="reviews-section">
        <Headline2 className={"border-l-2 border-gray-700 pl-2 mb-10"}>
          Reviews
        </Headline2>

        <div className="reviews-wrapper flex gap-4 flex-wrap overflow-auto pb-2 justify-center">
          {data?.map((r: any) => (
            <div
            key = {r.id}
              id={r.id}
              className="reviews-item border rounded-lg border-gray-700 p-4 max-w-[100%] md:w-[30%] shrink-0 grow-0"
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 41.98%, #F4F4F4 100%)",
              }}
            >
              <div className="flex gap-2">{"⭐".repeat(r.starcount)}</div>
              <p className="text-[16px] font-semibold mt-4 min-h-[auto]">
                {r.message}
              </p>
              {/* <p className="text-[14px] mt-4">Arbaz Ansari</p>
						<p className="text-[14px]">Yerwada, Pune</p> */}
            </div>
          ))}
        </div>
        <div className="mt-[3rem] form flex flex-col gap-4 max-w-[400px] m-auto border border-gray-500 rounded-sm p-3 ">
          <p>Add Review</p>
          <textarea
            className="p-2 border-gray-700 rounded border"
            placeholder="Search By Name, City..."
            value={formData.message}
            onChange={formDataHandler}
            name="message"
          />
          <div>
            {[1, 2, 3, 4, 5].map((count) => (
              <span
                key={count}
                onClick={() => handleStarClick(count)}
                style={{
                  cursor: "pointer",
                  color: count <= starcount ? "yellow" : "gray",
                  filter: count > starcount ? "grayscale(1)" : "",
                  marginRight: "5px",
                }}
              >
                ⭐
              </span>
            ))}
          </div>
          <div
            onClick={onSubmit}
            style={{ cursor: "pointer" }}
            className="m-auto p-2 bg-[#434343] text-white rounded-lg relative top-1 md:top-0.5"
          >
            SUBMIT
          </div>
        </div>
      </section>

      <section className="suggestions-section">
        <Headline2 className={"border-l-2 border-gray-700 pl-2 mb-10"}>
          Suggestions
        </Headline2>
        <div className="flex flex-wrap md:justify-center gap-2 md:gap-[50px] my-[14px] md:my-[50px]  m-auto">
          {topSuggestions.map((e: any) => (
            <div
              key={e.id}
              className="relative rounded-[16px] bg-black h-[135px] overflow-hidden p-1 w-full md:w-[30%] md:h-[470px] flex"
            >
              <img
                src={"http://192.168.1.8:8000" + e.image}
                alt={e.first_name + " " + e.last_name || "Hero Image"}
                className="rounded-xl h-full w-[140px] md:w-auto object-cover"
              />
              <div className="md:absolute bottom-0 left-0 bg-[#0000006b] h-[135px] z-10 w-full text-white">
                <div className="flex flex-col md:flex-row justify-between p-2 mb-2">
                  <div>
                    <h3 className=" text-[14px] md:text-[20px] font-bold">
                      {e.first_name} {e.last_name}
                    </h3>
                    <h6 className="text-[12px] md:text-[14px] font-bold">
                      {e.city || e.email}
                    </h6>
                  </div>
                  <div>
                      <div className=" text-[10px] md:text-[16px]">⭐ {e.starcount}/5</div>
                      {e.user_review.length > 0 && <div className=" text-[10px] md:text-[16px]">
											{e.user_review.length} Reviews
										</div>}
                    </div>
                </div>
                <Button
                  className="text-[12px] relative max-w-[95%] "
                  style={{
                    margin: "auto",
                    background: "#FF7D45",
                    border: "none",
                  }}
                  secondary
                  link={`/artists/${e.id}`}
                  text="GET ENQUIRY"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export async function getStaticPaths() {
  let data = await fetch(`http://192.168.1.8:8000/accounts/register`, {
    method: "GET",
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF6aGFyQG1haWwuY29tIn0.3NPQleNe38oWlbO5E3W6lQkD3FifEjJ7JB2M3tGmDeM",
    },
  });
  let allArtists = await data.json();
  const paths = allArtists.data.map((artist: any) => ({
    params: { id: artist.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking", // can also be true or 'blocking'
  };
}

export async function getStaticProps(context: any) {
  let { id } = context.params;
  let data = await fetch(`http://192.168.1.8:8000/accounts/register/${id}`, {
    method: "GET",
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF6aGFyQG1haWwuY29tIn0.3NPQleNe38oWlbO5E3W6lQkD3FifEjJ7JB2M3tGmDeM",
    },
  });
  let data2 = await fetch(
    `http://127.0.0.1:8000/portal/artist-review?user_id=${id}`,
    {
      method: "GET",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF6aGFyQG1haWwuY29tIn0.3NPQleNe38oWlbO5E3W6lQkD3FifEjJ7JB2M3tGmDeM",
      },
    }
  );
  // http://127.0.0.1:8000/portal/artist-review

  let artistsData = await data.json();
  let reviewData = await data2.json();

  let suggestionsData = await fetch(
    `http://192.168.1.8:8000/accounts/register?page=1`,
    {
      method: "GET",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF6aGFyQG1haWwuY29tIn0.3NPQleNe38oWlbO5E3W6lQkD3FifEjJ7JB2M3tGmDeM",
      },
    }
  );
  let topSuggestions = await suggestionsData.json();
  return {
    // Passed to the page component as props
    props: {
      artist: artistsData.data || {},
      topSuggestions: topSuggestions.data.slice(0, 3),
      reviews: reviewData.data,
    },
    revalidate: 10,
  };
}

export default ArtistSingle;
