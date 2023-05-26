// setItem(key, value) – 키-값 쌍 저장 (import)
// getItem(key) – 키에 해당하는 값 호출 (import)
// removeItem(key) – 해당 값 삭제
// clear() – 모든 데이터 삭제
// key(index) – 인덱스(index)에 해당하는 키 호출
// length – 저장된 항목의 개수

const memo = [];
memo.push(["화요일", "복습"]);
memo.push(["화요일", "PyScript"]);
memo.push(["화요일", "Project introduce"]);
memo.push(["수요일", "Project"]);

localStorage.setItem("메모", memo);
