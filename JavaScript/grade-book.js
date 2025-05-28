function getAverage(testsScores) {
  let sumScores = 0;

  for (let score of testsScores) {
    sumScores += score;
  }
  return sumScores / testsScores.length;
}

function getGrade(score) {
  if (score == 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  let grade = getGrade(score);

  if (grade === "F") {
    return false;
  } else {
    return true;
  }
}

function studentMsg(testsScores, score) {
  let classAvg = getAverage(testsScores);
  let isgrade = hasPassingGrade(score);
  let grade = getGrade(score);

  if (isgrade) {
    return `Class average: ${classAvg}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${classAvg}. Your grade: ${grade}. You failed the course.`;
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 70));
