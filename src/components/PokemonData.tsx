import React, { FC, useState } from "react";

interface Data {
  name: string;
  weight: number;
  height: number;
}

interface Props {}

const PokemonData: FC<Props> = () => {
  const [data, setData] = useState<Data[]>([]);
  //const [sortKey, setSortKey] = useState<keyof Data>("name");
  //const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:80/api/pokemon");
    const json = await response.json();
    setData(json);
    setLoading(false);
  };



  return (
    <div>
      <button onClick={fetchData} disabled={loading}>
        {loading ? "Loading..." : "Load data"}
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Weight</th>
            <th>Height</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr>
              <td>{row.name}</td>
              <td>{row.weight}</td>
              <td>{row.height}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonData;