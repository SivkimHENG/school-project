import React, { Fragment, useEffect, useState } from "react";
import { Card } from "component/ui/card";

export default function SearchFilter() {

  const [search,setSearch] = useState([]);

  const meal = `https://themealdb.com/api/json/v1/1/filter.php?i=${search}`


    async function getContent() {
        try {
            const response = await fetch(meal);
            const data = response.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }

    }

  useEffect(() => {

    getContent();



  },[]);

  return (

    <Fragment>
            <Card>
            </Card>



    </Fragment>


  )

}
