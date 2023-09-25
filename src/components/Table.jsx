import React from "react"
import { useState, useEffect } from "react"
import { Card, Typography } from "@material-tailwind/react";

const Table = () => {
    const TABLE_HEAD = ["#", "Username", "Score", "Roll No"];
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const response = await fetch("https://sheetdb.io/api/v1/t073br34uobvq?sort_by=Score&sort_order=desc&cast_numbers=Score")
        const data = await response.json();
        setData(data);
        console.log(data);
        console.log("data fetched")
    }
    
    useEffect(() => {
        fetchData();
    }, []);

    
    return (
        <>
            <Card className="h-full w-full overflow-scroll">
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
                    {index+1}
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
        </>
    )
}

export default Table;