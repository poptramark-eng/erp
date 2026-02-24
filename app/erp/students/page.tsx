"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";

export default function Student() {
  /*useEffect(() => {
    async function sch(event: React.FormEvent<HTMLFormElement>) {
      // const form = new FormData(event.currentTarget);
      //const school = form.get("school");
      const sch = await fetch("/api/erp/schools");
      const res = await sch.json();
      const schools = res.message;
      setSchools(schools);
      console.log(school);
    }
    // sch();
  }, []);*/
  return <div></div>;
}
