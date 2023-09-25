import React, { useState, useEffect } from "react";
import { Card, Typography } from "@material-tailwind/react";
import Pagination from "@mui/lab/Pagination";
import Stack from "@mui/material/Stack";

const Table = () => {
  const TABLE_HEAD = ["#", "Username", "Score", "Roll No"];
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1); // Current page
  const itemsPerPage = 10; // Number of items per page
  const [totalPages, setTotalPages] = useState(1); // Total number of pages

  const fetchData = async () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const response = await fetch(
      `https://sheetdb.io/api/v1/t073br34uobvq?sort_by=Score&sort_order=desc&cast_numbers=Score&limit=${itemsPerPage}&offset=${startIndex}`
    );
    const jsonData = await response.json();
    setData(jsonData);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    // Fetch the total number of records and calculate the total number of pages
    const fetchTotalPages = async () => {
      const response = await fetch("https://sheetdb.io/api/v1/t073br34uobvq");
      const jsonData = await response.json();
      const totalRecords = jsonData.length;
      const calculatedTotalPages = Math.ceil(totalRecords / itemsPerPage);
      setTotalPages(calculatedTotalPages);
    };

    fetchTotalPages();
  }, []);

  return (
    <>
      <Card className="h-full w-full overflow-y-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-blue-gray-100 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(({ Username, Score, RNo }, index) => (
              <tr key={Username} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {index + 1}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {Username}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {Score}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {RNo}
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChangePage}
            color="primary"
          />
        </Stack>
      </div>
    </>
  );
};

export default Table;
