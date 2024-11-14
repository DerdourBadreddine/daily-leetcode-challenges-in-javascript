/**
 * @param {number} n - عدد المتاجر
 * @param {number[]} quantities - عدد المنتجات لكل نوع
 * @return {number} - العدد الأقصى للمنتجات الموزعة لأي متجر
 */
var minimizedMaximum = function (n, quantities) {
  // الدالة للتحقق إذا كان يمكن توزيع المنتوجات بحيث يكون العدد الأقصى هو x
  function canDistribute(x) {
    let requiredStores = 0;
    for (let quantity of quantities) {
      requiredStores += Math.ceil(quantity / x);
    }
    return requiredStores <= n;
  }

  // تحديد البحث الثنائي بين 1 وأكبر عدد من المنتوجات
  let left = 1;
  let right = Math.max(...quantities);

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (canDistribute(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

// أمثلة:
let n1 = 6,
  quantities1 = [11, 6];
console.log(minimizedMaximum(n1, quantities1)); // Output: 3

let n2 = 7,
  quantities2 = [15, 10, 10];
console.log(minimizedMaximum(n2, quantities2)); // Output: 5

let n3 = 1,
  quantities3 = [100000];
console.log(minimizedMaximum(n3, quantities3)); // Output: 100000 nrmlmn
