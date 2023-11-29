import { split } from 'lodash';
import moment from 'moment';

export const duplicateTask = (task: any) => {
  delete task.id;
  delete task.estimateTimeLeft;
  delete task.stopAt;
  delete task.status;

  const title: any = split(task?.title, '#') || null;
  const duplicateTimes: any = title ? parseInt(title[title.length - 1]) : 0;
  const duplicateTimesNew: any = duplicateTimes + 1;
  title.pop(); // delete last array

  const titleJoin = title.join('#');
  const newTitle =
    (titleJoin ? titleJoin : task?.title) +
    ` #${duplicateTimesNew ? duplicateTimesNew : 2}`;
  const duplicate = {
    ...task,
    title: `${newTitle}`,
    status: 'toDo',
    startDate: moment().format(
      `YYYY-MM-DD [${moment(task?.startDate).hour()}]:[${moment(
        task?.startDate
      ).minute()}]:[59]`
    ),
    dueDate: moment().format(
      `YYYY-MM-DD [${moment(task?.dueDate).hour()}]:[${moment(
        task?.dueDate
      ).minute()}]:[59]`
    ),
  };

  return duplicate;
};
