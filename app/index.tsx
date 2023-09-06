import React, { useEffect, useState } from "react";

const MyComponent = () => {
    const [data, setData] = useState([]);

    async function getData() {
        const res = await fetch(`${process.env.API_URL}`)
            .then((response) => response.json())
            .then((json) => setData(json));
    }

    console.log(data);

    useEffect(() => {
        getData();
    }, []);

    return <div>MyComponent</div>;
};

export default MyComponent;
