import { useEffect, useState } from 'react';
import {
  EnvironmentFilled,
  MinusOutlined,
  PlusOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Collapse, Pagination } from "antd";
import { Link } from "react-router-dom";

interface Hotel {
  id: number;
  name: string;
  location: string;
  province: string;
  minPrice: number;
  img: string;
  discription: string;
}

export default function Home() {
  const [data, setData] = useState<Hotel[]>([]);
  const [provinces, setProvinces] = useState<string[]>([]);
  const [selectedProvinces, setSelectedProvinces] = useState<string[]>([]);
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const hotelsPerPage: number = 8;

  useEffect(() => {
    fetch("/hotel.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredHotels(data);
      })
      .catch((error) => {
        console.error("Lỗi lấy data:", error);
      });
  }, []);

  useEffect(() => {
    const uniqueProvinces = [...new Set(data.map((hotel) => hotel.province))];
    setProvinces(uniqueProvinces);
  }, [data]);

  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = filteredHotels.slice(indexOfFirstHotel, indexOfLastHotel);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleProvinceChange = (checkedValues: string[]) => {
    setSelectedProvinces(checkedValues);
  };

  const handleApplyFilter = () => {
    const filtered = data.filter(hotel =>
      selectedProvinces.length === 0 || selectedProvinces.includes(hotel.province)
    );
    setFilteredHotels(filtered);
    setCurrentPage(1);
  };

  return (
    <div className="flex justify-center">
      <div className="w-[80%] pb-6 pt-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 pb-6">
          Danh sách khách sạn
        </h1>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 bg-white shadow rounded-lg p-6">
          <div className="lg:block">
            <Button
              type="primary"
              className="w-[100%] mb-2"
              onClick={handleApplyFilter}
            >
              Áp dụng
            </Button>
            <Collapse
              bordered={false}
              expandIconPosition="end"
              expandIcon={({ isActive }) =>
                isActive ? <MinusOutlined /> : <PlusOutlined />
              }
              className="hover:opacity-80 bg-white"
            >
              <Collapse.Panel
                header={<span className="font-bold">Tỉnh thành</span>}
                key="1"
              >
                <Checkbox.Group
                  className="flex-col gap-y-1"
                  value={selectedProvinces}
                  onChange={handleProvinceChange}
                >
                  {provinces.map((province) => (
                    <div className="flex items-center mb-2" key={province}>
                      <Checkbox value={province}> {province} </Checkbox>
                    </div>
                  ))}
                </Checkbox.Group>
              </Collapse.Panel>
            </Collapse>
          </div>

          <div className="lg:col-span-3">
            <div className="flex flex-row flex-wrap">
              {currentHotels.map((hotel) => (
                <div
                  key={hotel.id}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2"
                >
                  <div className="flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:opacity-50">
                    <Link
                      to={`/hoteldetail/${hotel.id}`}
                      state={{ hotel }}
                      className="flex flex-col h-full"
                    >
                      <img
                        className="rounded-t-lg h-[150px] w-full"
                        src={hotel.img}
                      />
                      <div className="p-5 flex flex-col flex-grow">
                        <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white text-center">
                          {hotel.name}
                        </h5>
                        <p className="mb-2 font-normal text-gray-700 dark:text-gray-400 truncate">
                          <EnvironmentFilled /> {hotel.location}
                        </p>
                        <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                          <DollarOutlined /> {hotel.minPrice} VND
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <Pagination
              className="flex justify-center"
              defaultCurrent={1}
              current={currentPage}
              total={filteredHotels.length}
              pageSize={hotelsPerPage}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
