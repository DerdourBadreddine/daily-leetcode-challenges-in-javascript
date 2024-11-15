/**
 * @param {number[]} arr - المصفوفة المدخلة
 * @return {number} - الطول الأصغر للمصفوفة الفرعية اللي يمكن نحيدو
 */
function findLengthOfShortestSubarray(arr) {
  const n = arr.length; // حجم المصفوفة
  let left = 0; // مؤشر لتكرار من البداية
  let right = n - 1; // مؤشر لتكرار من النهاية

  // توسّع المؤشر الأيسر طول ما العنصر الحالي أصغر أو يساوي العنصر التالي
  // هذا يعني أن الجزء الأيسر غير متناقص
  while (left + 1 < n && arr[left] <= arr[left + 1]) {
    left++;
  }

  // إذا كانت المصفوفة كلها غير متناقصة، مكاينش حاجة خاصها تتحيد
  if (left === n - 1) {
    return 0;
  }

  // توسّع المؤشر الأيمن نحو الداخل طول ما العنصر اللي على اليسار أصغر أو يساوي العنصر الحالي
  // هذا يعني أن الجزء الأيمن غير متناقص
  while (right > 0 && arr[right - 1] <= arr[right]) {
    right--;
  }

  // احسب الطول الأولي للمصفوفة الفرعية اللي يمكن نحيدو
  let minSubarrayLength = Math.min(n - left - 1, right);

  // حاول دمج الأجزاء الغير متناقصة على اليسار واليمن
  for (let l = 0, r = right; l <= left; l++) {
    // لقى أول عنصر اللي ما أصغرش من arr[l] في الجزء الأيمن للدمج
    while (r < n && arr[r] < arr[l]) {
      r++;
    }
    // حدّث الطول الأدنى بعد الدمج
    minSubarrayLength = Math.min(minSubarrayLength, r - l - 1);
  }

  // رجع الطول الأدنى، اللي هو طول المصفوفة الفرعية الأقصر اللي يمكن نحيدو
  return minSubarrayLength;
}

// أمثلة:
console.log(findLengthOfShortestSubarray([1, 2, 3, 10, 4, 2, 3, 5])); // Output: 3
console.log(findLengthOfShortestSubarray([5, 4, 3, 2, 1])); // Output: 4
console.log(findLengthOfShortestSubarray([1, 2, 3])); // Output: 0
console.log(findLengthOfShortestSubarray([1])); // Output: 0
