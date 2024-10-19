function resetKeysInObject<T extends object>(inputObject: T): T {
  // Đệ quy để xử lý từng object và kiểm tra các key "value" và "color"
  const processObject = (obj: any): any => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
          // Đệ quy tiếp tục với các object con
          processObject(obj[key]);
        } else if (key === "value" || key === "color") {
          // Đặt giá trị của key "value" hoặc "color" thành chuỗi rỗng
          obj[key] = "";
        }
      }
    }
    return obj;
  };

  // Gọi hàm xử lý đệ quy trên object đầu vào
  return processObject(inputObject);
}

function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

export { resetKeysInObject, deepClone };
