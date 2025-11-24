"use client";
import Image from "next/image";
import minus from "@/public/icons/common/minus.svg";
import tik from "@/public/icons/common/tik.svg";
import { useState } from "react";

type Item = {
  label: string;
  checked: boolean;
};

export default function FilterCard({
  title,
  items,
}: {
  title: string;
  items: Item[];
}) {
  const [list, setList] = useState(items);

  const toggle = (index: number) => {
    setList((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="border border-(--color-border) py-5 px-6 rounded-xl">
      <div className="flex justify-between w-full">
        <p className="text-lg font-semibold">{title}</p>
        <Image src={minus} width={25} height={25} alt="collapse" className="cursor-pointer" />
      </div>

      <div className="h-px w-full bg-(--color-border) mt-3"></div>

      <div className="mt-4 flex flex-col gap-2">
        {list.map((item, i) => (
          <div
            key={i}
            onClick={() => toggle(i)}
            className="flex items-center gap-2.5 w-full cursor-pointer"
          >
            {item.checked ? (
              <Image src={tik} width={15} height={15} alt="checked" />
            ) : (
              <input
                type="checkbox"
                className="w-3.5 h-3.5 rounded-lg cursor-pointer"
                checked={false}
                readOnly
              />
            )}
            <p className="font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
