import Headline1 from "@/components/Layout/Typography/Headline1";
import Headline2 from "@/components/Layout/Typography/Headline2";
import Lead1 from "@/components/Layout/Typography/Lead1";
import Button from "@/components/formUI/Button";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ParlourSingle = ({ parlour, topSuggestions }: any) => {
  const initialState = {
    message: "",
    parlour: parlour.id,
  };
  const [starcount, setStarCount] = useState(0);
  //   const [reviews, setReviews] = useState(0);

  const handleStarClick = (count: any) => {
    setStarCount(count);
  };
  const [data, setData] = useState<{ starcount: number; id: string; message: string; parlour: any; }[]>([]);

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
      .post("/portal/parlour-review", _data, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF6aGFyQG1haWwuY29tIn0.3NPQleNe38oWlbO5E3W6lQkD3FifEjJ7JB2M3tGmDeM",
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response));
  };

  const fetchData = async () => {
    let data2 = await fetch(
      `/portal/parlour-review?parlour_id=${parlour?.id}`,
      {
        method: "GET",
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF6aGFyQG1haWwuY29tIn0.3NPQleNe38oWlbO5E3W6lQkD3FifEjJ7JB2M3tGmDeM",
        },
      }
    );
    let reviewData: any = await data2.json();
    setData(reviewData.data);
    console.log({ reviewData });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <section className="flex flex-col md:flex-row bg-[#5A1524] rounded-lg xs:py-[10px!important] py-[1rem!important] ">
        <div className="relative md:w-2/5 md:mr-4 md:ml-4">
          <img
            src={"http://192.168.1.8:8000" + parlour.image}
            alt={parlour.name || "Parlour Image"}
            className="w-[94%] h-[100%] object-cover rounded-lg m-auto"
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
            {parlour?.name}
          </Headline1>
          <Lead1
            className={"text-center md:text-left"}
            style={{ fontSize: "1rem", fontWeight: "700", color: "white" }}
          >
            {parlour?.address}
          </Lead1>
          <div className={"text-center md:text-left"}>
            ⭐⭐⭐
            <span style={{ filter: "grayscale(1)" }}>⭐⭐</span>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center mt-8">
            <div className="flex flex-col gap-0 text-white">
              <p className="text-[14px]">Phone Number : </p>
              <div className="text-[20px]">+91{parlour?.contact}</div>
            </div>
            <div className="flex flex-col gap-0 text-white">
              <p className="text-[14px]">Description : </p>
              <div className="text-[20px]">{parlour?.description}</div>
            </div>
          </div>
          <Button
            style={{
              background: "#C760D0",
              border: "none",
              color: "white",
            }}
            className="mt-4 mx-auto md:mx-0"
            secondary
            link={`https://wa.me/91${parlour?.contact}`}
            text="LET’S WHASTAPP"
          />
        </div>
        {parlour?.ig_link && (
          <a href={parlour?.ig_link} target="_blank">
            <div className="flex text-white gap-1 justify-center md:justify-start mt-4">
              <img
                src="/images/icons.webp"
                style={{ width: "20px", height: "20px" }}
                alt=""
              />
              <span>@{parlour?.ig_link}</span>
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
              key={r.id}
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
      {/* <section className="reviews-section">
				<Headline2 className={"border-l-2 border-gray-700 pl-2 mb-10"}>
					Reviews
				</Headline2>

				<div
					//  ref={divRef}
					style={{
						height: "500px",
						width: "100%",
						overflowX: "scroll",
						overflowY: "hidden",
					}}
					className="reviews-wrapper flex gap-4 max-w-[97vw] overflow-auto pb-2 md:pl-40"
				>
					<div
						className="reviews-item border rounded-lg border-gray-700 p-4 max-w-[350px] md:max-w-[35%] shrink-0 grow-0"
						style={{
							background:
								"linear-gradient(180deg, #FFFFFF 41.98%, #F4F4F4 100%)",
						}}
					>
						<div className="flex gap-2">
							⭐⭐⭐<span style={{ filter: "grayscale(1)" }}>⭐⭐</span>
						</div>
						<p className="text-[24px] font-semibold mt-4 min-h-[230px]">
							I was absolutely thrilled with the makeup done by this parlour -
							they really listened to my preferences and created a look that
							made me feel confident and beautiful!
						</p>
						<p className="text-[24px]">Arbaz Ansari</p>
						<p className="">Yerwada, Pune</p>
					</div>
					<div
						className="reviews-item border rounded-lg border-gray-700 p-4 max-w-[350px] md:max-w-[35%] shrink-0 grow-0"
						style={{
							background:
								"linear-gradient(180deg, #FFFFFF 41.98%, #F4F4F4 100%)",
						}}
					>
						<div className="flex gap-2">
							⭐⭐⭐<span style={{ filter: "grayscale(1)" }}>⭐⭐</span>
						</div>
						<p className="text-[24px] font-semibold mt-4 min-h-[230px]">
							I was absolutely thrilled with the makeup done by this parlour -
							they really listened to my preferences and created a look that
							made me feel confident and beautiful!
						</p>
						<p className="text-[24px]">Arbaz Ansari</p>
						<p className="">Yerwada, Pune</p>
					</div>
					<div
						className="reviews-item border rounded-lg border-gray-700 p-4 max-w-[350px] md:max-w-[35%] shrink-0 grow-0"
						style={{
							background:
								"linear-gradient(180deg, #FFFFFF 41.98%, #F4F4F4 100%)",
						}}
					>
						<div className="flex gap-2">
							⭐⭐⭐<span style={{ filter: "grayscale(1)" }}>⭐⭐</span>
						</div>
						<p className="text-[24px] font-semibold mt-4 min-h-[230px]">
							I was absolutely thrilled with the makeup done by this parlour -
							they really listened to my preferences and created a look that
							made me feel confident and beautiful!
						</p>
						<p className="text-[24px]">Arbaz Ansari</p>
						<p className="">Yerwada, Pune</p>
					</div>
					<div
						className="reviews-item border rounded-lg border-gray-700 p-4 max-w-[350px] md:max-w-[35%] shrink-0 grow-0"
						style={{
							background:
								"linear-gradient(180deg, #FFFFFF 41.98%, #F4F4F4 100%)",
						}}
					>
						<div className="flex gap-2">
							⭐⭐⭐<span style={{ filter: "grayscale(1)" }}>⭐⭐</span>
						</div>
						<p className="text-[24px] font-semibold mt-4 min-h-[230px]">
							I was absolutely thrilled with the makeup done by this parlour -
							they really listened to my preferences and created a look that
							made me feel confident and beautiful!
						</p>
						<p className="text-[24px]">Arbaz Ansari</p>
						<p className="">Yerwada, Pune</p>
					</div>
					<div
						className="reviews-item border rounded-lg border-gray-700 p-4 max-w-[350px] md:max-w-[35%] shrink-0 grow-0"
						style={{
							background:
								"linear-gradient(180deg, #FFFFFF 41.98%, #F4F4F4 100%)",
						}}
					>
						<div className="flex gap-2">
							⭐⭐⭐<span style={{ filter: "grayscale(1)" }}>⭐⭐</span>
						</div>
						<p className="text-[24px] font-semibold mt-4 min-h-[230px]">
							I was absolutely thrilled with the makeup done by this parlour -
							they really listened to my preferences and created a look that
							made me feel confident and beautiful!
						</p>
						<p className="text-[24px]">Arbaz Ansari</p>
						<p className="">Yerwada, Pune</p>
					</div>
				</div>
			</section> */}

      <section className="suggestions-section">
        <Headline2 className={"border-l-2 border-gray-700 pl-2 mb-10"}>
          Suggestions
        </Headline2>
        <div className="flex flex-wrap md:justify-center gap-2 md:gap-[50px] my-[14px] md:my-[10px]  m-auto">
          {topSuggestions.map((e: any) => (
            <div
              key={e.id}
              className="relative rounded-[16px] bg-black h-[135px] p-1 overflow-hidden w-full md:w-[46%] md:h-[400px] flex"
            >
              <div className="relative h-full w-[200px] md:w-full">
                <img
                  src={"http://192.168.1.8:8000" + e.image}
                  alt={e.name || "Parlour Image"}
                  sizes="(min-width: 1024px) 100vw"
                  className="rounded-xl h-full object-cover"
                />
              </div>
              <div className="md:absolute bottom-0 left-0 bg-[#0000006b] h-[135px] z-10 w-full text-white">
                <div className=" flex flex-col md:flex-row justify-between p-2 mb-2">
                  <div>
                    <h3 className=" text-[14px] md:text-[20px] font-bold">
                      {e.name}
                    </h3>
                    <h6 className=" text-[12px] md:text-[16px] font-bold">
                      {e.address}
                    </h6>
                  </div>
                  <div>
                    <div className=" text-[10px] md:text-[16px]">
                      ⭐ {e.star_count}/5
                    </div>
                    {e.parlour_review?.length > 0 && (
                      <div className=" text-[10px] md:text-[16px]">
                        {e.parlour_review.length} Reviews
                      </div>
                    )}
                  </div>
                </div>
                <Button
                  className="text-[12px] relative max-w-[95%] "
                  style={{
                    margin: "auto",
                    background: "#C760D0",
                    border: "none",
                  }}
                  secondary
                  link={`parlours/${e.id}`}
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
  let data = await fetch(`http://192.168.1.8:8000/accounts/parlours`, {
    method: "GET",
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF6aGFyQG1haWwuY29tIn0.3NPQleNe38oWlbO5E3W6lQkD3FifEjJ7JB2M3tGmDeM",
    },
  });
  let allParlours = await data.json();

  const paths = allParlours.data.map((parlour: any) => ({
    params: { id: parlour.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context: any) {
  let { id } = context.params;
  let data = await fetch(`http://192.168.1.8:8000/accounts/parlours/${id}`, {
    method: "GET",
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF6aGFyQG1haWwuY29tIn0.3NPQleNe38oWlbO5E3W6lQkD3FifEjJ7JB2M3tGmDeM",
    },
  });
  let parloursData = await data.json();

  let suggestionsData = await fetch(
    `http://192.168.1.8:8000/accounts/parlours?page=1`,
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
      parlour: parloursData.data || {},
      topSuggestions: topSuggestions.data.slice(0, 3),
    },
    revalidate: 10,
  };
}

export default ParlourSingle;
