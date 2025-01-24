import Steps from "./Steps";

const DeliveryInfo = () => {
  return (
    <div>
      <div className="bg-white p-8 border rounded-2xl gap-10">
        <div className="flex items-center">
          <p className="text-xl font-bold">1. Сагс</p>
          <p>(4)</p>
        </div>
        <div className="border-dashed border-b-2">
          <div className="w-fit flex flex-col justify-center items-center gap-4 ">
            <div className="w-fit rounded-2xl flex justify-between  items-center	p-4">
              <div className="flex">
                <div>
                  <img
                    style={{
                      backgroundImage: 'url("./Pics/pinecone1.png")',
                      width: "100px",
                      height: "100px",
                      margin: "0px 24px 0px 0px",
                    }}
                    className="w-[100px] h-[100px] rounded-xl m-2 bg-cover "
                  />
                </div>
                <div>
                  <p>Chunky Glyph Tee</p>
                  <p>1x120'000₮</p>
                  <p className="font-bold">120’000₮</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-fit flex flex-col justify-center items-center gap-4	">
            <div className="w-fit rounded-2xl flex justify-between  items-center	p-4">
              <div className="flex">
                <div>
                  <img
                    style={{
                      backgroundImage: 'url("./Pics/zurg1.png")',
                      width: "100px",
                      height: "100px",
                      margin: "0px 24px 0px 0px",
                    }}
                    className="w-[100px] h-[100px] rounded-xl m-2 bg-cover "
                  />
                </div>
                <div>
                  <p>Chunky Glyph Tee</p>
                  <p>1x120'000₮</p>
                  <p className="font-bold">120’000₮</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-fit flex flex-col justify-center items-center gap-4	">
            <div className="w-fit rounded-2xl flex justify-between  items-center	p-4">
              <div className="flex">
                <div>
                  <img
                    style={{
                      backgroundImage: 'url("./Pics/zurg2.png")',
                      width: "100px",
                      height: "100px",
                      margin: "0px 24px 0px 0px",
                    }}
                    className="w-[100px] h-[100px] rounded-xl m-2 bg-cover "
                  />
                </div>
                <div>
                  <p>Chunky Glyph Tee</p>
                  <p>1x120'000₮</p>
                  <p className="font-bold">120’000₮</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <p>Нийт төлөх дүн:</p>
          <p className="font-bold">360'000₮</p>
        </div>
        <div className="flex justify-end"></div>
      </div>
    </div>
  );
};
export default DeliveryInfo;
