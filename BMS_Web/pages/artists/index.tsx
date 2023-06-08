import React, { useState } from "react";
import Button from "@/components/formUI/Button";
import InfiniteScroll from "react-infinite-scroll-component";

const Artists = (props: any) => {
  let [artists, setArtists] = useState<any[]>(props.allArtists);
  console.log({artists})
  const [search, setSearch] = useState("");
  let [pageValue, setPageValue] = useState(1);
  const [key, setKey] = useState(Math.random());
  let allCount = props.totalCount;

  let fetchMoreData: any = (isD?: boolean, noSearch?: boolean) => {
    const url = `/api/accounts/register?page=${isD ? 1 : pageValue}&search=${
      noSearch ? "" : search
    }`;
    fetch(`${url}`, {
      method: "GET",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF6aGFyQG1haWwuY29tIn0.3NPQleNe38oWlbO5E3W6lQkD3FifEjJ7JB2M3tGmDeM",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (isD) {
          setArtists([...res.data]);
          setPageValue(1);
        } else {
          setArtists([...artists, ...res.data]);
          setPageValue(pageValue + 1);
        }
      });
  };
  console.warn({ artists });

  return (
    <div key={key}>
      <div className="filter-wrapper flex gap-2 md:gap-6 items-center justify-center md:my-2 sticky top-[55px] md:top-[79px] bg-white pb-2 z-30 md:p-2">
        <div className="flex flex-1 flex-col w-auto md:w-[300px] pb-2 pt-4 relative">
          {/* <label
						htmlFor="location"
						className="mb-8 text-[14px] absolute left-2 bottom-6 md:bottom-6 px-2 bg-white"
					>
						Select By Name, City
					</label> */}
          {/* <select
						name=""
						id="location"
						className="p-2 border-gray-700 rounded border"
					>
						<option value="">All</option>
						<option value="">Kondhwa</option>
						<option value="">Viman Nagar</option>
						<option value="">Vishrantwadi</option>
					</select> */}
          <input
            type="text"
            className="p-2 border-gray-700 rounded border"
            placeholder="Search By Name, City..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div
          style={{ cursor: "pointer" }}
          className="p-2 bg-[#434343] text-white rounded-lg relative top-1 md:top-0.5"
          onClick={async () => {
            setArtists([]);
            setPageValue(1);
            await fetchMoreData(true);
          }}
        >
          <img
            src="/images/search.png"
            style={{ width: "20px", height: "20px" }}
          />
        </div>
       {search && <div
          style={{ cursor: "pointer" }}
          className="p-2 bg-[#434343] text-white rounded-lg relative top-1 md:top-0.5"
          onClick={async () => {
            setArtists([]);
            setPageValue(1);
            setSearch("");
            setKey(Math.random());
            await fetchMoreData(true, true);
            setTimeout(() => {
              function scrollContainerDown() {
                const container = document.querySelector(".container > *");
                if (container) {
                  container.scrollTo({
                    top: container.scrollTop + 200,
                    behavior: "smooth",
                  });
                }
              }
              scrollContainerDown();
            }, 500);
          }}
        >
          CLEAR
        </div>}
      </div>
      <div>
        <InfiniteScroll
          loader={""}
          className="flex flex-wrap md:justify-center gap-2 md:gap-[50px] my-[14px] md:my-[10px] m-auto"
          dataLength={artists.length}
          //This is important field to render the next data
          next={fetchMoreData}
          hasMore={artists.length !== allCount}
        >
          {artists.map((e) => {
            return (
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
                        {e.address || e.email}
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
                    link={`artists/${e.id}`}
                    text="GET ENQUIRY"
                  />
                </div>
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  let data = await fetch(`http://192.168.1.8:8000/accounts/register`, {
    method: "GET",
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF6aGFyQG1haWwuY29tIn0.3NPQleNe38oWlbO5E3W6lQkD3FifEjJ7JB2M3tGmDeM",
    },
  });
  let artistsData = await fetch(
    `http://192.168.1.8:8000/accounts/register?page=1`,
    {
      method: "GET",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF6aGFyQG1haWwuY29tIn0.3NPQleNe38oWlbO5E3W6lQkD3FifEjJ7JB2M3tGmDeM",
      },
    }
  );

  let totalCount = await data.json();
  let allArtists = await artistsData.json();

  return {
    props: {
      totalCount: totalCount.data.length,
      allArtists: allArtists.data,
    },
  };
}

export default Artists;
