import { CustomDragDrop } from "./CustomContainer";
import { useState, useEffect } from "react";

export default function DragComponent({ ownerLicense, setOwnerLicense }) {
  // const [ownerLicense, setOwnerLicense] = useState([]);

  useEffect(() => {
    console.log(ownerLicense);
  }, [ownerLicense]);

  function uploadFiles(f) {
    setOwnerLicense([...ownerLicense, ...f]);
  }

  function deleteFile(indexImg) {
    const updatedList = ownerLicense.filter((ele, index) => index !== indexImg);
    setOwnerLicense(updatedList);
  }

  return (
    <div className="bg-white rounded-lg w-full px-5 pt-3 pb-5">
      <div className="pb-[8px] border-b border-[#e0e0e0]">
        <h2 className="text-black text-[17px] font-[600]">
          Drag and Drop Container
        </h2>
      </div>
      <CustomDragDrop
        ownerLicense={ownerLicense}
        onUpload={uploadFiles}
        onDelete={deleteFile}
        count={3}
        formats={["jpg", "jpeg", "png"]}
      />
    </div>
  );
}
