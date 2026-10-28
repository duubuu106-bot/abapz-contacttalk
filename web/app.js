await import('/web/app.js');

const tasks = await Yeollaktok.loadTasks('/data/sample_tasks.json');
const recommendations = Yeollaktok.recommendTasks(tasks);

console.table(recommendations);
console.log(recommendations); // 판단 근거와 다음 행동 확인
