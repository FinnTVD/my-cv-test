/* eslint-disable @typescript-eslint/no-explicit-any */
export function stringToNestedObject(str: any, value: any) {
  const keys = str.split("."); // Tách chuỗi theo dấu chấm
  const result: { [key: string]: any } = {};
  let current: { [key: string]: any } = result;

  // Tạo object lồng nhau
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    if (i === keys.length - 1) {
      current[key] = value; // Gán giá trị cho key cuối cùng
    } else {
      current[key] = {}; // Tạo object rỗng cho các cấp trung gian
      current = current[key]; // Tiến vào cấp tiếp theo
    }
  }

  return result;
}

export function mergeDeep(target: any, source: any) {
  for (const key in source) {
    if (source[key] instanceof Object && key in target) {
      // Nếu giá trị của key là object, đệ quy để cập nhật sâu hơn
      mergeDeep(target[key], source[key]);
    } else {
      // Nếu không phải là object, cập nhật trực tiếp
      target[key] = source[key];
    }
  }
  return target;
}

// const str = "form.banner.title";
// const value = "some value";
// const result = stringToNestedObject(str, value);
