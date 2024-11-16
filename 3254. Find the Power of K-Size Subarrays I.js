/**
 * @param {number[]} nums - المصفوفة المدخلة
 * @param {number} k - العدد اللي خاصنا نقارنو بيه
 * @return {number[]} - النتائج بعد المقارنة
 */
function resultsArray(nums, k) {
  const n = nums.length; // حجم المصفوفة
  const f = Array(n).fill(1); // مصفوفة مساعدة باش نحسبو التتابع

  // تكرار على المصفوفة لحساب التتابعات
  for (let i = 1; i < n; ++i) {
    if (nums[i] === nums[i - 1] + 1) {
      f[i] = f[i - 1] + 1;
    }
  }

  const ans = []; // مصفوفة النتائج

  //   hna nloopiw array bah njibo finnals
  for (let i = k - 1; i < n; ++i) {
    ans.push(f[i] >= k ? nums[i] : -1);
  }

  return ans;
}

// أمثلة:
console.log(resultsArray([1, 2, 3, 4, 5], 3)); // Output: [3, 4, 5]
console.log(resultsArray([10, 11, 12, 13, 14], 2)); // Output: [11, 12, 13, 14]
console.log(resultsArray([1, 3, 5, 7], 2)); // Output: [-1, -1, -1, -1]
